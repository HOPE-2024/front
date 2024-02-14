import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageBox = styled.div`
  width: 30vw;
  height: 30vh;
`;

export const Diseases = ({ bmi, alcohol = 0, onDiseaseInfo }) => {
  const [diseasesInfo, setDiseasesInfo] = useState("");
  const [imageURL, setImageURL] = useState("");

  const diseaseImages = {
    저체중: "저체중_이미지_URL",
    과체중: "과체중_이미지_URL",
    비만: "비만_이미지_URL",
    "고도 비만": "고도비만_이미지_URL",
    "알코올 의존": "알코올의존_이미지_URL",
    "간 질환": "간질환_이미지_URL",
    고혈압: "고혈압_이미지_URL",
    "알코올 중독": "알코올중독_이미지_URL",
    당뇨병: "당뇨병_이미지_URL",
    "심장 질환": "심장질환_이미지_URL",
    "수면 무호흡": "수면무호흡_이미지_URL",
    관절염: "관절염_이미지_URL",
  };

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
      diseases.push("고도 비만");
    }

    // 알코올 섭취량에 따른 질병 추가
    if (alcohol > 21) {
      diseases.push("알코올 의존");
    } else if (alcohol > 14) {
      diseases.push("간 질환");
      diseases.push("고혈압");
    } else if (alcohol > 7) {
      diseases.push("알코올 중독");
    }

    // 추가적인 세분화 로직
    if (bmi >= 25 && alcohol > 14) {
      diseases.push("당뇨병");
      diseases.push("심장 질환");
    }
    if (bmi >= 35) {
      diseases.push("수면 무호흡");
      diseases.push("관절염");
    }

    return diseases.join(" "); // 질병들을 공백으로 구분하여 하나의 문자열로 반환
  };

  useEffect(() => {
    const updatedDiseasesInfo = getDiseaseInfo();
    setDiseasesInfo(updatedDiseasesInfo); // 질병 정보 업데이트

    // 질병 정보에 따라 이미지 URL 업데이트
    const firstDisease = updatedDiseasesInfo.split(" ")[0];
    const imageURL = diseaseImages[firstDisease];
    setImageURL(imageURL);

    onDiseaseInfo(updatedDiseasesInfo); // 상위 컴포넌트에 질병 정보 전달
  }, [bmi, alcohol]); // BMI, 알코올 섭취량 변경 시 업데이트

  return (
    <div>
      <p>{`BMI: ${bmi}, 알코올 섭취량: ${alcohol}`}</p>
      <ImageBox>
        {imageURL && <img src={imageURL} alt="질병 관련 이미지" />}
      </ImageBox>
      <h2>예상되는 질병: {diseasesInfo}</h2>
    </div>
  );
};
