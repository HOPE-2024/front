import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Input,
  Select,
  Button,
} from "../../css/slideElementInput/InputStyle";
import { MiddleBox } from "../../css/common/Boxs";
import { MachineAxiosApi } from "../../api/MachineAxiosApi";

const genderOption = ["남자", "여자"];

export const DiabInput = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bp, setBp] = useState("");
  const [genderNumber, setGenderNumber] = useState("");
  const [gender, setGender] = useState(""); // 남자 : 1, 여자 : 2

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGenderNumber(selectedGender);
    if (genderNumber === "여자") setGender(2);
    else setGender(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bmi = weight / (height / 100) ** 2;

    const userData = {
      Age: age,
      BMI: bmi,
      Bp: bp,
      Gender: gender,
    };

    try {
      const response = await MachineAxiosApi.predictDiab(userData);
      console.log("DiabInput bmi : " + response.data.bmi);
      console.log("DiabInput bp : " + response.data.bp);
      console.log("DiabInput grade : " + response.data.grade);
      console.log("DiabInput advice : " + response.data.advice);

      navigate("/DiabResult", {
        state: {
          prediction: response.data.prediction,
          featureImportances: response.data.feature_importances,
          correlation: response.data.correlation,
          correlation_x: response.data.correlation_x,
          correlation_y: response.data.correlation_y,
          bmi: response.data.bmi,
          bp: response.data.bp,
          grade: response.data.grade,
          advice: response.data.advice,
        },
      });
    } catch (error) {
      alert("당뇨병 진행도를 예측하는데 오류가 발생했습니다.");
      console.log("DiabInput handleSubmit 오류 : " + error);
    }
  };

  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <MiddleBox>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="  나이"
            />

            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="  키 (cm)"
            />

            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="  몸무게 (kg)"
            />
          </MiddleBox>

          <MiddleBox>
            <Input
              type="number"
              value={bp}
              onChange={(e) => setBp(e.target.value)}
              placeholder="  평균 혈압 (mmHg)"
            />

            <Select value={genderNumber} onChange={handleGenderChange}>
              <option value="남자">&nbsp;&nbsp;성별</option>
              {genderOption.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </MiddleBox>

          <br />
          <br />

          <MiddleBox>
            <Button type="submit">예측</Button>
          </MiddleBox>
        </form>
      </Wrapper>
    </>
  );
};
