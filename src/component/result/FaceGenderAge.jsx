import React, { useState, useEffect } from "react";
import { FlexColumn } from "../../css/common/Boxs";
import styled from "styled-components";
import { TypeWriter } from "../../css/text/TypeWriter";

const TextBox = styled.div`
  width: 500px;
  height: 100px;
  font-size: 40px;
  position: relative;
`;

const ImageBox = styled.img`
  border-radius: 20px;
  width: 35vw;
  height: 35vw;
  max-width: 400px;
  max-height: 400px;

  // Apple
  /* box-shadow: 2px 4px 12px rgba(100, 100, 100, 0.8); */
`;

export const FaceGenderAge = ({ result, image }) => {
  // 상태 변수들을 useState를 사용하여 선언
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [messageB, setMessageB] = useState("");
  const [messageE, setMessageE] = useState("");
  const [messageA, setMessageA] = useState("");

  useEffect(() => {
    if (result && result.length === 0) {
      setMessageB("해당 이미지에서 얼굴을 검출하지 못했습니다.");
    } else if (result) {
      const resultText =
        typeof result === "string" ? result : JSON.stringify(result);
      const elements = resultText.split(", ");
      const genderValue = elements[0].includes("Female") ? "여자" : "남자";
      const ageValue = elements[1];

      // 숫자와 대시만 추출하고, 대시를 '살에서 '로 변환
      let ageRangeValue = elements[2].match(/\d+-\d+/)[0]; // 숫자-숫자 형태 추출
      ageRangeValue = ageRangeValue.replace(/(\d+)-(\d+)/, "$1살에서 $2살");

      const beforeMessage = `해당 얼굴은 ${ageRangeValue}에 속하는 ${genderValue}의 얼굴로 보이며,`;
      const empMessage = `${ageValue}살`;
      const afterMessage = `일 확률이 가장 높아보입니다!`;

      // 상태 업데이트
      setGender(genderValue);
      setAge(ageValue);
      setAgeRange(ageRangeValue);
      setMessageB(beforeMessage);
      setMessageE(empMessage);
      setMessageA(afterMessage);
    }
  }, [result]);

  console.log("검출된 나이 : " + messageE);

  return (
    <>
      <FlexColumn>
        <ImageBox src={`data:image/png;base64,${image}`} alt="Detected Faces" />
        <br />
        {messageB && messageE && messageA && (
          <TypeWriter
            beforeText={messageB}
            emphasizedText={messageE}
            afterText={messageA}
            height="15vh"
          />
        )}
      </FlexColumn>
    </>
  );
};
