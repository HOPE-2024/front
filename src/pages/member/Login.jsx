import React from "react";
import { Button } from "../../utils/button";
import {
  LoginContainer,
  StyledSvg,
  Title,
  Items,
  Input,
  FindLink,
} from "../../css/member/loginCss";

export const Login = () => {
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
          <FindLink href="/find_id">Find Id</FindLink> |{" "}
          <FindLink href="/find_password">Find Password</FindLink>
        </Items>
        <Button width="350px" height="45px" fontsize="1.2em">
          Log In
        </Button>
      </LoginContainer>
    </>
  );
};
