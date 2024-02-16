import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Wrapper, Input, Button } from "../../css/slideElementInput/InputStyle";
import { MachineAxiosApi } from "../../api/MachineAxiosApi";
import { FileInput } from "../../css/slideElementInput/FileInput";
import { Spark } from "../../css/text/Spark";

export const FaceInput = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  // 나이 상태 관리를 위한 useState 추가
  const [age, setAge] = useState("");

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // 나이 변경 핸들러 함수
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

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
        <Spark top="-8vh">ㅋㅋㅋ병신</Spark>
        <FileInput type="file" onChange={handleFileSelect} />

        <Input
          type="number"
          placeholder="    나이 입력"
          value={age}
          onChange={handleAgeChange}
        />
        <br />
        <br />
        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </>
  );
};
