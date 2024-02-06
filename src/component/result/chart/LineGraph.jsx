import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40vw;
  height: 50vh;
  position: relative;
  top: 2vh;
`;

export const LineGraph = ({ dataString }) => {
  // 데이터 전처리 및 파싱
  const sanitizedDataString = dataString.replace(/NaN/g, "null");
  const processData = (sanitizedDataString) => {
    try {
      return JSON.parse(sanitizedDataString);
    } catch (error) {
      console.error("Error parsing data string:", error);
      return [];
    }
  };
  const data = processData(sanitizedDataString);

  // 상태 선언
  const [targetX, setTargetX] = useState("");
  const [maxValue, setMaxValue] = useState(0);

  // 컴포넌트가 마운트될 때 한 번만 실행
  useEffect(() => {
    let max = -Infinity;
    let yearOfMax = "";
    data.forEach((item) => {
      if (item.lifeExpectancy > max) {
        max = item.lifeExpectancy;
        yearOfMax = item.year;
      }
    });
    setTargetX(yearOfMax);
    setMaxValue(max);
  }, [dataString]); // dataString이 변경될 때마다 이 로직을 다시 실행

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            label={{
              value: "연도",
              position: "insideBottom",
              offset: 0,
              dx: 10,
              dy: 10,
            }}
          />
          <YAxis
            label={{
              value: "수명",
              position: "insideLeft",
              dx: -10,
              dy: 0,
              fontWeight: "bold",
            }}
          />
          <Tooltip />
          {targetX && (
            <ReferenceLine
              x={targetX}
              stroke="red"
              label={{
                value: `${targetX}`,
                position: "top",
                fill: "red",
                fontSize: 20,
                fontWeight: "bold",
              }}
            />
          )}
          <ReferenceLine
            y={maxValue}
            stroke="red"
            label={{
              value: `${Math.floor(maxValue)}`,
              position: "left",
              fill: "red",
              fontSize: 20,
              fontWeight: "bold",
              dx: 30,
              dy: -15,
            }}
          />
          <Line type="monotone" dataKey="lifeExpectancy" stroke="#023382" />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};
