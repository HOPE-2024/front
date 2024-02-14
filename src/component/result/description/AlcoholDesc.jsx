import React from "react";

export const AlcoholDesc = ({ userAlcohol, averageAlcohol }) => {
  const percentage = ((userAlcohol - averageAlcohol) / averageAlcohol) * 100;
  let advice;

  if (percentage > 20) {
    advice =
      "당신의 알코올 섭취량이 평균보다 많습니다. 건강을 위해 알코올 섭취량을 줄이는 것을 고려해보세요.";
  } else if (percentage < -20) {
    advice =
      "당신의 알코올 섭취량이 평균보다 적습니다. 현재의 섭취량 유지가 건강에 이롭습니다.";
  } else {
    advice =
      "당신의 알코올 섭취량이 평균과 비슷합니다. 알코올 섭취량을 더욱 줄이는 것도 좋을 것입니다. 앞으로도 건강한 생활을 위해서 계속 관리해주세요.";
  }

  return (
    <div>
      <p>
        나의 알코올 섭취량 : {userAlcohol}, 해당 국가 알코올 섭취량 평균 :{" "}
        {averageAlcohol}
      </p>
      <p>
        나의 알코올 섭취량은 해당 국가의 평균에 비해 {percentage.toFixed(2)}%{" "}
        {percentage > 0 ? "많습니다." : "적습니다."}
      </p>
      <p>{advice}</p>
    </div>
  );
};
