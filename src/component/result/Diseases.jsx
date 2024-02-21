import React, { useState, useEffect } from "react";
import {
  ResultCon,
  SkyText,
  FaceImage,
  ResertCon,
  NoWrap,
} from "../../css/result/ResultCss";

export const Diseases = ({ bmi, alcohol = 0, onDiseaseInfo }) => {
  const [diseasesInfo, setDiseasesInfo] = useState("");

  const getDiseaseInfo = () => {
    let diseases = [];

    // BMI에 따른 질병 분류
    if (bmi < 18.5) {
      diseases.push("저체중");
    } else if (bmi >= 18.5 && bmi < 25) {
      // diseases.push("정상 체중");
    } else if (bmi >= 25 && bmi < 30) {
      diseases.push("과체중");
    } else if (bmi >= 30 && bmi < 35) {
      diseases.push("비만");
    } else {
      diseases.push("고도비만");
    }

    // 알코올 섭취량에 따른 질병 추가
    if (alcohol > 21) {
      diseases.push("알코올_의존");
    } else if (alcohol > 14) {
      diseases.push("간질환");
      diseases.push("고혈압");
    } else if (alcohol > 7) {
      diseases.push("알코올_중독");
    }

    // 추가적인 세분화 로직
    if (bmi >= 25 && alcohol > 14) {
      diseases.push("당뇨병");
      diseases.push("심장_질환");
    }
    if (bmi >= 35) {
      diseases.push("수면_무호흡");
      diseases.push("관절염");
    }

    return diseases.join(", "); // 질병들을 공백으로 구분하여 하나의 문자열로 반환
  };

  useEffect(() => {
    const updatedDiseasesInfo = getDiseaseInfo();
    setDiseasesInfo(updatedDiseasesInfo); // 질병 정보 업데이트
    onDiseaseInfo(updatedDiseasesInfo); // 상위 컴포넌트에 질병 정보 전달
  }, [bmi, alcohol]); // BMI, 알코올 섭취량 변경 시 업데이트

  return (
    <ResultCon>
      <FaceImage
        src={
          "/images/illness/" +
          diseasesInfo.split(", ")[0].replace("_", "") +
          ".webp"
        }
        alt="질병 관련 이미지"
      />
      <ResertCon>
        당신의 건강 정보를 기반으로 예상되는 질병은,
        <br />
        <NoWrap>
          <SkyText> {diseasesInfo.replace(/_/g, " ")} </SkyText>입니다.
        </NoWrap>
      </ResertCon>
    </ResultCon>
  );
};
