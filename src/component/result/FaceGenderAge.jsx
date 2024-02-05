import React, { useState, useEffect } from "react";
import { FlexColumn } from "../../css/common/Boxs";

export const FaceGenderAge = ({ result, image }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (result.length === 0) {
      setText("해당 이미지에서 얼굴을 검출하지 못했습니다.");
    }
  }, [result]);

  return (
    <>
      <FlexColumn>
        <p>{text}</p>
        <img src={`data:image/png;base64,${image}`} alt="Detected Faces" />
      </FlexColumn>
    </>
  );
};
