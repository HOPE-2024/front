import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

export const Rechart = ({ featureImportances, correlation }) => {
  // 상관 계수 그래프용 데이터 구조 조정
  // 여기서는 correlation 데이터가 {x: 예측값, y: 실제값} 형태의 객체 배열이라고 가정합니다.
  const correlationData = correlation.map((c) => ({
    x: c.predicted,
    y: c.actual,
  }));

  // 특성 중요도 그래프용 데이터 구조 조정
  // 여기서는 featureImportances 데이터가 {name: 특성명, value: 중요도} 형태의 객체 배열이라고 가정합니다.
  const featureImportanceData = featureImportances.map((fi) => ({
    name: fi.feature,
    value: fi.importance,
  }));

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="예측값" />
          <YAxis type="number" dataKey="y" name="실제값" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="상관계수" data={correlationData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={featureImportanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
