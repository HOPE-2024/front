import React, { useState } from "react";

export const LifeExpectancy = () => {
  const [inputData, setInputData] = useState({
    Year: 2024,
    BMI: 20,
    Alcohol: 15,
    Country: "Republic of Korea",
  });

  const [lifeExpectancy, setLifeExpectancy] = useState("");

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/predict_life_expectancy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputData),
        }
      );
      const data = await response.json();
      setLifeExpectancy(data.predicted_life_expectancy);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* 폼 필드 생성 */}
        <button type="submit">Predict Life Expectancy</button>
      </form>
      {lifeExpectancy && <p>Predicted Life Expectancy: {lifeExpectancy}</p>}
    </div>
  );
};
