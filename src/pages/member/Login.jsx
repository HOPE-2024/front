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
import { MemberAxiosApi } from "../../api/MemberAxiosApi";
import KakaoLogin from "react-kakao-login";

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
      const { authority } = rsp.data;

      if (rsp.data.grantType === "Bearer") {
        // 받은 토큰을 저장
        Common.setAccessToken(rsp.data.accessToken);
        Common.setRefreshToken(rsp.data.refreshToken);
        setLoginStatus(true); // 로그인 성공 시 전역 상태 true로 업데이트
        localStorage.setItem("loginStatus", "true"); // 로컬 스토리지에 로그인 상태 저장
        localStorage.setItem("authority", rsp.data.authority);
        // 권한이 어드민인 경우 어드민 페이지로 이동
        if (authority === "ADMIN") {
          // authorities를 배열로 사용하는 대신 단일 권한 정보를 직접 비교
          console.log("권한: 어드민", authority);
          navigate("/MemberList");
        } else {
          console.log("권한: 일반 사용자", authority);
          navigate("/");
        }

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
  const kakaoLoginSuccess = async (data) => {
    console.log(
      "카카오 로그인 시 서버에 날라가는 데이터 : " + JSON.stringify(data)
    );

    try {
      // 카카오 서버에서 받은 액세스 토큰을 서버로 전송
      const rsp = await MemberAxiosApi.kakaoLogin({
        access_token: data.response.access_token,
      });

      console.log("카카오 서버 응답 : " + JSON.stringify(rsp.data));
      console.log("카카오 액세스 토큰 : " + rsp.data.accessToken);
      console.log("카카오 리프레시 토큰 : " + rsp.data.refreshToken);

      // 서버로부터 받은 토큰을 로컬 스토리지에 저장, 로그인 상태 저장
      window.localStorage.setItem("accessToken", rsp.data.accessToken);
      window.localStorage.setItem("refreshToken", rsp.data.refreshToken);
      window.localStorage.setItem("loginStatus", "true");
      navigate("/");
      // window.location.reload();
    } catch (error) {
      console.log("memberaxiosApi.kakaoLogin 호출 중 오류 발생 :", error);
    }
  };

  // 카카오 로그인 실패
  const kakaoLoginFailure = (error) => {
    console.log("카카오 로그인 실패 : ", error);
  };

  // 네이버 로그인
  const NaverLogin = () => {
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URI;
    const STATE = "false";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;

    const handleNaverLogin = () => {
      window.location.href = NAVER_AUTH_URL;
    };

    return <NaverStyled onClick={handleNaverLogin} />;
  };

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
          <KakaoStyled>
            <KakaoLogin
              token="9d71fc4d4b2e8d934f9a4e4c22afd7e6" // javascript key
              onSuccess={kakaoLoginSuccess}
              onFailure={kakaoLoginFailure}
              getProfile={true}
              render={({ onClick }) => {
                return (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onClick();
                    }}
                    style={{
                      // 카카오 모달창
                      background: "none",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  ></button>
                );
              }}
            />
          </KakaoStyled>
          <NaverLogin />
        </Items>
      </LoginContainer>
    </>
  );
};
