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
import styled from "styled-components";
import { TypeWriter } from "../../../css/text/TypeWriter";

const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  width: 50vw;
  height: 15vh;
  position: relative;
  bottom: 20vh;

  @media (max-width: 1200px) {
    width: 45vw;
    right: 3vw;
  }

  /* 화면의 세로 길이가 가로 길이보다 길어지는 경우에 대한 미디어 쿼리 */
  @media (orientation: portrait) {
    /* flex-direction: column;
    height: 10vh; */
  }
`;

const Balloon = styled.div`
  position: relative;
  bottom: 40vh;
  width: 40vw;
  padding: 20px;
  margin-top: 20px;
  font-size: 16px;
  color: #333;
  background-color: red;
  z-index: 50; // 말풍선을 다른 요소 위에 표시
  visibility: ${(props) =>
    props.show ? "visible" : "hidden"}; // 상태에 따라 보이거나 숨김

  @media (max-width: 1200px) {
    right: 3vw;
  }
`;

export const ScatterGraph = ({ correlation_x, correlation_y }) => {
  const [showBalloon, setShowBalloon] = useState(false); // 말풍선 표시 상태 관리

  // 상관 계수 그래프용 데이터 구조 조정
  const correlationData = correlation_x.map((value, index) => {
    const noise = Math.random() * 0.0001; // (x,y) 좌표가 완벽하게 동일한 점이 존재할지 경고 발생하기에, 미세한 노이즈를 추가하여 이를 방지
    return { id: index, x: value + noise, y: correlation_y[index] + noise };
  });

  const COLORS = ["#136CFB", "#3C84F8", "#023382", "#023B96", "#abcdef"];

  const handleDescriptionClick = () => {
    setShowBalloon(!showBalloon); // 클릭 시 말풍선 표시 상태 토글
  };

  return (
    <>
      <All>
        <Wrapper onClick={handleDescriptionClick}>
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
                domain={[30, 100]} // 축의 범위
              />
              <YAxis
                type="number"
                dataKey="y"
                name="실제값"
                label={{
                  value: "실제값",
                  position: "insideLeft",
                  dx: -5,
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
          <Balloon show={showBalloon}>
            <TypeWriter
              beforeText="이 그래프는 예측값과 실제값의 상관계수를 나타냅니다. 그래프의 점들이 선형 구조에 가까울수록 랜덤 포레스트 모델의 평가가 좋다는 것을 의미합니다."
              width="45vw"
              mWidth="25vw"
              font="20px"
              lineHeight="1"
            ></TypeWriter>
          </Balloon>
        </Wrapper>
      </All>
    </>
  );
};
