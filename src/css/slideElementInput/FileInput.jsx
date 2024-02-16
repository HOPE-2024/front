import React from "react";
import styled from "styled-components";

export const ImageBox = styled.img`
  width: 175px;
  border-radius: 20px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const CustomButton = styled.button`
  border: 2px #5c9bff solid;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  &:hover {
    transform: scale(1.02);
    font-weight: bold;
  }
`;

export const FileInput = ({ onFileSelect }) => {
  const fileInputRef = React.useRef();

  const handleFileInput = (e) => {
    // 선택된 파일을 부모 컴포넌트로 전달
    onFileSelect(e.target.files[0]);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      {fileInputRef.current?.files[0]
        ? fileInputRef.current.files[0].name
        : "선택된 파일 없음"}
      <HiddenFileInput
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
      />
      <CustomButton onClick={handleClick}>파일 선택</CustomButton>
    </>
  );
};
