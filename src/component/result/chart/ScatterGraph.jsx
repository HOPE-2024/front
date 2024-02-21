import React, { useState } from "react";
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
import { All, Wrapper, Balloon, Icon } from "../../../css/chart/ScatterStyle";

export const ScatterGraph = ({
  correlation_x,
  correlation_y,
  domain = [30, 100],
  yPosition = 0,
}) => {
  const [showBalloon, setShowBalloon] = useState(false);
  const handleDescriptionClick = () => {
    setShowBalloon(!showBalloon); // 클릭 시 말풍선 표시 상태 토글
  };
  const formatTick = (tickItem) => Math.round(tickItem);

  // 상관 계수 그래프용 데이터 구조 조정
  const correlationData = correlation_x.map((value, index) => {
    const noise = Math.random() * 0.0001; // (x,y) 좌표가 완벽하게 동일한 점이 존재할지 경고 발생하기에, 미세한 노이즈를 추가하여 이를 방지
    return { id: index, x: value + noise, y: correlation_y[index] + noise };
  });

  const COLORS = ["#136CFB", "#3C84F8", "#023382", "#023B96", "#abcdef"];

  return (
    <>
      <All>
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
                label={{ value: "예측값", position: "insideBottom", dy: 10 }}
                domain={domain} // 축의 범위
                tickFormatter={formatTick} // X축에 정수만 표시
              />
              <YAxis
                type="number"
                dataKey="y"
                name="실제값"
                label={{
                  value: "실제값",
                  position: "insideLeft",
                  dx: -5,
                  dy: yPosition,
                }}
                domain={domain}
                tickFormatter={formatTick}
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
          <Balloon show={showBalloon}>
            이 그래프는 예측값과 실제값의 상관계수를 나타냅니다. 그래프의 점들이
            선형 구조에 가까울수록 예측 모델이 우수하다는 것을 의미합니다.
          </Balloon>
        </Wrapper>
        <Icon onClick={handleDescriptionClick}></Icon>
      </All>
    </>
  );
};
