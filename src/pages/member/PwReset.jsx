import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  StyledSvg,
  Title,
  SubTitle,
  InputContainer,
  InputField,
  InfoContainer,
  LowerContainer,
  FooterContainer,
} from "../../css/member/PwResetCss";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../component/template/Footer";
import { EmailAxiosApi } from "../../api/EmailAxiosApi";

export const PwReset = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  // 이전 페이지에서 전달 받은 아이디
  const memberId = location.state && location.state.prevPageId;

  const handleNewPwChange = (e) => {
    setNewPw(e.target.value);
  };

  const handleConfirmPwChange = (e) => {
    setConfirmPw(e.target.value);
  };

  // 비밀번호가 특정 조건에 맞는지 확인
  const checkPw = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/;
    return passwordRegex.test(password);
  };

  const handleResetPassword = async () => {
    // 새 비밀번호가 특정 조건에 맞는지 확인
    if (!checkPw(newPw)) {
      alert("8-20자 이내, 영문자, 숫자, 특수문자를 조합하여 설정해야 합니다.");
      return;
    }
    // 새 비밀번호와 확인 비밀번호 일치여부 확인
    if (newPw === confirmPw) {
      try {
        const data = {
          memberId: memberId,
          password: newPw,
        };
        const rsp = await EmailAxiosApi.passwordReset(data);
        alert("비밀번호가 성공적으로 변경 되었습니다!");
        // 변경 완료후 로그인 페이지로 이동
        navigate("/login");
      } catch (error) {
        console.log("비밀번호 재설정 오류!! : ", error);
        alert("비밀번호 재설정에 실패했습니다.");
      }
    } else {
      alert("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
    }
  };

  const goToMain = () => {
    navigate("/");
  };

  return (
    <>
      <Container>
        <StyledSvg />
        <Title>비밀번호 재설정</Title>
        <SubTitle>안전한 비밀번호로 재설정해 주세요</SubTitle>
        <InputContainer>
          <InputField
            type="password"
            placeholder="새 비밀번호"
            value={newPw}
            onChange={handleNewPwChange}
          />
          <InputField
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmPw}
            onChange={handleConfirmPwChange}
          />
        </InputContainer>
        <InfoContainer>
          <FontAwesomeIcon icon={faCheck} /> 8자 이상 ~ 20자 이내 & 영문자,
          숫자, 특수문자 혼합
        </InfoContainer>
        <LowerContainer>
          <UnderLinedStyle
            style={{
              marginTop: "30px",
              marginRight: "50px",
              fontWeight: "bold",
            }}
            onClick={handleResetPassword}
          >
            변경
          </UnderLinedStyle>
          <UnderLinedStyle
            style={{ marginTop: "30px", fontWeight: "bold" }}
            onClick={goToMain}
          >
            취소
          </UnderLinedStyle>
        </LowerContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </>
  );
};
