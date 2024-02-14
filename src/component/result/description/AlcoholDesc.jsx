import React from "react";
import styled from "styled-components";

const GaugeContainer = styled.div`
  position: relative;
  width: fit-content;
  margin-bottom: 20px;
`;

const GaugeBackground = styled.div`
  height: 20px;
  width: 100%;
  background-color: #ddd;
  position: relative;
  margin-top: 20px;
`;

const Indicator = styled.div`
  position: absolute;
  height: 20px;
  width: 2px;
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
  width: 1px;
  height: 5px;
  background-color: black;
`;

const MarkLabel = styled.span`
  position: absolute;
  top: 8px;
  width: 60px;
  left: -30px;
  text-align: center;
  font-size: 12px;
`;

const AdviceText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
`;

export const AlcoholDesc = ({ userAlcohol, averageAlcohol }) => {
  const percentage = ((userAlcohol - averageAlcohol) / averageAlcohol) * 100;
  const gaugeValue = Math.max(Math.min(percentage, 500), -500); // 계기판 값 범위 제한

  let advice, color;
  if (percentage > 20) {
    advice =
      "이는 평균보다 높은 수치입니다. 건강을 위해 알코올 섭취량을 줄이는 것을 고려해보세요.";
    color = "#ff4d4d"; // 빨간색
  } else if (percentage < -20) {
    advice =
      "이는 평균보다 낮은 수치입니다. 현재의 알코올 섭취량을 유지해주세요. 좋은 습관이며 건강에 이롭습니다.";
    color = "#4CAF50"; // 녹색
  } else {
    advice =
      "이는 평균적인 수치입니다. 지금보다 알코올 섭취량을 더욱 줄이는 것도 좋을 것입니다. 앞으로도 건강한 생활을 위해서 계속 관리해주세요.";
    color = "#FFC107"; // 노란색
  }

  // 눈금과 숫자를 생성합니다.
  const marks = Array.from({ length: 11 }, (_, index) => (index - 5) * 100);

  return (
    <GaugeContainer>
      <p>
        당신의 알코올 섭취량: {userAlcohol}, 해당 국가 알코올 섭취량 평균:{" "}
        {averageAlcohol}
      </p>
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
    </GaugeContainer>
  );
};
