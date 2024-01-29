import { useState, useContext } from "react";
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
import { UserContext } from "../../context/AuthContext";

export const Header = () => {
  const navigate = useNavigate();
  const [firstView, setFirstView] = useState(false);
  const [secondView, setSecondView] = useState(false);
  const [thirdView, setThirdView] = useState(false);
  const context = useContext(UserContext);
  const { setLoginStatus, loginStatus } = context;

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
