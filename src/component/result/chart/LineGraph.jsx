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
import { FlexColumn } from "../../../css/common/Boxs";

const Wrapper = styled.div`
  width: 40vw;
  height: 45vh;
  position: relative;
  top: 2vh;
`;

const Description = styled.div`
  text-align: center;
  font-size: 30px;
  position: relative;
  left: 30px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.45);
`;

export const LineGraph = ({ Country, dataString, onTrendAnalyzed }) => {
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
  const [targetX, setTargetX] = useState("");
  const [maxValue, setMaxValue] = useState(0);

  // 그래프 상에서 최소값 및 최대값 출력
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

  useEffect(() => {
    const analyzeTrend = (data) => {
      let increaseCount = 0;
      let decreaseCount = 0;

      for (let i = 1; i < data.length; i++) {
        if (data[i].lifeExpectancy > data[i - 1].lifeExpectancy) {
          increaseCount++;
        } else if (data[i].lifeExpectancy < data[i - 1].lifeExpectancy) {
          decreaseCount++;
        }
      }

      // 증가 횟수가 감소 횟수보다 많으면 0(증가), 그렇지 않으면 1(감소) 반환
      return increaseCount > decreaseCount ? 0 : 1;
    };

    let min = Infinity;
    let max = -Infinity;
    let yearOfMin = "";
    let yearOfMax = "";

    data.forEach((item) => {
      // lifeExpectancy가 null이 아닐 때만 최소값과 최대값을 검사
      if (item.lifeExpectancy !== null) {
        if (item.lifeExpectancy > max) {
          max = item.lifeExpectancy;
          yearOfMax = item.year;
        }
        if (item.lifeExpectancy < min) {
          min = item.lifeExpectancy;
          yearOfMin = item.year;
        }
      }
    });

    const trend = analyzeTrend(data); // 데이터를 분석하여 추세를 결정하는 함수

    // 최소값, 최대값, 추세 정보를 포함하는 객체
    const trendInfo = {
      trend, // 0: 증가, 1: 감소
      min: Math.floor(min), // 최소 수명
      yearOfMin, // 최소 수명의 연도
      max: Math.floor(max), // 최대 수명
      yearOfMax, // 최대 수명의 연도
    };

    // 부모 컴포넌트로 결과 및 최소/최대 값 정보 전달
    if (onTrendAnalyzed) {
      onTrendAnalyzed(trendInfo);
    }
  }, []); // 무한 반복 발생으로 data 제거

  return (
    <>
      <FlexColumn>
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
        <br />
        <br />
        <Description>{Country} 평균 수명 변화 </Description>
      </FlexColumn>
    </>
  );
};
