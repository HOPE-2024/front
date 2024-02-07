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
  const [text, setText] = useState("");

  console.log("얼굴 검출 결과 : " + text);

  useEffect(() => {
    if (result.length === 0) {
      setText("해당 이미지에서 얼굴을 검출하지 못했습니다.");
    } else {
      setText(result); // 또는 다른 로직으로 result 값을 활용
    }
  }, [result]);

  return (
    <>
      <FlexColumn>
        <TextBox>{text}</TextBox>
        <img src={`data:image/png;base64,${image}`} alt="Detected Faces" />
      </FlexColumn>
    </>
  );
};
