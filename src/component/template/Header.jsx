import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledLogo,
  Top,
  Left,
  Right,
  Menu,
  Line,
} from "../../css/template/HeaderStyle";
import { FirstDropDown, SecondDropDown, ThirdDropDown } from "./HeaderDropDown";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import { Hamburger } from "./Hamburger";
import { MemberAxiosApi } from "../../api/MemberAxiosApi";
import { Common, Reload } from "../../utils/Common";
import { UserContext } from "../../context/AuthContext";

export const Header = () => {
  const navigate = useNavigate();
  const [firstView, setFirstView] = useState(false);
  const [secondView, setSecondView] = useState(false);
  const [thirdView, setThirdView] = useState(false);
  // 로그인 전역관리
  const context = useContext(UserContext);
  const { setLoginStatus, loginStatus } = context;
  const [member, setMember] = useState({});

  useEffect(() => {
    const getMember = async () => {
      // 로컬 스토리지에서 액세스 토큰 읽기
      try {
        //로그인한 회원의 상세 정보 조회
        const rsp = await MemberAxiosApi.memberGetOne();
        setMember(rsp.data);
        window.localStorage.setItem("memberId", rsp.data.memberId);
      } catch (e) {
        // 액세스 토큰 만료시 401 에러 발생, 회원 정보 상세 조회 실패시 500 에러
        if (e.response.status === 401 || e.response.status === 500) {
          alert("에러로 회원 정보를 불러오지 못했습니다.");
          // 리프레시 토큰을 통해 액세스 토큰 및 리프레시 토큰을 재발급
          const newAccessToken = await Common.handleUnauthorized();
          console.log("재발급된 액세스 토큰 ; " + newAccessToken);
          const rsp = await MemberAxiosApi.memberGetOne(newAccessToken);
          setMember(rsp.data);
          Reload(navigate);
        }
      }
    };

    if (loginStatus === "true") {
      getMember();
    }
    console.log("loginStatus:", window.localStorage.getItem("loginStatus"));
  }, [loginStatus, setLoginStatus, navigate]);

  // 로그아웃 함수
  const logout = () => {
    localStorage.removeItem("loginStatus"); // 로컬 스토리지에서 로그인 상태 제거
    setLoginStatus(false); // 로그인 상태를 false로 업데이트
    navigate("/login"); // 사용자를 로그인 페이지로 리다이렉트
  };

  return (
    <>
      <Top>
        <Left>
          <Hamburger></Hamburger>
          <StyledLogo
            onClick={() => {
              navigate("/");
            }}
          ></StyledLogo>
        </Left>

        <Right>
          <ul>
            <Menu>
              <li
                onClick={() => {
                  setFirstView(!firstView);
                }}
              >
                <UnderLinedStyle>지도</UnderLinedStyle>
                {firstView && (
                  <FirstDropDown onClose={() => setFirstView(false)} />
                )}
              </li>

              <Line></Line>

              <li
                onClick={() => {
                  setSecondView(!secondView);
                }}
              >
                <UnderLinedStyle>커뮤니티</UnderLinedStyle>
                {secondView && (
                  <SecondDropDown onClose={() => setSecondView(false)} />
                )}
              </li>

              <Line></Line>

              <li
                onClick={() => {
                  setThirdView(!thirdView);
                }}
              >
                <UnderLinedStyle>내 정보</UnderLinedStyle>
                {thirdView && (
                  <ThirdDropDown onClose={() => setThirdView(false)} />
                )}
              </li>

              <Line></Line>

              <li>
                <UnderLinedStyle onClick={logout}>로그아웃</UnderLinedStyle>
              </li>
            </Menu>
          </ul>
        </Right>
      </Top>
    </>
  );
};
