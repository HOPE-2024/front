import styled from "styled-components";

export const ChatListOutLine = styled.div`
  color: var(--BLACK);
  display: flex;
  justify-content: center;
  border: 2px solid var(--BLACK);
  width: 90%;
  height: 98%;
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

export const CityItem = styled.div`
  line-height: 1.2;
  background-image: linear-gradient(transparent 70%, #3c84f8 40%);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.8s;
  color: var(--BLACK);
  cursor: pointer;

  &:hover {
    background-size: 100% 100%;
  }

  &.clicked {
    line-height: 1.2;
    background-size: 100% 100%;
  }
`;
