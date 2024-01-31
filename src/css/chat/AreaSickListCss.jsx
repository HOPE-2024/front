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
  margin: 1vh;
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
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: var(--WHITE);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const ChatName = styled.p`
  font-size: 1.5em;
  margin: 0 0 10px 0;
  color: #444;
`;

export const ChatDate = styled.p`
  font-size: 1em;
  color: #666;
  margin: 0;
  text-align: right;
`;

export const InLineLeft = styled.div`
  color: var(--BLACK);
  padding-top: 3vh;
  gap: 0.5em;
  font-size: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  border: 2px solid var(--BLACK);
  border-radius: 4px;
  margin: 2% 0 2% 2%;
`;

export const InLineRight = styled.div`
  color: var(--BLACK);
  width: 80%;
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
  "두통",
  "복통",
  "외상",
  "골절",
  "내상",
  "타박상",
  "화상",
  "피부",
  "알러지",
  "치통",
];

export const CityList = [
  "서울특별시",
  "인천광역시",
  "대전광역시",
  "광주광역시",
  "대구광역시",
  "울산광역시",
  "부산광역시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];
