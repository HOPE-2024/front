import styled from "styled-components";
import addChat from "../../images/chat/addChat.svg";

export const ChatListOutLine = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  color: var(--BLACK);
  display: flex;
  justify-content: center;
  width: 95vh;
  height: 75vh;
  border-radius: 4px;
`;

export const ChatCon = styled.div`
  list-style-type: none;
  margin: 1.2vh;
  padding: 0;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  height: 98%;
`;

export const ChatRoom = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: var(--WHITE);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const ChatName = styled.p`
  font-size: 1.2rem;
  margin: 0 0 10px 0;
  color: #444;
`;

export const ChatCategory = styled.p`
  font-size: 0.6rem;
  color: #aaaaaa;
  margin: 0;
`;

export const ChatInfoCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChatDate = styled.p`
  font-size: 0.6rem;
  color: #aaaaaa;
  margin: 0;
  text-align: right;
`;

export const InLineLeft = styled.div`
  color: var(--BLACK);
  gap: 0.5em;
  font-size: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  border: 2px solid var(--BLACK);
  border-radius: 4px;
  margin: 2% 0 2% 2%;
`;

export const InLineRight = styled.div`
  color: var(--BLACK);
  width: 70%;
  border: 2px solid var(--BLACK);
  border-radius: 4px;
  margin: 2% 2% 2% 2%;
  position: relative;
`;

export const AddChatListStyled = styled.img.attrs({
  src: addChat,
})`
  width: 4vh;
  margin: 1vh;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 1;
`;

export const SickList = [
  "감염병",
  "신경계 질환",
  "종양 및 암",
  "심혈관계 질환",
  "호흡기 질환",
  "대사 및 영양 장애",
  "면역계 질환",
  "소화기 질환",
  "피부 질환",
  "정신건강 질환",
  "치아 질환",
  "기타",
];
