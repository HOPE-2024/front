import React, { useState } from "react";
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
  // 회원가입 정보
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRecheck, setPasswordRecheck] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 오류 메세지
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordReCheckMessage, setPasswordRecheckMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordRecheck, setIsPasswordRecheck] = useState(false);

  // 아이디 조건에 맞는지 확인
  const onChangeId = (e) => {
    const idRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,20}$/;
    const enteredId = e.target.value;
    setId(enteredId);
    if (!idRegex.test(enteredId)) {
      setIdMessage("숫자, 영문자 조합으로 5자리 이상 입력해 주세요");
      setIsId(false);
    } else {
      setIdMessage("멋있는 아이디네요 :)");
      setIsId(true);
    }
  };

  // 비밀번호가 특정조건에 맞는지 확인
  const onChangePw = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/;
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
    if (!passwordRegex.test(enteredPassword)) {
      setPasswordMessage(
        "숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해 주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요 !");
      setIsPassword(true);
    }
  };

  // 비밀번호 재확인
  const onChangePwReCheck = (e) => {
    const enteredPassword = e.target.value;
    setPasswordRecheck(enteredPassword);
    if (enteredPassword !== password) {
      setPasswordRecheckMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordRecheck(false);
    } else {
      setPasswordRecheckMessage("비밀 번호가 일치 합니다.");
      setIsPasswordRecheck(true);
    }
  };

  return (
    <>
      <SignupContainer>
        <StyledSvg />
        <Title>Sign up Now</Title>
        <Items className="item1">
          <Input placeholder="ID 입력(영어, 숫자 포함 5-20자이내)" />
        </Items>
        <Items className="item2">
          <Instruction>사용할 수 없는 아이디입니다.</Instruction>
        </Items>
        <Items className="item1">
          <Input placeholder="Password (숫자,영문자,특수문자 포함 8-20자 이내)" />
        </Items>
        <Items className="item2">
          <Instruction>올바르지 않은 비밀번호입니다.</Instruction>
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
          추후 아이디/비밀번호 찾기에 활용되니 자주 사용하는 이메일로 기재해
          주세요
        </Instruction2>
        <Items className="item2">
          <Instruction>올바른 이메일 형식이 아닙니다.</Instruction>
        </Items>
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
