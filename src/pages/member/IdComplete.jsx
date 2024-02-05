import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  IconBox,
  Title,
  IdInfo,
  ButtonContainer,
  FooterContainer,
} from "../../css/member/IdComplementCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import { Footer } from "../../component/template/Footer";

export const IdComplement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const memberId = location.state?.memberId;

  // 아이디 마스킹 처리 : 뒷 2글자만 마스킹. 아이디 없으면 다른 문구 출력
  const maskedId = memberId
    ? `${memberId.slice(0, memberId.length - 2)}${"*".repeat(2)}`
    : memberId === undefined || memberId === null
    ? `해당하는 아이디가 없습니다.`
    : "";

  const goToLogin = () => {
    navigate("/login");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <Container>
        <IconBox>
          <FontAwesomeIcon icon={faUserCheck} />
        </IconBox>
        <Title>아이디 찾기 완료</Title>
        {maskedId ? (
          <IdInfo>고객님의 아이디는 {maskedId} 입니다.</IdInfo>
        ) : (
          <IdInfo>{maskedId}</IdInfo>
        )}
        <ButtonContainer>
          <UnderLinedStyle
            style={{
              marginTop: "30px",
              marginRight: "50px",
              fontWeight: "bold",
            }}
            onClick={goToLogin}
          >
            로그인
          </UnderLinedStyle>
          <UnderLinedStyle
            style={{ marginTop: "30px", fontWeight: "bold" }}
            onClick={handleCancel}
          >
            취소
          </UnderLinedStyle>
        </ButtonContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </>
  );
};
