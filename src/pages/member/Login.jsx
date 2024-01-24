import React from "react";
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

export const Login = () => {
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
          <Input placeholder="Password" />
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
