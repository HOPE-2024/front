import React from "react";
import styled from "styled-components";
import { FlexColumn } from "../../../css/common/Boxs";

const GaugeBackground = styled.div`
  height: 55px; /* 계기판 높이를 늘림 */
  background-color: #f2f6fb;
  position: relative;
  width: 50vw;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 40px;
  margin-top: 50px;

  @media (orientation: portrait) {
    width: 70%;
  }
`;

const Indicator = styled.div`
  position: absolute;
  height: 55px; /* 계기판과 같은 높이로 조정 */
  width: 4px; /* 인디케이터를 더 두껍게 조정 */
  background-color: ${(props) => props.color};
  left: ${(props) => `calc(50% + ${props.value / 10}%)`};
`;

const MarksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-top: 5px;
`;

const Mark = styled.div`
  position: relative;
  width: 4px; /* 눈금을 더 두껍게 조정 */
  height: 10px; /* 눈금의 높이를 늘림 */
  background-color: black;
  bottom: 5px;
`;

const MarkLabel = styled.span`
  position: absolute;
  top: 12px; /* 눈금의 높이가 늘어남에 따라 라벨의 위치 조정 */
  width: 60px;
  left: -30px; /* 라벨의 너비를 고려하여 가운데 정렬 */
  text-align: center;
  font-size: 1.5em;
`;

const AdviceText = styled.p`
  margin-top: 20px;
  font-size: 1.5em;
  color: #333;
  font-weight: bold;

  @media (orientation: portrait) {
    width: 70%;
    font-size: 1.4em;
  }
`;

const Span = styled.span`
  font-size: 1.7em;
  color: #023382;
`;

export const AlcoholDesc = ({ userAlcohol, averageAlcohol }) => {
  const percentage = ((userAlcohol - averageAlcohol) / averageAlcohol) * 100;
  const gaugeValue = Math.max(Math.min(percentage, 500), -500); // 계기판 값 범위 제한

  let advice, color;
  if (percentage > 20) {
    advice =
      "즉, 당신의 알코올 섭취량은 평균보다 높은 수치입니다. 건강을 위해 알코올 섭취량을 줄이는 것을 고려해보세요.";
    color = "#ff4d4d"; // 빨간색
  } else if (percentage < -20) {
    advice =
      "즉, 당신의 알코올 섭취량은 평균보다 낮은 수치입니다. 현재의 알코올 섭취량을 유지해주세요. 좋은 습관이며 건강에 이롭습니다.";
    color = "#4CAF50"; // 녹색
  } else {
    advice =
      "즉, 당신의 알코올 섭취량은 평균적인 수치입니다. 지금보다 알코올 섭취량을 더욱 줄이는 것도 좋을 것입니다. 앞으로도 건강한 생활을 위해서 계속 관리해주세요.";
    color = "#FFC107"; // 노란색
  }

  // 눈금과 숫자를 생성합니다.
  const marks = Array.from({ length: 11 }, (_, index) => (index - 5) * 100);

  return (
    <>
      <FlexColumn>
        <AdviceText>
          당신의 주간 알코올 섭취량은 {userAlcohol}L, 해당 국가의 주간 알코올
          섭취량 평균은 <Span>{averageAlcohol.toFixed(3)}L</Span> 입니다.
        </AdviceText>
        <GaugeBackground>
          <Indicator color={color} value={gaugeValue} />
          <MarksContainer>
            {marks.map((mark, index) => (
              <Mark key={index}>
                <MarkLabel>{mark}</MarkLabel>
              </Mark>
            ))}
          </MarksContainer>
        </GaugeBackground>
        <AdviceText>{advice}</AdviceText>
      </FlexColumn>
    </>
  );
};
