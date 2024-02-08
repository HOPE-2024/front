import styled from "styled-components";
import addChat from "../../images/chat/addChat.svg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ChatListOutLine = styled.div`
  background-color: #136cfb35;
  border-radius: 12px;
  color: var(--BLACK);
  display: flex;
  justify-content: center;
  width: 80%;
  height: 75vh;
  border-radius: 12px;
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
  font-size: 1.2em;
  margin: 0 0 10px 0;
  color: #444;
`;

export const ChatCategory = styled.p`
  font-size: 0.6em;
  color: #aaaaaa;
  margin: 0;
`;

export const ChatInfoCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChatDate = styled.p`
  font-size: 0.6em;
  color: #aaaaaa;
  margin: 0;
  text-align: right;
`;

export const InLineLeft = styled.div`
  color: var(--BLACK);
  /* gap: 1em; */
  font-size: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  margin: 2% 2% 2% 2%;
`;

export const ChatListCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--NAVY);
  margin-bottom: 0.5vh;
  padding: 0.5em;
  width: 100%;
  font-size: 2vh;
  color: white;
  font-weight: bold;
  text-align: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const InLineRight = styled.div`
  background-color: white;
  color: var(--BLACK);
  width: 80%;
  border-radius: 10px;
  margin: 2% 2% 2% 2%;
  position: relative;
  padding: 2vh;
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
