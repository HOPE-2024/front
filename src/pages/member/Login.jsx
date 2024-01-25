import React, { useEffect, useState } from "react";
import { Button } from "../../utils/Button";
import {
  LoginContainer,
  StyledSvg,
  Title,
  Items,
  Input,
  FindLink,
  KakaoStyled,
  NaverStyled,
} from "../../css/member/LoginCss";
import { useNavigate } from "react-router-dom";
import { MemberAxiosApi } from "../../api/MemberAxiosApi";

export const Login = () => {
  // 입력
  const [inputId, setInputId] = useState("");
  const [InputPw, setInputPw] = useState("");

  const onChangeId = (e) => {
    setInputId(e.target.value);
  };
  const onChangePw = (e) => {
    setInputPw(e.target.value);
  };

  // 버튼 활성화
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 아이디, 비밀번호 입력시 로그인 버튼 활성화
    if (inputId.length > 0 && InputPw.length > 0) setIsActive(true);
    else setIsActive(false);
  }, [inputId, InputPw]);

  // const loginClink = async () => {
  //   console.log("login!!")
  //   try {
  //     const rsp = await MemberAxiosApi.login
  //   }
  // }

  const navigate = useNavigate();
  return (
    <>
      <LoginContainer>
        <StyledSvg />
        <Title>Log In Now</Title>
        <Items className="item1">
          <Input placeholder="ID" />
        </Items>
        <Items className="item1">
          <Input type="password" placeholder="Password" />
        </Items>
        <Items className="item2">
          <FindLink href="/find_id">Find Id</FindLink>|
          <FindLink href="/find_password">Find Password</FindLink>
        </Items>
        <Button width="350px" height="45px" fontsize="1.2em">
          Log In
        </Button>
        <Items className="item3">
          아직 회원이 아니신가요?
          <FindLink href="/signup">Sign up</FindLink>
        </Items>
        <Items className="item4">Or Connect with</Items>
        <Items className="item5">
          <KakaoStyled />
          <NaverStyled />
        </Items>
      </LoginContainer>
    </>
  );
};
