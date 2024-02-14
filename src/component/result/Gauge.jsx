import React from "react";
import GaugeChart from "react-gauge-chart";

export const Gauge = ({ bmi }) => {
  const chartSegments = [
    {
      color: "#5BE12C",
      to: 18.5,
      text: "저체중",
      advice:
        "체중 증가가 필요할 수 있습니다. 균형 잡힌 식단과 건강한 체중 증가 방법을 모색하세요.",
    },
    {
      color: "#F5CD19",
      to: 25,
      text: "정상",
      advice: "현재 체중을 유지하면서 건강한 생활 습관을 계속 유지하세요.",
    },
    {
      color: "#FFA500",
      to: 30,
      text: "과체중",
      advice: "적절한 식단 조절과 규칙적인 운동을 통해 체중 관리에 주의하세요.",
    },
    {
      color: "#FF0000",
      to: 35,
      text: "비만",
      advice:
        "체중 감량을 위해 전문가의 도움을 받고, 건강한 생활 방식을 채택하세요.",
    },
    {
      color: "#800000",
      text: "고도비만",
      advice:
        "의학적 조언을 구하고 체중 감량 프로그램을 고려하세요. 건강 위험을 줄이는 것이 중요합니다.",
    },
  ];

  const findSegment = (bmi) => {
    return chartSegments.findIndex(
      (segment) => bmi <= segment.to || segment.to === undefined
    );
  };

  const segmentIndex = findSegment(bmi);
  const { color, text, advice } = chartSegments[segmentIndex];

  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
        marginBottom: "20px",
      }}
    >
      <span>BMI</span>
      <GaugeChart
        id="bmi-gauge"
        nrOfLevels={chartSegments.length}
        arcsLength={chartSegments.map((segment) => 1 / chartSegments.length)}
        colors={chartSegments.map((segment) => segment.color)}
        percent={Math.min(segmentIndex / chartSegments.length, 1)}
        arcPadding={0.02}
        textColor="black"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {chartSegments.map((segment, index) => (
          <span key={index} style={{ color: segment.color }}>
            {segment.text}
          </span>
        ))}
      </div>
      {/* BMI 상태 중 특정 단어에만 색상 적용 */}
      <p style={{ marginTop: "20px", fontSize: "16px", color: "#333" }}>
        당신은 <span style={{ color: color }}>{text}</span>입니다. {advice}
      </p>
    </div>
  );
};
