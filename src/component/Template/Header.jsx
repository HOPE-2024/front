import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledLogo,
  Top,
  Left,
  Right,
  Menu,
} from "../../css/Template/HeaderStyle";
import { FirstDropDown, SecondDropDown, ThirdDropDown } from "./HeaderDropDown";

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
                <span>지도</span>
                {firstView && (
                  <FirstDropDown onClose={() => setFirstView(false)} />
                )}
              </li>
              <strong>|</strong>
              <li
                onClick={() => {
                  setSecondView(!secondView);
                }}
              >
                <span>커뮤니티</span>
                {secondView && (
                  <SecondDropDown onClose={() => setSecondView(false)} />
                )}
              </li>
              |
              <li
                onClick={() => {
                  setThirdView(!thirdView);
                }}
              >
                <span>내 정보</span>
                {thirdView && (
                  <ThirdDropDown onClose={() => setThirdView(false)} />
                )}
              </li>
              |
              <li>
                <span>로그아웃</span>
              </li>
            </Menu>
          </ul>
        </Right>
      </Top>
    </>
  );
};
