import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import styled from "styled-components";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const Wrapper = styled.div`
  width: 40vw;
  height: 50vh;
  position: relative;
  top: 2vh;
`;

export const BarGraph = ({ featureImportances }) => {
  console.log("BarGraph : " + featureImportances);

  const featureImportanceData = featureImportances.map((fi) => ({
    name: fi[0],
    value: fi[1],
  }));

  return (
    <>
      <Wrapper>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={featureImportanceData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{
                value: "특성",
                position: "insideBottom",
                offset: 0,
                dy: 10,
              }}
            />
            <YAxis
              label={{
                value: "중요도",
                position: "insideLeft",
                dx: 0,
                dy: 20,
              }}
            />

            <Tooltip />
            <Bar
              dataKey="value"
              fill="#8884d8"
              label={({ x, y, width, value }) => (
                <text
                  x={x + width / 2}
                  y={y}
                  dy={-6}
                  textAnchor="middle"
                  fill="#666"
                >
                  {value.toFixed(1)}
                </text>
              )}
            >
              {featureImportanceData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Wrapper>
    </>
  );
};
