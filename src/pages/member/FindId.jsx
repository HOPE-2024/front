import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ForgotIdContainer,
  StyledSvg,
  Title,
  InputContainer,
  InputField,
  InputAndButtonContainer,
  InfoContainer,
  LowerContainer,
  Instruction,
  FooterContainer,
} from "../../css/member/FindIdCss";
import { Button } from "../../utils/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import { Footer } from "../../component/template/Footer";
import { EmailAxiosApi } from "../../api/EmailAxiosApi";

export const FindId = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState(""); // 입력 인증번호 확인 문구
  const [receivedCode, setReceivedCode] = useState(""); // 받은 인증번호
  const [inputCode, setInputCode] = useState(""); // 입력 인증번호
  const [infoMessage, setInfoMessage] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputCodeChange = (e) => {
    setInputCode(e.target.value);
  };

  const handleSendCode = async () => {
    console.log("이메일 값:", email);
    // 이메일로 인증 코드 요청
    try {
      const rsp = await EmailAxiosApi.emailSand(email);
      const receivedCodeFromServer = rsp.data;
      setReceivedCode(receivedCodeFromServer);
      console.log("서버로부터 온 인증코드 :", receivedCodeFromServer);
      alert("인증번호가 전송되었습니다.");
    } catch (error) {
      console.log("인증 코드 요청 실패 !!", error);
    }
  };

  const handleCompareCode = () => {
    if (inputCode === receivedCode) {
      setVerificationCode("인증번호가 일치합니다.");
    } else {
      setVerificationCode("인증번호가 일치하지 않습니다. 다시 확인해 주세요.");
    }
  };

  const handleFindId = async () => {
    try {
      // 인증번호 일치 여부 확인
      if (inputCode === receivedCode) {
        // 인증번호가 일치하는 경우 이메일로 아이디 찾기 요청함
        const rsp = await EmailAxiosApi.findIdByEmail(email);
        const memberId = rsp.data;
        console.log("찾은 회원 아이디: ", memberId);
        // 찾은 아이디 가지고 페이지 이동
        navigate("/idcomplement", { state: { memberId } });
      } else {
        // 인증번호가 일치하지 않은 경우
        alert("인증번호 불일치! 다시 확인해 주세요.");
      }
    } catch (error) {
      console.error("id 조회 실패 : ", error);
    }
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
          <InputAndButtonContainer>
            <InputField
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={handleEmailChange}
            />
            <Button fontSize="12px" width="100px" clickEvt={handleSendCode}>
              인증번호 요청
            </Button>
          </InputAndButtonContainer>
          <InputAndButtonContainer>
            <InputField
              type="text"
              placeholder="인증번호를 입력하세요"
              value={inputCode}
              onChange={handleInputCodeChange}
            />
            <Button fontSize="12px" width="100px" clickEvt={handleCompareCode}>
              인증번호 확인
            </Button>
          </InputAndButtonContainer>
          <Instruction>{verificationCode}</Instruction>
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
          <LowerContainer>
            <UnderLinedStyle
              style={{
                marginTop: "30px",
                marginRight: "50px",
                fontWeight: "bold",
              }}
              onClick={handleFindId}
            >
              아이디 찾기
            </UnderLinedStyle>
            <UnderLinedStyle
              style={{ marginTop: "30px", fontWeight: "bold" }}
              onClick={handleCancel}
            >
              취소
            </UnderLinedStyle>
          </LowerContainer>
        </InputContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </ForgotIdContainer>
    </>
  );
};
