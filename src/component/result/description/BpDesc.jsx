import React, { useState } from "react";
import styled from "styled-components";
import { YesModal } from "../../../utils/modal/YesModal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Circle = styled.svg`
  transform: rotate(-90deg);
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: #eee;
  stroke-width: 10;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: ${(props) => props.dashOffset};
  transition: stroke-dashoffset 0.5s ease;
`;

const StatusText = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: ${(props) => props.color};
`;

const BpRangeText = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

// 연령별 정상 혈압 수치 표를 위한 데이터
const bpRanges = [
  {
    ageRange: "15~19",
    male: { high: 134, low: 110 },
    female: { high: 123, low: 101 },
  },
  {
    ageRange: "20대",
    male: { high: 137, low: 113 },
    female: { high: 125, low: 103 },
  },
  // 나머지 연령대에 대한 데이터 추가...
];

// 혈압 상태에 따른 조언
const adviceText = {
  normal: "정상 혈압입니다. 건강한 생활 습관을 유지하세요.",
  high: "혈압이 높습니다. 의료 전문가와 상담하세요.",
  low: "혈압이 낮습니다. 필요 시 의료 전문가와 상담하세요.",
};

export const BpDesc = ({ age, bloodPressure, gender }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // 혈압 수치 및 범위 계산 로직
  const calculateBpStatus = () => {
    // 현재 예제에서는 실제 연령대와 성별에 따른 분류 로직을 단순화
    // 혈압 상태를 판단하고, dashOffset 계산 (가상의 로직)
    const dashOffset = 70; // 예시 값
    const color = "#FFC107"; // 예시 색상
    const statusText = "정상 혈압"; // 예시 상태
    const advice = adviceText.normal; // 예시 조언

    return { dashOffset, color, statusText, advice };
  };

  const { dashOffset, color, statusText, advice } = calculateBpStatus();

  const renderModalContent = () => {
    // 모달에 표시될 연령별 정상 혈압 수치 표를 구성
    const bpChart = bpRanges
      .map(
        (range) =>
          `${range.ageRange}\t남자: ${range.male.low}~${range.male.high}\t여자: ${range.female.low}~${range.female.high}\n`
      )
      .join("");
    return bpChart;
  };

  return (
    <Container>
      <Circle width="100" height="100">
        <CircleBackground cx="50" cy="50" r="45" />
        <CircleProgress
          cx="50"
          cy="50"
          r="45"
          stroke={color}
          dashOffset={dashOffset}
        />
      </Circle>
      <StatusText color={color}>{statusText}</StatusText>
      <BpRangeText>당신의 혈압: {bloodPressure} mmHg</BpRangeText>
      <BpRangeText>{advice}</BpRangeText>
      <Button onClick={() => setModalOpen(true)}>View Average BP Chart</Button>
      <YesModal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        checkMessage={renderModalContent()}
        width="600px"
        height="400px"
      />
    </Container>
  );
};
