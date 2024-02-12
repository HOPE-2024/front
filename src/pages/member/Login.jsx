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

  // 엔터키 눌렀을 때도 로그인 가능
  const handleEnter = (e) => {
    if (e.key === "Enter" && isActive) loginClick();
  };

  useEffect(() => {
    // 아이디, 비밀번호 입력시 로그인 버튼 활성화
    if (inputId.length > 0 && InputPw.length > 0) setIsActive(true);
    else setIsActive(false);
  }, [inputId, InputPw]);

  // 로그인 상태가 true라면 메인 페이지로 리다이렉션
  useEffect(() => {
    const savedLoginStatus = localStorage.getItem("loginStatus") === "true";
    if (savedLoginStatus) {
      setLoginStatus(true);
      navigate("/");
      window.location.reload();
    }
  }, [setLoginStatus, navigate]);

  const loginClick = async () => {
    console.log("login!!");
    try {
      const rsp = await AuthAxiosApi.login(inputId, InputPw);
      console.log(rsp.data);
      console.log(rsp.data);
      console.log(rsp.data);
      console.log(rsp.data);
      console.log(rsp.data);
      if (rsp.data.grantType === "Bearer") {
        // 받은 토큰을 저장
        Common.setAccessToken(rsp.data.accessToken);
        Common.setRefreshToken(rsp.data.refreshToken);
        setLoginStatus(true); // 로그인 성공 시 전역 상태 true로 업데이트
        localStorage.setItem("loginStatus", "true"); // 로컬 스토리지에 로그인 상태 저장
        navigate("/");
        window.location.reload();
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
        alert("다시 로그인 시도해 주세요.");
      }
    }
  };

  // 카카오 로그인
  const KakaoLogin = () => {
    const REST_API_KEY = "cea7f3c383b4104216bac4611d17d13b";
    const REDIRECT_URI = "http://localhost:3000/auth/kakao";
    // oauth 요청 url
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const handleLogin = () => {
      window.location.href = kakaoURL;
    };

    return <KakaoStyled onClick={handleLogin} />;
  };

  const code = new URL(window.location.href).searchParams.get("code");

  return (
    <>
      <LoginContainer>
        <StyledSvg onClick={() => navigate("/")} />
        <Title>Log In Now</Title>
        <Items className="item1">
          <Input
            placeholder="ID"
            onChange={onChangeId}
            onKeyDown={handleEnter}
          />
        </Items>
        <Items className="item1">
          <Input
            type="password"
            placeholder="Password"
            onChange={onChangePw}
            onKeyDown={handleEnter}
          />
        </Items>
        <Items className="item2">
          <FindLink href="/findid">Find Id</FindLink>|
          <FindLink href="/startfindpw">Find Password</FindLink>
        </Items>
        <Button
          width="350px"
          height="45px"
          fontsize="1.2em"
          clickEvt={loginClick}
          active={isActive}
        >
          Log In
        </Button>
        <Items className="item3">
          아직 회원이 아니신가요?
          <FindLink href="/agreeCheck">Sign up</FindLink>
        </Items>
        <Items className="item4">Or Connect with</Items>
        <Items className="item5">
          <KakaoLogin />
          <NaverStyled />
        </Items>
      </LoginContainer>
    </>
  );
};
