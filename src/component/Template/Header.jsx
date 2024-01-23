import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledLogo,
  Top,
  Left,
  Right,
  Menu,
  Line,
} from "../../css/Template/HeaderStyle";
import { FirstDropDown, SecondDropDown, ThirdDropDown } from "./HeaderDropDown";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";

export const Header = () => {
  const navigate = useNavigate();
  const [firstView, setFirstView] = useState(false);
  const [secondView, setSecondView] = useState(false);
  const [thirdView, setThirdView] = useState(false);

  return (
    <>
      <Top>
        <Left>
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
                <UnderLinedStyle>로그아웃</UnderLinedStyle>
              </li>
            </Menu>
          </ul>
        </Right>
      </Top>
    </>
  );
};
