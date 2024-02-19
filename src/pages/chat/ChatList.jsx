import { useState, useEffect } from "react";
import {
  Container,
  InLineLeft,
  InLineRight,
  ChatListOutLine,
  SickList,
  AddChatListStyled,
  ChatCon,
  ChatRoom,
  ChatName,
  ChatDate,
  ChatCategory,
  ChatListCon,
  ChatInfoCon,
  SelectCon,
  CustomSelect,
  CustomOption,
} from "../../css/chat/AreaSickListCss";
import { Hover3 } from "../../component/common/MenuBtn";
import { formatDate } from "../../utils/Common";
import { AddChatModal } from "../../utils/modal/AddChatModal";
import { ChatAxiosApi } from "../../api/ChatAxiosApi";
import { useNavigate } from "react-router-dom";

export const ChatList = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [chatRoomTitle, setChatRoomTitle] = useState("");
  const [isTitle, setIsTitle] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  // 버튼 클릭 핸들러
  const handleListClick = (item, index) => {
    console.log(selectedItems);
    // 이미 선택된 항목이고 선택된 버튼이라면 선택 해제
    if (selectedItems.includes(item) && selectedButton === index) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
      setSelectedButton(null); // 선택된 버튼 상태 해제
    } else {
      // 중복 선택 방지
      if (selectedItems.length === 1) return;

      // 새로운 항목 선택
      setSelectedItems([item]);
      setSelectedButton(index); // 선택된 버튼 상태 업데이트
    }
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
      }
      //  finally {
      //   setModalOpen(false);
      // }
    }
    // else {
    //   alert("채팅방이 생성 되었습니다.");
    // }
  };

  useEffect(() => {
    // 서버로부터 채팅방 목록을 가져오는 API 호출
    const getChatRoom = async () => {
      try {
        const rsp = await ChatAxiosApi.chatListNow();
        setChatRooms(rsp.data);
        console.log("채팅리스트 : ", rsp.data);
      } catch (e) {
        alert(
          "error : 채팅방 목록을 불러오지 못했습니다. 이전 페이지로 이동합니다."
        );
        // navigate(-1);
      }
    };
    const intervalID = setInterval(getChatRoom, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행
  // 채팅방으로 이동하는 로직 작성
  const enterChatRoom = (roomId) => {
    navigate(`/chatroom/${roomId}`);
  };

  const filteredChatRooms =
    selectedItems.length === 0
      ? chatRooms
      : chatRooms.filter((room) => selectedItems.includes(room.category));

  return (
    <>
      <Container>
        <ChatListOutLine>
          <InLineLeft>
            {window.innerWidth <= 500 ? (
              <SelectCon>
                <CustomSelect
                  value={selectedItems}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    // 빈 값이 선택되면 선택 해제
                    if (selectedValue === "") {
                      setSelectedItems([]);
                    } else {
                      setSelectedItems([selectedValue]);
                    }
                  }}
                >
                  <CustomOption value="">채팅방 카테고리 선택</CustomOption>
                  {SickList.map((item, index) => (
                    <CustomOption key={index} value={item}>
                      ⚕️{item}
                    </CustomOption>
                  ))}
                </CustomSelect>
              </SelectCon>
            ) : (
              SickList.map((item, index) => (
                <Hover3
                  key={index}
                  onClick={() => handleListClick(item)}
                  className={`${selectedItems.includes(item) ? "clicked" : ""}`}
                  selected={selectedButton === index} // 선택된 버튼인지 확인`}
                >
                  ⚕️{item}
                </Hover3>
              ))
            )}
          </InLineLeft>
          <InLineRight>
            <ChatListCon>채팅방 리스트</ChatListCon>
            <ChatCon>
              {filteredChatRooms.map((room) => (
                <ChatRoom
                  key={room.roomId}
                  onClick={() => enterChatRoom(room.roomId)}
                >
                  <ChatName>{room.name}</ChatName>
                  <ChatInfoCon>
                    <ChatCategory>{room.category}</ChatCategory>
                    <ChatDate>{formatDate(room.regDate)}</ChatDate>
                  </ChatInfoCon>
                </ChatRoom>
              ))}
            </ChatCon>
            <AddChatListStyled onClick={openModal} />
            <AddChatModal
              value={chatRoomTitle}
              modalOpen={modalOpen}
              setModalOpen={closeModal}
              onSubmit={onSubmitModal}
              checkMmessage="채팅방 제목"
              checkInput="채팅방 제목을 입력하세요"
              type="input"
            ></AddChatModal>
          </InLineRight>
        </ChatListOutLine>
      </Container>
    </>
  );
};
