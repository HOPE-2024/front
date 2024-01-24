import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { MemberAxiosApi } from "../../api/memberAxiosApi";

export const Signup = () => {
  // 회원가입 정보
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRecheck, setPasswordRecheck] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState(true);
  const [email, setEmail] = useState("");

  // 오류 메세지
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordReCheckMessage, setPasswordRecheckMessage] = useState("");
  const [nickNameMeassage, setNickNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordRecheck, setIsPasswordRecheck] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  // 아이디 조건에 맞는지 확인
  const onChangeId = (e) => {
    const idRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,20}$/;
    const enteredId = e.target.value;
    setId(enteredId);

    // 입력된 아이디가 1글자 이상일 경우,
    if (enteredId.length > 0) {
      if (!idRegex.test(enteredId)) {
        setIdMessage("숫자, 영문자 조합으로 5자리 이상 입력해 주세요");
        setIsId(false);
      } else {
        setIdMessage("멋있는 아이디네요 :)");
        setIsId(true);
      }
    } else {
      // 입력된 아이디가 없을 때는 메시지를 숨김
      setIdMessage("");
      setIsId(false);
    }
  };

  // 비밀번호가 특정조건에 맞는지 확인
  const onChangePw = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/;
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    // 입력된 비밀번호가 1글자 이상일 경우,
    if (enteredPassword.length > 0) {
      if (!passwordRegex.test(enteredPassword)) {
        setPasswordMessage(
          "숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해 주세요."
        );
        setIsPassword(false);
      } else {
        setPasswordMessage("안전한 비밀번호에요 !");
        setIsPassword(true);
      }
    } else {
      // 입력된 비밀번호가 없으면 숨김
      setPasswordMessage("");
      setIsPassword(false);
    }
  };

  // 비밀번호 재확인
  const onChangePwReCheck = (e) => {
    const enteredPasswordRecheck = e.target.value;
    setPasswordRecheck(enteredPasswordRecheck);

    // 입력된 비밀번호 재입력 값이 없을 경우 메시지를 숨김
    if (enteredPasswordRecheck.length === 0) {
      setPasswordRecheckMessage("");
      setIsPasswordRecheck(false);
    }
    // 입력된 비밀번호 재입력 값이 기존의 비밀번호와 다를 경우
    else if (enteredPasswordRecheck !== password) {
      setPasswordRecheckMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordRecheck(false);
    }
    // 입력된 비밀번호 재입력 값이 기존의 비밀번호와 일치할 경우
    else {
      setPasswordRecheckMessage("비밀번호가 일치합니다.");
      setIsPasswordRecheck(true);
    }
  };

  // 이름 입력
  const onChangeName = (e) => {
    setName(e.target.value);
    setIsName(true);
  };

  // 닉네임 입력
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
    setIsNickName(true);
    nickNameCheck(e.target.value);
  };

  // 닉네임 중복화인
  const nickNameCheck = async (nickName) => {
    try {
      const rsp = await MemberAxiosApi.nickNameCheck(nickName);
      console.log("닉네임 중복 확인 : ", rsp.data);

      if (rsp.data === true) {
        setNickNameMessage("사용 가능한 닉네임 입니다.");
      } else {
        setNickNameMessage("중복된 닉네임 입니다.");
        setNickName(false);
      }
    } catch (error) {
      console.log("에러 !!!", error);
    }
  };

  // 이메일 형식이 맞는지 확인
  const onChangeMail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // 입력된 이메일이 1글자 이상일 경우,
    if (enteredEmail.length > 0) {
      if (!emailRegex.test(enteredEmail)) {
        setEmailMessage("올바른 이메일 양식이 아닙니다.");
        setIsEmail(false);
      } else {
        setEmailMessage("올바른 이메일 양식 입니다.");
        setIsEmail(true);
      }
    } else {
      setEmailMessage("");
      setIsEmail(false);
    }
  };

  // 가입 버튼 클릭
  const onClickJoin = async () => {
    const memberJoin = await MemberAxiosApi.memberJoin(
      id,
      password,
      name,
      nickName,
      email
    );
    console.log("가입 정보 : ", memberJoin.data);
    if (memberJoin.data.id === id) {
      navigate("/login");
    } else {
      alert("회원가입에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  // 취소 버튼 누를시 홈으로 이동
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <SignupContainer>
        <StyledSvg />
        <Title>Sign up Now</Title>
        <Items className="item1">
          <Input
            type="id"
            placeholder="ID 입력(영어, 숫자 포함 5-20자이내)"
            value={id}
            onChange={onChangeId}
          />
        </Items>
        <Items className="item2">
          <Instruction>{idMessage}</Instruction>
        </Items>
        <Items className="item1">
          <Input
            type="password"
            placeholder="Password (숫자,영문자,특수문자 포함 8-20자 이내)"
            value={password}
            onChange={onChangePw}
          />
        </Items>
        <Items className="item2">
          <Instruction>{passwordMessage}</Instruction>
        </Items>
        <Items className="item1">
          <Input
            type="password"
            placeholder="Password 재입력"
            onChange={onChangePwReCheck}
          />
        </Items>
        <Items className="item2">
          <Instruction>{passwordReCheckMessage}</Instruction>
        </Items>
        <Items className="item1">
          <Input placeholder="이름 입력" value={name} onChange={onChangeName} />
        </Items>
        <Items className="item1">
          <Input placeholder="닉네임 입력" />
        </Items>
        <Items className="item1">
          <Input
            placeholder="Email 입력"
            value={email}
            onChange={onChangeMail}
          />
        </Items>
        <Instruction2>
          추후 아이디/비밀번호 찾기에 활용되니 자주 사용하는 이메일로 기재해
          주세요
        </Instruction2>
        <Items className="item2">
          <Instruction>{emailMessage}</Instruction>
        </Items>
        <Items className="item3">
          <UnderLinedStyle
            style={{ margin: "25px", fontWeight: "bold" }}
            onClick={onClickJoin}
          >
            가입
          </UnderLinedStyle>
          <UnderLinedStyle
            style={{ margin: "25px", fontWeight: "bold" }}
            onClick={handleCancel}
          >
            취소
          </UnderLinedStyle>
        </Items>
      </SignupContainer>
    </>
  );
};
