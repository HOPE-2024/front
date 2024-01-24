import styled from "styled-components";

export const ChatListOutLine = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  color: var(--BLACK);
  display: flex;
  justify-content: center;
  width: 95vh;
  height: 70vh;
  border-radius: 4px;
`;

export const InLineLeft = styled.div`
  color: var(--BLACK);
  padding: 1em;
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
`;

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
