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

const nationalityOptions = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Côte d'Ivoire",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic People's Republic of Korea",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia (Federated States of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of Korea",
  "Republic of Moldova",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Tajikistan",
  "Thailand",
  "The former Yugoslav republic of Macedonia",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom of Great Britain and Northern Ireland",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const LifeInput = () => {
  const navigate = useNavigate();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [alcoholConsumption, setAlcoholConsumption] = useState("");
  const [nationality, setNationality] = useState("Republic of Korea");

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 동작 방지, form 과 주로 자주 함께 사용
    // 예를 들자면 form는 기본적으로 다른 페이지로 이동한다는 로직을 갖고있는데, 싱글 페이지 어플리케이션과 같은 경우에 기본 동작을 방지해줘야 한다.

    // BMI 계산 (체중(kg) / (키(m) * 키(m)))
    const bmi = weight / (height / 100) ** 2;

    // 파이썬 서버로 전송될 데이터 구성
    const userData = {
      Year: new Date().getFullYear(), // 현재 연도
      BMI: bmi,
      Alcohol: alcoholConsumption,
      Country: nationality,
    };

    try {
      const response = await MachineAxiosApi.predictLifeExpect(userData);

      // 상태로 저장하여 데이터를 전달, 해당 상태는 전달되는 페이지에서만 사용 가능
      // navigate로 다른 페이지로 값을 넘길 때는 상태로 넘기고, 부모에서 자식 컴포넌트로 값을 넘길 때는 props로 넘긴다.
      navigate("/LifeResult", {
        state: {
          prediction: response.data.prediction,
          featureImportances: response.data.feature_importances,
          correlation: response.data.correlation,
          correlation_x: response.data.correlation_x,
          correlation_y: response.data.correlation_y,
        },
      });
    } catch (error) {
      alert("기대 수명을 예측하는데 오류가 발생했습니다.");
      console.log("LifeInput handleSubmit 오류 : " + error);
    }
  };

  return (
    <>
      <Wrapper>
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

            <Select value={nationality} onChange={handleNationalityChange}>
              <option value="">국적을 선택하세요</option>
              {nationalityOptions.map((option, index) => (
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
