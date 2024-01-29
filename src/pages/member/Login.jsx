import React, { useEffect, useState, useContext } from "react";
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
import { AuthAxiosApi } from "../../api/AuthAxiosApi";
import { Common } from "../../utils/Common";
import { UserContext } from "../../context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { setLoginStatus, loginStatus } = context;
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

  const loginClick = async () => {
    console.log("login!!");
    try {
      const rsp = await AuthAxiosApi.login(inputId, InputPw);
      if (rsp.data.grantType === "Bearer") {
        Common.setAccessToken(rsp.data.accessToken);
        Common.setRefreshToken(rsp.data.refreshToken);
        setLoginStatus(true); // 로그인 성공 시 전역 상태 true로 업데이트
        navigate("/");
      } else {
        alert("잘못된 아이디 또는 비밀번호 입니다.");
      }
    } catch (error) {
      console.log("로그인 에러1 : ", error);
      if (error.rsp && error.rsp.status === 405) {
        console.log("로그인 실패 : " + error);
        alert("잘못된 아이디 또는 비밀번호 입니다.");
      } else {
        console.log("로그인 에러2 : " + error);
        alert("서버와 연결이 끊겼습니다.");
      }
    }
  };

  return (
    <>
      <LoginContainer>
        <StyledSvg />
        <Title>Log In Now</Title>
        <Items className="item1">
          <Input placeholder="ID" onChange={onChangeId} />
        </Items>
        <Items className="item1">
          <Input type="password" placeholder="Password" onChange={onChangePw} />
        </Items>
        <Items className="item2">
          <FindLink href="/find_id">Find Id</FindLink>|
          <FindLink href="/find_password">Find Password</FindLink>
        </Items>
        <Button
          width="350px"
          height="45px"
          fontsize="1.2em"
          clickEvt={loginClick}
        >
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
