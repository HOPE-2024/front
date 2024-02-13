import React, { useEffect } from "react";

export const HealthAdvice = ({ bmi, alcohol = 0, onDiseaseInfo }) => {
  const getAdviceAndDisease = () => {
    let advice = "";
    let disease = "";

    if (bmi < 18.5) {
      advice += "체중이 낮습니다. 영양가 있는 식사를 섭취하세요. ";
      disease += "저체중, 영양실조 ";
    } else if (bmi >= 18.5 && bmi < 25) {
      advice += "정상 체중입니다. 현재 생활 습관을 유지하세요. ";
      disease += "없음 ";
    } else if (bmi >= 25 && bmi < 30) {
      advice += "과체중입니다. 규칙적인 운동을 시작하세요. ";
      disease += "과체중, 제2형 당뇨병 위험 증가 ";
    } else {
      advice += "비만입니다. 영양사나 의사와 상담을 고려하세요. ";
      disease += "비만, 심혈관 질환, 제2형 당뇨병 ";
    }

    if (alcohol > 14) {
      advice +=
        "과도한 알코올 섭취는 건강에 해롭습니다. 알코올 섭취를 줄이세요. ";
      disease += "간 질환, 고혈압 ";
    } else if (alcohol <= 14 && alcohol > 7) {
      advice += "적당한 알코올 섭취는 괜찮지만, 과하지 않게 주의하세요. ";
      disease += "알코올 사용 장애 위험 ";
    } else {
      advice += "알코올 섭취가 적당합니다. ";
      disease += "없음 ";
    }

    return { advice, disease };
  };

  const { advice, disease } = getAdviceAndDisease();

  useEffect(() => {
    onDiseaseInfo(disease);
  }, [disease, onDiseaseInfo]);

  return (
    <div>
      <p>예상되는 질병과 건강조언</p>
      <p>
        {bmi}, {alcohol}
      </p>
      <h2>건강 조언 및 예상되는 질병</h2>
      <p>
        <strong>건강 조언:</strong> {advice}
      </p>
      <p>
        <strong>예상되는 질병:</strong> {disease}
      </p>
    </div>
  );
};
