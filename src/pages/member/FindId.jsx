import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ForgotIdContainer,
  StyledSvg,
  Title,
  InputContainer,
  RadioLabel,
  RadioInput,
  InputField,
  RadioContainer,
  InputAndButtonContainer,
  InfoContainer,
} from "../../css/member/FindIdCss";
import { Button } from "../../utils/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import { AuthAxiosApi } from "../../api/AuthAxiosApi";

export const FindId = () => {
  const navigate = useNavigate();
  const [radioSelect, setRadioSelect] = useState("email");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [infoMessage, setInfoMessage] = useState(false);

  const handleRadioSelectChange = (e) => {
    setRadioSelect(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSendCode = async () => {
    if (radioSelect === "email") {
      console.log("이메일 값:", email);
      // 이메일로 인증 코드 요청
      try {
        const rsp = await AuthAxiosApi.findEmail(email);
        const verificationCode = rsp.data.verificationCode;
        console.log("인증코드 내놓아라 :", verificationCode);
      } catch (error) {
        console.log("인증 코드 요청 실패 !!", error);
      }
    } else if (radioSelect === "phone") {
      // 전화번호로 인증 코드 요청
      try {
        const rsp = await AuthAxiosApi.findPhoneNumer(phoneNumber);
        const verificationCode = rsp.data.verificationCode;
        console.log("인증코드 내놓아라 :", verificationCode);
      } catch (error) {
        console.log("인증 코드 요청 실패 !!", error);
      }
    }
  };

  const handleFindId = () => {
    // 여기에 아이디 찾기 로직을 추가하세요.
    console.log("Find ID:", radioSelect === "email" ? email : phoneNumber);
  };

  const handleInfoClick = () => {
    setInfoMessage(!infoMessage);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <ForgotIdContainer>
        <StyledSvg />
        <Title>아이디 찾기</Title>
        <InputContainer>
          <RadioContainer>
            <RadioLabel>
              <RadioInput
                type="radio"
                value="email"
                checked={radioSelect === "email"}
                onChange={handleRadioSelectChange}
              />
              이메일로 찾기
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                value="phone"
                checked={radioSelect === "phone"}
                onChange={handleRadioSelectChange}
              />
              전화번호로 찾기
            </RadioLabel>
          </RadioContainer>
          <InputAndButtonContainer>
            {radioSelect === "email" ? (
              <InputField
                type="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={handleEmailChange}
              />
            ) : (
              <InputField
                type="tel"
                placeholder="전화번호를 입력하세요(- 제외)"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            )}
            <Button fontSize="12px" width="100px" clickEvt={handleSendCode}>
              인증번호 요청
            </Button>
          </InputAndButtonContainer>
          <InputAndButtonContainer>
            <InputField
              type="text"
              placeholder="인증번호를 입력하세요"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
            />
            <Button fontSize="12px" width="100px" onClick={handleFindId}>
              아이디 찾기
            </Button>
          </InputAndButtonContainer>
          <InfoContainer>
            인증번호가 오지 않나요{" "}
            <FontAwesomeIcon
              icon={faCircleQuestion}
              onClick={handleInfoClick}
              style={{ cursor: "pointer" }}
            />
          </InfoContainer>
          {infoMessage && (
            <div style={{ fontSize: "12px" }}>
              <div>
                클릭시, 스팸으로 등록되어 있는 것은 아닌지 확인해주세요. <br />
                스팸으로 등록되어 있지 않다면, 다시 한 번 '인증번호 요청'를
                눌러주세요.
              </div>
            </div>
          )}
          <UnderLinedStyle
            style={{ marginTop: "30px", fontWeight: "bold" }}
            onClick={handleCancel}
          >
            취소
          </UnderLinedStyle>
        </InputContainer>
      </ForgotIdContainer>
    </>
  );
};
