import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  StyledSvg,
  Title,
  InputContainer,
  InputTitle,
  InputField,
  LowerContainer,
  LowerTitle,
  GoId,
  FooterContainer,
} from "../../css/member/StartFindPwCss";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import { Footer } from "../../component/template/Footer";
import { MemberAxiosApi } from "../../api/MemberAxiosApi";

export const StartFindPw = () => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState("");

  const handleIdChange = (e) => {
    setInputId(e.target.value);
  };

  const handleNext = async () => {
    // 아이디 비어 있으면 알림창
    if (!inputId) {
      alert("아이디를 입력해주세요.");
      return;
    }
    // 아이디 확인
    try {
      const rsp = await MemberAxiosApi.memberGetDetail(inputId);
      const exists = rsp.data;

      if (exists) {
        navigate("/findpw", { state: { memberId: inputId } });
      } else {
        alert("존재하지 않는 아이디 입니다.");
      }
    } catch (error) {
      console.error("기존 회원 아이디 비교 에러 !", error);
    }
  };

  const goToFindId = () => {
    navigate("/findid");
  };

  return (
    <>
      <Container>
        <StyledSvg />
        <Title>비밀번호 찾기</Title>
        <InputContainer>
          <InputTitle>아이디 입력</InputTitle>
          <InputField
            type="id"
            placeholder="id"
            value={inputId}
            onChange={handleIdChange}
          />
        </InputContainer>
        <UnderLinedStyle
          style={{ marginTop: "30px", fontWeight: "bold" }}
          onClick={handleNext}
        >
          다음
        </UnderLinedStyle>
        <LowerContainer>
          <LowerTitle>아이디가 기억나지 않는다면?</LowerTitle>
          <GoId onClick={goToFindId}>아이디 찾기</GoId>
        </LowerContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </>
  );
};
