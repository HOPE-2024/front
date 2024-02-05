import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
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
  MsgCon,
} from "../../css/chat/ChatRoomCss";
import { KH_SOCKET_URL } from "../../utils/Common";
import { ChatAxiosApi } from "../../api/ChatAixosApi";
import { MyPageAxiosApi } from "../../api/MyPageAxiosApi";

export const ChatRoom = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [sender, setSender] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [inputMsg, setInputMsg] = useState("");
  const [chatList, setChatList] = useState([]);
  const ws = useRef(null);
  const navigate = useNavigate(); // useNavigate 훅 추가

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
        setSender(rsp.data.nickName);
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

  return (
    <>
      <ChatRoomContainer>
        <RoomJoiners>채팅방 참여자</RoomJoiners>
        <RoomChat>
          <ChatTitle>&lt; {roomName} &gt;</ChatTitle>
          <MsgCon ref={chatConRef}>
            {chatList.map((chat, index) => (
              <MsgBox Key={index} inSender={chat.sender === sender}>
                <MsgSender
                  isSender={chat.sender === sender}
                >{`${chat.sender}`}</MsgSender>
                <Msg>{`${chat.msg}`}</Msg>
              </MsgBox>
            ))}
          </MsgCon>
          <InputCon>
            <Input
              placeholder="메세지를 입력해주세요."
              value={inputMsg}
              onChange={onChangMsg}
              onKeyUp={onEnterKey}
            />
            <SendBtn onClick={onClickMsgSend}> 전송 </SendBtn>
          </InputCon>
        </RoomChat>
      </ChatRoomContainer>
    </>
  );
};
