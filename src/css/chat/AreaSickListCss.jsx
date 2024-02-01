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
  font-size: 1.4rem;
  margin: 0 0 10px 0;
  color: #444;
`;

export const ChatDate = styled.p`
  font-size: 0.8rem;
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
];

/*
질병의 대단위는 매우 다양하며, 각각은 다양한 하위 범주와 종류로 나누어집니다. 여기서는 주요 질병의 대단위 몇 가지를 나열할 것이며, 이 목록은 완전하지 않습니다.

감염병:

박테리아, 바이러스, 원충, 곰팡이 등에 의해 전파되는 질병으로, 독감, 결핵, HIV/AIDS 등이 포함됩니다.
신경계 질환:

중추신경계(CNS)와 말초신경계(PNS)를 포함하는 질병으로, 뇌졸증, 알츠하이머병, 파킨슨병 등이 포함됩니다.
종양 및 암:

세포의 비정상적인 성장으로 인해 발생하는 질병으로, 유방암, 폐암, 대장암 등이 포함됩니다.
심혈관계 질환:

심장과 혈관에 영향을 미치는 질병으로, 고혈압, 심근경색, 심부전 등이 포함됩니다.
호흡기 질환:

기관지와 폐에 영향을 미치는 질병으로, 만성폐쇄성폐질환(COPD), 폐렴, 천식 등이 포함됩니다.
대사 및 영양 장애:

영양 섭취 및 대사 기능과 관련된 질병으로, 당뇨병, 비만, 갑상선 질환 등이 포함됩니다.
면역계 질환:

면역 시스템의 기능에 영향을 주는 질병으로, 루푸스, 류마티스 관절염 등이 포함됩니다.
소화기 질환:

소화기관과 관련된 질병으로, 위궤양, 간질환, 크론병 등이 포함됩니다.
피부 질환:

피부에 영향을 미치는 질병으로, 아토피 피부염, 건선, 피부암 등이 포함됩니다.
정신건강 질환:

정신 및 감정에 영향을 미치는 질병으로, 우울증, 조울증, 틱장애 등이 포함됩니다.
이 목록은 일반적인 범주이며, 각 범주에는 다양한 하위 범주 및 특정 질병이 존재합니다. 질병은 매우 복잡하며 연구 및 의학 발전에 따라 새로운 질병이 발견되고 이해되고 있습니다.
*/
