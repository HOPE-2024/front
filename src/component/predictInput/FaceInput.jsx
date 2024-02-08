import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Wrapper, Input, Button } from "../../css/slideElementInput/InputStyle";
import { MachineAxiosApi } from "../../api/MachineAxiosApi";

export const FaceInput = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await MachineAxiosApi.predictFace(formData);
      console.log(
        "FaceInput response : " + JSON.stringify(response.data.results[2])
      );

      navigate("/FaceResult", {
        state: {
          result: response.data.results[0],
          image: response.data.results[1],
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
        <Input type="file" onChange={handleFileSelect} />
        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </>
  );
};
