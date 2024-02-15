import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexColumn } from "../../../css/common/Boxs";

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
`;

const BpRangeText = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

// 연령별 정상 혈압 수치 데이터
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
  {
    ageRange: "30대",
    male: { high: 142, low: 114 },
    female: { high: 134, low: 106 },
  },
  {
    ageRange: "40대",
    male: { high: 150, low: 126 },
    female: { high: 146, low: 112 },
  },
  {
    ageRange: "50대",
    male: { high: 159, low: 121 },
    female: { high: 159, low: 117 },
  },
  {
    ageRange: "60대",
    male: { high: 166, low: 124 },
    female: { high: 166, low: 124 },
  },
  {
    ageRange: "70대~",
    male: { high: 170, low: 128 },
    female: { high: 173, low: 131 },
  },
];

// 혈압 상태에 따른 조언
const adviceText = {
  normal: "정상 혈압입니다. 건강한 생활 습관을 유지하세요.",
  high: "혈압이 높습니다. 의료 전문가와 상담하세요.",
  low: "혈압이 낮습니다. 필요 시 의료 전문가와 상담하세요.",
};

export const BpDesc = ({ age, bloodPressure, gender }) => {
  // 새 창에서 혈압 차트를 보여주는 함수
  const showBpChart = () => {
    const newWindow = window.open("", "", "width=500,height=500");
    newWindow.document.write(
      "<html><head><title>혈압 차트</title></head><body>"
    );
    newWindow.document.write("<h2>연령별 정상 혈압 범위</h2>");
    newWindow.document.write(
      '<table border="1"><tr><th>연령</th><th>성별</th><th>최고</th><th>최저</th></tr>'
    );

    // 표 데이터를 HTML 형식으로 추가
    bpRanges.forEach((range) => {
      newWindow.document.write(
        `<tr><td>${range.ageRange}</td><td>남자</td><td>${range.male.high}~${range.male.low}</td><td>${range.male.high}~${range.male.low}</td></tr>`
      );
      newWindow.document.write(
        `<tr><td>${range.ageRange}</td><td>여자</td><td>${range.female.high}~${range.female.low}</td><td>${range.female.high}~${range.female.low}</td></tr>`
      );
    });

    newWindow.document.write("</table>");
    newWindow.document.write("</body></html>");
    newWindow.document.close(); // 새 창의 문서 작성을 완료
  };

  const [genderText, setGenderText] = useState("여자");
  useEffect(() => {
    if (gender === 0) setGenderText("남자");
    else setGenderText("여자");
  }, [gender]);

  // 나이와 성별에 따른 정상 혈압 범위 찾기
  const findBpRange = () => {
    for (let range of bpRanges) {
      const ageBounds = range.ageRange
        .split("~")
        .map((ageBound) => ageBound.replace("대", ""));
      let minAge = parseInt(ageBounds[0]);
      let maxAge = ageBounds[1] ? parseInt(ageBounds[1]) : 150; // 최대 나이 설정

      if (age >= minAge && age <= maxAge) {
        return gender === "male" ? range.male : range.female;
      }
    }
    return null; // 적절한 범위를 찾지 못한 경우
  };

  const bpRange = findBpRange();
  const normalRangeText = bpRange
    ? `${bpRange.low}~${bpRange.high}mmHg`
    : "데이터 없음";

  // 혈압 상태 계산
  let status, color, statusText;
  if (bpRange) {
    if (bloodPressure < bpRange.low) {
      status = "low";
      color = "#4CAF50"; // 저혈압 색상
      statusText = "저혈압";
    } else if (bloodPressure > bpRange.high) {
      status = "high";
      color = "#ff4d4d"; // 고혈압 색상
      statusText = "고혈압";
    } else {
      status = "normal";
      color = "#FFC107"; // 정상 혈압 색상
      statusText = "정상 혈압";
    }
  } else {
    status = "unknown";
    color = "#999999"; // 데이터 없음 색상
    statusText = "데이터 없음";
  }

  const advice = adviceText[status]; // 혈압 상태에 따른 조언

  const dashOffset =
    283 *
    (1 -
      (bloodPressure - bpRange?.low || 0) /
        (bpRange?.high - bpRange?.low || 200)); // 혈압에 따른 대시 오프셋 조정

  return (
    <>
      <FlexColumn>
        <Circle width="100" height="100">
          <CircleBackground cx="50" cy="50" r="45" />
          <CircleProgress
            cx="50"
            cy="50"
            r="45"
            stroke={color}
            stroke-dashoffset={dashOffset}
          />
        </Circle>
        <StatusText style={{ color }}>{statusText}</StatusText>
        <BpRangeText>당신의 혈압: {bloodPressure} mmHg</BpRangeText>
        <BpRangeText>
          {genderText}, {age}살의 평균 혈압 범위: {normalRangeText}
        </BpRangeText>
        <BpRangeText>{advice}</BpRangeText>
        <Button onClick={showBpChart}>평균 혈압 차트 보기</Button>
      </FlexColumn>
    </>
  );
};
