import React from "react";
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

export const PwReset = () => {
  return (
    <>
      <Container>
        <StyledSvg />
        <Title>비밀번호 재설정</Title>
        <SubTitle>안전한 비밀번호로 재설정해 주세요</SubTitle>
        <InputContainer>
          <InputField type="password" placeholder="새 비밀번호" />
          <InputField type="password" placeholder="새 비밀번호 확인" />
        </InputContainer>
        <InfoContainer>
          <FontAwesomeIcon icon={faCheck} /> 8자 이상 ~ 16자 이내
        </InfoContainer>
        <InfoContainer>
          <FontAwesomeIcon icon={faCheck} /> 영문자, 숫자, 특수문자 2종류 이상
          혼합
        </InfoContainer>
        <LowerContainer>
          <UnderLinedStyle
            style={{
              marginTop: "30px",
              marginRight: "50px",
              fontWeight: "bold",
            }}
          >
            변경
          </UnderLinedStyle>
          <UnderLinedStyle style={{ marginTop: "30px", fontWeight: "bold" }}>
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
