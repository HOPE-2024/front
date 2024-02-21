import React, { useEffect, useState } from "react";
import { ChatAxiosApi } from "../../api/ChatAxiosApi";
import styled from "styled-components";
import { FlexColumn } from "../../css/common/Boxs";

const ChatRoomContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  font-size: 3.5em;
  font-weight: bold;
  color: #023b96;
  margin-bottom: 30px;
`;

const Content = styled.ul`
  font-size: 2em;
  width: 40vw;
  font-weight: bold;
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
    <>
      <FlexColumn>
        <Title>{category} 채팅방 목록입니다.</Title>
        <Content>
          {chatRooms.map((chatRoom, index) => (
            <ChatRoomContainer
              key={index}
              onClick={() => goToChatRoom(chatRoom.roomId)}
            >
              {chatRoom.name}
            </ChatRoomContainer>
          ))}
        </Content>
      </FlexColumn>
    </>
  );
};
