import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: fit-content;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 20px auto;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  padding-bottom: 20px;
  color: #023382;
  font-weight: bold;
  font-size: 3em; /* 폰트 크기를 em 단위로 크게 설정 */
`;

const RiskLevel = styled.div`
  margin: 20px 0;
  padding: 15px; /* 바의 패딩을 더 두껍게 설정 */
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  border-radius: 5px;
  font-size: 2em; /* 폰트 크기를 em 단위로 크게 설정 */
  font-weight: bold;
`;

const Advice = styled.p`
  margin: 20px 0;
  color: #666;
  font-size: 1.5em; /* 폰트 크기를 em 단위로 크게 설정 */
  font-weight: bold;
`;

export const DiabDesc = ({ diabetesValue }) => {
  let riskDescription, backgroundColor;

  if (diabetesValue >= 180) {
    riskDescription = "위험 - 당뇨병으로 진단될 가능성이 높습니다.";
    backgroundColor = "#ff4d4d"; // 빨간색
  } else if (diabetesValue >= 150) {
    riskDescription =
      "주의 - 당뇨병의 전단계인 공복혈당장애(IFG)로 판단될 수 있습니다.";
    backgroundColor = "#FFC107"; // 노란색
  } else {
    riskDescription = "정상 - 당뇨병의 위험이 낮습니다.";
    backgroundColor = "#4CAF50"; // 녹색
  }

  const advice =
    diabetesValue >= 180
      ? "의사와 상담하고, 혈당 검사를 받아야 합니다. 식이요법과 운동요법을 통해 혈당을 낮추는 것이 필요합니다."
      : diabetesValue >= 150
      ? "정기적으로 혈당 검사를 받고, 체중 조절, 식이요법, 운동요법 등을 통해 당뇨병의 발생을 예방하는 것이 필요합니다."
      : "건강한 생활습관을 유지하고, 비만이나 고혈압, 고지혈증 등의 위험 요인을 관리하는 것이 좋습니다.";

  return (
    <Container>
      <Title>당뇨병 위험도</Title>
      <RiskLevel backgroundColor={backgroundColor}>{riskDescription}</RiskLevel>
      <Advice>{advice}</Advice>
    </Container>
  );
};
