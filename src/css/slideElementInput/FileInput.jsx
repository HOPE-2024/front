import { useState } from "react";
import styled from "styled-components";

const HiddenFileInput = styled.input`
  display: none;
`;

const CustomButton = styled.button`
  border: 2px #5c9bff solid;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  margin: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    transform: scale(1.02);
    font-weight: bold;
  }
`;

const FileName = styled.div`
  margin: 10px;
  font-size: 1rem;
`;

export const FileInput = () => {
  const [fileName, setFileName] = useState("");

  // 파일 선택 시 호출되는 함수
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // 선택된 첫 번째 파일
    if (file) {
      setFileName(file.name); // 파일 이름 업데이트
    }
  };

  return (
    <>
      <HiddenFileInput type="file" id="file" onChange={handleFileChange} />
      {fileName && <FileName>{fileName}</FileName>}
      <CustomButton as="label" htmlFor="file">
        파일 선택
      </CustomButton>
    </>
  );
};
