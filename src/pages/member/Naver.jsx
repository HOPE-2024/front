import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { MemberAxiosApi } from "../../api/MemberAxiosApi";
import { AuthAxiosApi } from "../../api/AuthAxiosApi";
import { Common } from "../../utils/Common";

const Naver = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { setLoginStatus } = context;

  // 네이버 액세스 토큰 요청
  const code = new URL(window.location.href).searchParams.get("code");
  console.log("code !! : ", code);

  const [email, setEamil] = useState("");
  const [nickName, setNickName] = useState("");
  const [name, setName] = useState("");
  const [isMember, setIsMember] = useState("");

  const naverToken = async () => {
    try {
      const rsp = await MemberAxiosApi.getNaverToken(code);
      if (rsp.data) {
        console.log("네이버 액세스 토큰 : ", rsp.data.access_token);
      }
    } catch (error) {
      console.log("네이버 토큰 받아 오기 에러 : ", error);
    }
  };

  useEffect(() => {
    naverToken();
  }, []);

  const naverUser = async (token) => {
    try {
      const rsp = await MemberAxiosApi.getNaverInfo(token);
      console.log("naver 사용자 정보 !", typeof rsp.data);
      if (rsp.data !== "") {
        setIsMember(!rsp.data.isMember);
        if (!rsp.data.isMember) {
          setEamil(rsp.data.email);
          setNickName(rsp.data.nickName);
          setName(rsp.data.name);
        }
      } else if (rsp.data === "") {
        alert("이미 일반회원으로 사용중인 이메일 입니다.");
      }
      if (rsp.data.isMember) {
        login(rsp.data.email, rsp.data.nickName);
      }
    } catch (error) {
      console.error("네이버 로그인 중 에러 발생 : ".error);
      alert(
        "네이버 로그인 중 오류가 발생했습니다. 로그인 화면으로 돌아갑니다."
      );
      navigate("/login");
    }

    const login = async (id, password) => {
      console.log("네이버 로그인!!");
      try {
        const rsp = await AuthAxiosApi.login(id, password);
        if (rsp.data.grantType === "Bearer") {
          Common.setAccessToken(rsp.data.access_token);
          Common.setRefreshToken(rsp.data.refreshToken);
          setLoginStatus(true);
          navigate("/");
        }
      } catch (error) {
        console.log("로그인 에러 : ", error);
        alert("로그인 중 오류가 발생했습니다.");
      }
    };
  };

  return <></>;
};
