import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40vw;
  height: 50vh;
  position: relative;
  bottom: 5vh;
`;

export const ScatterGraph = ({ correlation_x, correlation_y }) => {
  // 상관 계수 그래프용 데이터 구조 조정
  const correlationData = correlation_x.map((value, index) => {
    const noise = Math.random() * 0.0001; // (x,y) 좌표가 완벽하게 동일한 점이 존재할지 경고 발생하기에, 미세한 노이즈를 추가하여 이를 방지
    return { id: index, x: value + noise, y: correlation_y[index] + noise };
  });

  console.log("ScatterGraph : " + correlation_x);
  const COLORS = [
    "#136CFB",
    "#3C84F8",
    "#023382",
    "#023B96",
    "#abcdef",
    "SkyBlue",
    "Green",
    "DarkRed",
  ];

  return (
    <>
      <Wrapper>
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis
              type="number"
              dataKey="x"
              name="예측값"
              label={{ value: "예측값", position: "insideBottom", dy: 20 }}
              domain={[30, 100]} // 축의 범위
            />
            <YAxis
              type="number"
              dataKey="y"
              name="실제값"
              label={{
                value: "실제값",
                position: "insideLeft",
                dx: -20,
              }}
              domain={[30, 100]}
            />

            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="상관계수" data={correlationData}>
              {correlationData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </Wrapper>
    </>
  );
};