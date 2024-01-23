import React from "react";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import {
  SignupContainer,
  StyledSvg,
  Title,
  Items,
  Input,
  Instruction,
  Instruction2,
} from "../../css/member/signupCss";

export const Signup = () => {
  return (
    <>
      <SignupContainer>
        <StyledSvg />
        <Title>Sign up Now</Title>
        <Items className="item1">
          <Input placeholder="ID 입력(영어, 숫자 포함 20자이내)" />
        </Items>
        <Items className="item2">
          <Instruction>사용할 수 없는 아이디 입니다.</Instruction>
        </Items>
        <Items className="item1">
          <Input placeholder="Password 입력(문자, 숫자, 특수문자 포함 8-20자 이내)" />
        </Items>
        <Items className="item1">
          <Input placeholder="Password 재입력" />
        </Items>
        <Items className="item2">
          <Instruction>비밀번호가 일치하지 않습니다.</Instruction>
        </Items>
        <Items className="item1">
          <Input placeholder="이름 입력" />
        </Items>
        <Items className="item1">
          <Input placeholder="Email 입력" />
        </Items>
        <Instruction2>
          추후 아이디/비밀번호 찾기에 활용되니 자주 사용하는 이메일로
          기재해주세요
        </Instruction2>
        <Items className="item3">
          <UnderLinedStyle style={{ margin: "20px", fontWeight: "bold" }}>
            가입
          </UnderLinedStyle>
          <UnderLinedStyle style={{ margin: "20px", fontWeight: "bold" }}>
            취소
          </UnderLinedStyle>
        </Items>
      </SignupContainer>
    </>
  );
};
