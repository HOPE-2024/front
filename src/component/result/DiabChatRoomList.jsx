import React, { useEffect, useState } from "react";
import { ChatAxiosApi } from "../../api/ChatAxiosApi";
import styled from "styled-components";

const ChatRoomContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const DiabChatRoomList = ({ category = "당뇨" }) => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const response = await ChatAxiosApi.chatListCategory(category);
        setChatRooms(response.data);
      } catch (error) {
        console.error("채팅방 리스트 조회 중 오류 발생:", error);
        setChatRooms([]);
      }
    };

    fetchChatRooms();
  }, [category]);

  // 채팅방으로 이동하는 함수
  const goToChatRoom = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h2>{category} 채팅방 리스트</h2>
      <ul>
        {chatRooms.map((chatRoom, index) => (
          <ChatRoomContainer
            key={index}
            onClick={() => goToChatRoom(chatRoom.roomId)}
          >
            {chatRoom.name}
          </ChatRoomContainer>
        ))}
      </ul>
    </div>
  );
};
