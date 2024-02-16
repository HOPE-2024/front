import React, { useState, useEffect } from "react";
import { FlexColumn } from "../../css/common/Boxs";
import styled from "styled-components";

const TextBox = styled.div`
  width: 500px;
  height: 100px;
  font-size: 40px;
  position: relative;
`;

export const FaceGenderAge = ({ result, image }) => {
  // 상태 변수들을 useState를 사용하여 선언
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (result && result.length === 0) {
      setMessage("해당 이미지에서 얼굴을 검출하지 못했습니다.");
    } else if (result) {
      const resultText =
        typeof result === "string" ? result : JSON.stringify(result);
      const elements = resultText.split(", ");
      const genderValue = elements[0] === "Female" ? "여자" : "남자";
      const ageValue = elements[1];
      const ageRangeValue = elements[2];
      const messageValue = `당신은 ${ageRangeValue}에 속하는 ${ageValue}살 ${genderValue}로 보입니다.`;

      setGender(genderValue);
      setAge(ageValue);
      setAgeRange(ageRangeValue);
      setMessage(messageValue);
    }
  }, [result]);

  return (
    <>
      <FlexColumn>
        <TextBox>{message}</TextBox>
        <img
          src={`data:image/png;base64,${image}`}
          alt="Detected Faces"
          style={{ width: "300px", height: "400px" }}
        />
      </FlexColumn>
    </>
  );
};
