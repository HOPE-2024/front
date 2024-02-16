import React, { useState, useEffect } from "react"; // useEffect 추가
import { useNavigate } from "react-router-dom";

import {
  Wrapper,
  Input,
  Button,
  FaceBox,
} from "../../css/slideElementInput/InputStyle";
import { MachineAxiosApi } from "../../api/MachineAxiosApi";
import { FileInput, ImageBox } from "../../css/slideElementInput/FileInput";
import { Spark } from "../../css/text/Spark";

export const FaceInput = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(""); // 미리보기 이미지 URL 상태
  const [age, setAge] = useState("");

  // 파일 업로드를 위해
  const handleFileSelect = (file) => {
    setSelectedFile(file);
    console.log(file); // 선택된 파일 정보 출력
  };

  // 나이 변경 핸들러 함수
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  // 파일이 선택될 때마다 미리보기를 업데이트하기 위한 useEffect
  useEffect(() => {
    if (!selectedFile) {
      setPreviewSrc("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewSrc(objectUrl);

    // cleanup function
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await MachineAxiosApi.predictFace(formData);

      navigate("/FaceResult", {
        state: {
          result: response.data.results[0],
          image: response.data.results[1],
          model: response.data.results[2],
          age: age,
        },
      });
    } catch (error) {
      alert("얼굴을 인식하는데 오류가 발생했습니다.");
      console.log("FaceInput handleSubmit 오류 : " + error);
    }
  };

  return (
    <>
      <Wrapper>
        <Spark top="-20vh">당신의 얼굴의 시간을 확인해보세요.</Spark>

        <FaceBox>
          {previewSrc && <ImageBox src={previewSrc} alt="Preview" />}
          <br />
          <FileInput onFileSelect={handleFileSelect} />
          <Input
            type="number"
            placeholder="   나이 입력"
            value={age}
            onChange={handleAgeChange}
          />
          <br />
          <br />
          <Button onClick={handleUpload}>확인</Button>
        </FaceBox>
      </Wrapper>
    </>
  );
};
