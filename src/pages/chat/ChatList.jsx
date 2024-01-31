import { useState, useEffect } from "react";
import {
  InLineLeft,
  InLineRight,
  ChatListOutLine,
  CityList,
  SickList,
  AddChatListStyled,
  ChatCon,
  ChatListCon,
  ChatRoom,
  ChatName,
  ChatDate,
} from "../../css/chat/AreaSickListCss";
import { LineButton } from "../../component/common/LineButton";
import { ToggleContainer } from "../../component/common/ToggleSwitch";
import { formatDate } from "../../utils/Common";
import { AddChatModal } from "../../utils/modal/AddChatModal";
import { ChatAxiosApi } from "../../api/ChatAixosApi";
import { useNavigate } from "react-router-dom";

export const ChatList = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOn, setIsOn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [chatRoomTitle, setChatRoomTitle] = useState("");
  const [isTitle, setIsTitle] = useState("");
  const navigate = useNavigate();

  //좌측 카테고리 영역
  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  //중복선택 가능
  // const handleListClick = (item) => {
  //   if (selectedItems.includes(item)) {
  //     setSelectedItems((prevItmes) =>
  //       prevItmes.filter((selectedItme) => selectedItme !== item)
  //     );
  //   } else {
  //     setSelectedItems((prevItmes) => [...prevItmes, item]);
  //   }
  // };

  //중복선택 불가
  const handleListClick = (item) => {
    // 이미 선택된 항목인 경우 아무 작업도 하지 않음
    if (selectedItems.includes(item)) {
      return;
    }

    // 현재 선택된 항목 추가
    setSelectedItems([item]);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //채팅방 생성하기
  const onSubmitModal = async () => {
    if (isTitle) {
      try {
        const response = await ChatAxiosApi.freeChatCreate(chatRoomTitle);
        console.log(response.data);
        navigate(`/chatting/${response.data}`);
      } catch (e) {
        alert("error : 채팅방을 생성하지 못했습니다.");
      } finally {
        setModalOpen(false);
      }
    } else {
      alert("방 제목을 입력해주세요.");
    }
  };

  useEffect(() => {
    // 서버로부터 채팅방 목록을 가져오는 API 호출
    const getChatRoom = async () => {
      try {
        const rsp = await ChatAxiosApi.ChatList();
        setChatRooms(rsp.data);
        console.log("날짜 데이터", rsp.data);
      } catch (e) {
        alert(
          "error : 채팅방 목록을 불러오지 못했습니다. 이전 페이지로 이동합니다."
        );
        navigate(-1);
      }
    };
    const intervalID = setInterval(getChatRoom, 1500);
    return () => {
      clearInterval(intervalID);
    };
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행
  // 채팅방으로 이동하는 로직 작성
  const enterChatRoom = (roomId) => {
    navigate(`/chatting/${roomId}`);
  };

  // 채팅방 제목 저장
  const onChangeTitle = (e) => {
    if (e.target.value === null || e.target.value === "") {
      setIsTitle(false);
    } else {
      setChatRoomTitle(e.target.value);
      setIsTitle(true);
    }
  };

  return (
    <>
      <ChatListOutLine>
        <InLineLeft>
          <ToggleContainer onClick={toggleHandler}>
            <div
              className={`toggle-container ${isOn ? "toggle--checked" : null}`}
            />
            <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}>
              <span className="toggle-circle-text">
                {isOn ? "지역" : "증상"}
              </span>
            </div>
          </ToggleContainer>
          {isOn
            ? CityList.map((item, index) => (
                <LineButton
                  key={index}
                  onClick={() => handleListClick(item)}
                  className={`${selectedItems.includes(item) ? "clicked" : ""}`}
                >
                  {item}
                </LineButton>
              ))
            : SickList.map((item, index) => (
                <LineButton
                  key={index}
                  onClick={() => handleListClick(item)}
                  className={`${selectedItems.includes(item) ? "clicked" : ""}`}
                >
                  {item}
                </LineButton>
              ))}
        </InLineLeft>
        <InLineRight>
          <ChatCon>
            {chatRooms.map((room) => (
              <ChatRoom
                key={room.roomId}
                onClick={() => enterChatRoom(room.roomId)}
              >
                <ChatName>{room.name}</ChatName>
                <ChatDate>{formatDate(room.regDate)}</ChatDate>
              </ChatRoom>
            ))}
          </ChatCon>
          <AddChatListStyled onClick={openModal} />
          <AddChatModal
            value={onChangeTitle}
            modalOpen={modalOpen}
            setModalOpen={closeModal}
            onSubmit={onSubmitModal}
            checkMmessage="채팅방 제목"
            checkInput="채팅방 제목을 입력하세요"
            revertChanges={onChangeTitle}
            type="input"
          ></AddChatModal>
        </InLineRight>
      </ChatListOutLine>
    </>
  );
};
