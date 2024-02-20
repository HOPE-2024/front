import React from "react";

export const FaceType = ({ type }) => {
  console.log("와꾸 수준 : " + type);
  const getAdvice = () => {
    switch (type) {
      case "노안":
        return "노안으로 보인다면, 충분한 수면과 휴식, 영양가 있는 식사를 하는 것이 중요합니다. 피부 관리에도 주의를 기울여 주세요. 자외선 차단제 사용과 충분한 수분 섭취도 도움이 됩니다.";
      case "적절":
        return "나이에 적절하게 보인다면, 현재의 건강한 생활 습관을 유지하면서, 규칙적인 운동과 균형 잡힌 식단을 지속하는 것이 좋습니다. 스트레스 관리도 건강 유지에 중요한 요소입니다.";
      case "동안":
        return "동안 유지를 위해서는 건강한 생활 습관이 필수입니다. 특히 피부 관리에 신경 쓰고, 균형 잡힌 식단을 유지하며, 충분한 수면을 취하는 것이 중요합니다. 규칙적인 운동도 동안 유지에 도움이 됩니다.";
      default:
        return "알 수 없는 타입입니다. 올바른 타입을 입력해주세요.";
    }
  };

  return (
    <div>
      <h2>당신은 {type}입니다.</h2>
      <p>{getAdvice()}</p>
    </div>
  );
};
