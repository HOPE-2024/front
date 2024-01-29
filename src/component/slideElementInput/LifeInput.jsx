import React, { useState } from "react";
import {
  Input,
  CountryBox,
  Button,
} from "../../css/slideElementInput/LifeInputStyle";
import { MiddleBox } from "../../css/common/Boxs";

const nationalityOptions = [
  // 국적 목록
  "미국",
  "영국",
  "프랑스",
  "독일",
  "일본",
  "기타",
];

export const LifeInput = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [alcoholConsumption, setAlcoholConsumption] = useState("");
  const [nationality, setNationality] = useState("");

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <MiddleBox>
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
          value={alcoholConsumption}
          onChange={(e) => setAlcoholConsumption(e.target.value)}
          placeholder="  주간 알코올 섭취량 (L)"
        />

        <CountryBox value={nationality} onChange={handleNationalityChange}>
          <option value="">&nbsp;&nbsp;국적</option>
          {nationalityOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </CountryBox>
      </MiddleBox>

      <br />
      <br />

      <MiddleBox>
        <Button type="submit">예측</Button>
      </MiddleBox>
    </form>
  );
};
