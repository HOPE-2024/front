import React from "react";
import GaugeChart from "react-gauge-chart";

export const Gauge = ({ bmi }) => {
  const chartSegments = [
    { color: "#5BE12C", to: 18.5, text: "저체중" }, // Underweight
    { color: "#F5CD19", to: 25, text: "정상" }, // Normal
    { color: "#FFA500", to: 30, text: "과체중" }, // Overweight
    { color: "#FF0000", to: 35, text: "비만" }, // Obese
    { color: "#800000", text: "고도비만" }, // Severely Obese
  ];

  const findSegment = (bmi) => {
    return chartSegments.findIndex(
      (segment) => bmi <= segment.to || segment.to === undefined
    );
  };

  // 계기판 크기 조절을 위한 스타일
  const gaugeStyle = {
    width: "100%", // or '400px' 등의 특정 크기
    height: "auto",
  };

  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <span>BMI</span>
      <GaugeChart
        id="bmi-gauge"
        nrOfLevels={chartSegments.length}
        arcsLength={chartSegments.map((segment) => 1 / chartSegments.length)}
        colors={chartSegments.map((segment) => segment.color)}
        percent={Math.min(findSegment(bmi) / chartSegments.length, 1)}
        arcPadding={0.02}
        textColor="black"
        style={gaugeStyle}
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
    </div>
  );
};
