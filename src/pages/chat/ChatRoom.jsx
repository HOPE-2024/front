import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChatRoomContainer,
  RoomJoiners,
  RoomChat,
  ChatTitle,
  MsgBox,
  MsgSender,
  Msg,
  InputCon,
  Input,
  SendBtn,
  ChatTitleCon,
  MsgTextCon,
  MsgProfile,
  MsgCon,
  ChatInner,
  ReportBox,
} from "../../css/chat/ChatRoomCss";
import { KH_SOCKET_URL } from "../../utils/Common";
import { ChatAxiosApi } from "../../api/ChatAxiosApi";
import { MyPageAxiosApi } from "../../api/MyPageAxiosApi";
import { ReportMadal } from "../../utils/modal/ReportMadal";

export const ChatRoom = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [sender, setSender] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [inputMsg, setInputMsg] = useState("");
  const [chatList, setChatList] = useState([]);
  const [chatMember, setChatMember] = useState([]);
  const [profile, setProfile] = useState("");
  const ws = useRef(null);
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 추가
  const [reportModalOpen, setReportModalOpen] = useState(false); // 신고하기 모달 오픈 상태 추가
  const [selectedProfile, setSelectedProfile] = useState(null); // 선택된 프로필 정보 추가

  // MsgProfile 컴포넌트에서 오른쪽 마우스 클릭 이벤트 핸들러
  const handleRightClick = (sender) => (e) => {
    e.preventDefault();
    setSelectedProfile(sender); // 선택된 프로필 정보 설정
    const contextMenu = document.getElementById("contextMenu");
    contextMenu.style.display = "block";
    contextMenu.style.top = `${e.clientY}px`;
    contextMenu.style.left = `${e.clientX}px`;
  };

  // 우클릭 메뉴 구성 및 신고하기 옵션 클릭 핸들러
  const handleReportClick = () => {
    setReportModalOpen(true); // 신고하기 모달 열기
    const contextMenu = document.getElementById("contextMenu");
    contextMenu.style.display = "none"; // 우클릭 메뉴 닫기
  };

  const onChangMsg = (e) => {
    setInputMsg(e.target.value);
  };

  const onEnterKey = (e) => {
    if (e.key === "Enter" && inputMsg) {
      e.preventDefault();
      onClickMsgSend();
    }
  };
  //전송
  const onClickMsgSend = () => {
    //웹소켓 연결되 있을 때 정보 보내기
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      if (inputMsg.trim() !== "") {
        ws.current.send(
          JSON.stringify({
            type: "TALK",
            roomId: roomId,
            sender: sender,
            msg: inputMsg,
            profile: profile,
            nickName: nickName,
          })
        );
        setInputMsg("");
      } else {
        // 빈 값일 경우 아무 동작 없이 종료
        console.log("메시지가 비어있습니다.");
      }
    } else {
      alert("채팅 연결에 실패.");
    }
  };

  // 종료 버튼
  const onClickMsgClose = () => {
    // 웹소켓 연결 끊고 이전 페이지로 이동
    ws.current.close();
    navigate(-1);
  };

  // 이전 채팅 내용을 가져오는 함수
  const loadPreviousChat = async () => {
    try {
      const res = await ChatAxiosApi.recentChatLoad(roomId);
      console.log("이전채팅내용 : ", res.data);
      const recentMessages = res.data;
      setChatList(recentMessages);
    } catch (error) {
      alert("error : 이전 대화내용을 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    // 이메일로 회원 닉네임 가져와서 sender에 저장
    const getMember = async () => {
      try {
        const rsp = await MyPageAxiosApi.memberInfo(localStorage.memberId);
        console.log("멤버 데이터 들어옴? : ", rsp.data);
        setSender(rsp.data.memberId);
        setNickName(rsp.data.nickName);
        setProfile(rsp.data.profile);
      } catch (error) {
        alert(
          "error : 회원 닉네임을 불러오지 못했습니다. 이전 페이지로 이동합니다."
        );
        // navigate(-1);
      }
    };
    getMember();
  });

  useEffect(() => {
    // 채팅방 정보 가져 오기
    const getChatRoom = async () => {
      try {
        const rsp = await ChatAxiosApi.chatDetail(roomId);
        setRoomName(rsp.data.name);
        console.log(
          "채팅방 정보 가져오기 : ",
          rsp.data,
          "채팅 룸 아이디 : ",
          roomId
        );
      } catch (error) {
        alert(
          "error : 채팅방 정보를 불러오지 못했습니다. 이전 페이지로 이동합니다."
        );
        navigate(-1);
      }
    };
    getChatRoom();
  }, [roomId]);

  useEffect(() => {
    // 웹소켓 연결하는 부분, 이전 대화내용 불러오는 함수 호출
    if (!ws.current) {
      ws.current = new WebSocket(KH_SOCKET_URL);
      ws.current.onopen = () => {
        setSocketConnected(true);
      };
    }
    if (socketConnected) {
      // 웹소켓 연결이 되어있다면,
      ws.current.send(
        JSON.stringify({
          type: "ENTER",
          roomId: roomId,
          sender: sender,
          profile: profile,
          nickName: nickName,
          msg: "처음으로 접속 합니다.",
        })
      );
      loadPreviousChat();
    }
    ws.current.onmessage = (evt) => {
      console.log("웹소켓 데이터 : ", evt.data);
      const data = JSON.parse(evt.data);
      setChatList((prevItems) => [...prevItems, data]);
    };
    // 홈페이지의 뒤로가기를 눌렀을 때, 웹소켓 연결 끊기도록 return을 적어줌
    return () => {
      ws.current.send(
        JSON.stringify({
          type: "CLOSE",
          roomId: roomId,
          sender: sender,
          profile: profile,
          nickName: nickName,
          msg: "종료 합니다.",
        })
      );
    };
  }, [socketConnected]);

  //화며 하단으로 자동 스크롤
  const chatConRef = useRef(null);
  useEffect(() => {
    if (chatConRef.current) {
      chatConRef.current.scrollTop = chatConRef.current.scrollHeight;
    }
  }, [chatList]);

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      const contextMenu = document.getElementById("contextMenu");
      if (contextMenu && !contextMenu.contains(event.target)) {
        // 클릭된 요소가 contextMenu의 자식 요소가 아니면 메뉴를 닫음
        contextMenu.style.display = "none";
      }
    };

    // mousedown 이벤트를 사용하여 메뉴 밖을 클릭했을 때 처리
    document.addEventListener("mousedown", handleClickOutsideMenu);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <ChatRoomContainer>
      <ChatInner>
        {/* <RoomJoiners>
          채팅방 참여자
          {chatMember.map((member, index) => (
            <span key={index}>{member}</span>
          ))}
        </RoomJoiners> */}
        <ChatTitleCon>
          <ChatTitle> {roomName} </ChatTitle>
        </ChatTitleCon>
        <RoomChat>
          <MsgCon ref={chatConRef}>
            {chatList.map((chat, index) => {
              if (chat.type !== "ENTER" && chat.type !== "CLOSE") {
                // 내가 보낸 메시지인지 여부를 판단
                const isMyMessage = chat.sender === sender;
                // 내가 보낸 메시지이면 ReportBox를 렌더링하지 않음
                if (isMyMessage) {
                  return (
                    <MsgBox key={index} isSender={isMyMessage}>
                      <MsgProfile
                        isSender={isMyMessage}
                        src={`/images/profile/${
                          chat.profile || "Ellipse3"
                        }.png`}
                        alt="Profile"
                      />
                      <MsgTextCon isSender={isMyMessage}>
                        <MsgSender isSender={isMyMessage}>
                          {`${chat.nickName || "Unknown"}`}
                        </MsgSender>
                        <Msg isSender={isMyMessage}>{`${chat.msg}`}</Msg>
                      </MsgTextCon>
                    </MsgBox>
                  );
                }
                // 내가 보낸 메시지가 아닌 경우에만 ReportBox를 렌더링
                return (
                  <MsgBox key={index} isSender={isMyMessage}>
                    <MsgProfile
                      isSender={isMyMessage}
                      src={`/images/profile/${chat.profile || "Ellipse19"}.png`}
                      alt="Profile"
                      onContextMenu={handleRightClick(chat.sender)}
                    />
                    <MsgTextCon>
                      <MsgSender isSender={isMyMessage}>
                        {`${chat.nickName}`}
                      </MsgSender>
                      <Msg isSender={isMyMessage}>{`${chat.msg}`}</Msg>
                    </MsgTextCon>
                  </MsgBox>
                );
              }
              return null; // 입장 및 퇴장 메시지인 경우에는 null 반환하여 렌더링하지 않음
            })}
          </MsgCon>
          <InputCon>
            <Input
              placeholder="메세지를 입력해주세요."
              value={inputMsg}
              onChange={onChangMsg}
              onKeyUp={onEnterKey}
            />
            <SendBtn onClick={onClickMsgSend}>전송</SendBtn>
          </InputCon>
        </RoomChat>
      </ChatInner>
      <ReportMadal
        open={reportModalOpen}
        setOpen={setReportModalOpen}
        member={selectedProfile} // 선택된 프로필 정보 전달
        type="채팅"
      />
      <ReportBox id="contextMenu" style={{ display: "none" }}>
        <div
          style={{
            color: "white",
          }}
          onClick={handleReportClick}
        >
          신고하기
        </div>
      </ReportBox>
    </ChatRoomContainer>
  );
};
