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
import {
  FirstDropDown,
  SecondDropDown,
  ThirdDropDown,
  FiveDropDown,
} from "./HeaderDropDown";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import { Hamburger } from "./Hamburger";
import { MemberAxiosApi } from "../../api/MemberAxiosApi";
import { Common, Reload } from "../../utils/Common";
import { UserContext } from "../../context/AuthContext";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { FourthModal } from "./HeaderDropDown";

export const SearchIcon = styled.div`
  position: relative;
  font-size: 1.5rem;
  margin: 7px 10px 0 5px;
  height: 40px;
  width: 20px;
  cursor: pointer;
  svg {
    color: #023b96;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #136cfb;
    }
  }
`;

export const Header = () => {
  const navigate = useNavigate();
  const [firstView, setFirstView] = useState(false);
  const [secondView, setSecondView] = useState(false);
  const [thirdView, setThirdView] = useState(false);
  const [fourthView, setFourthView] = useState(false);
  const [fiveView, setFiveView] = useState(false);

  // 로그인 전역관리
  const context = useContext(UserContext);
  const { setLoginStatus, loginStatus } = context;
  const [member, setMember] = useState({});
  const authority = localStorage.getItem("authority");
  useEffect(() => {
    const getMember = async () => {
      // 로컬 스토리지에서 액세스 토큰 읽기
      try {
        //로그인한 회원의 상세 정보 조회
        const rsp = await MemberAxiosApi.memberGetOne();
        setMember(rsp.data);
        window.localStorage.setItem("memberId", rsp.data.memberId);
        window.localStorage.setItem("nickName", rsp.data.nickName);
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

  return (
    <>
      <Top>
        <Left>
          <Hamburger></Hamburger>
          <StyledLogo onClick={() => navigate("/")}></StyledLogo>
        </Left>

        <Right>
          <ul>
            {loginStatus === "true" ? (
              // 로그인 O
              <Menu>
                <li className="list1">
                  <span>{member.nickName}</span>님, 오늘도 건강한 하루 !
                </li>

                {authority === "ADMIN" && (
                  <>
                    {" "}
                    <li onClick={() => setFiveView(!thirdView)}>
                      <UnderLinedStyle fontSize={"20px"}>관리</UnderLinedStyle>
                      {fiveView && (
                        <FiveDropDown onClose={() => setFiveView(false)} />
                      )}
                    </li>
                  </>
                )}

                <li onClick={() => setFirstView(!firstView)}>
                  <UnderLinedStyle fontSize={"20px"}>예측</UnderLinedStyle>
                  {firstView && (
                    <FirstDropDown onClose={() => setFirstView(false)} />
                  )}
                </li>

                <li onClick={() => setSecondView(!secondView)}>
                  <UnderLinedStyle fontSize={"20px"}>커뮤니티</UnderLinedStyle>
                  {secondView && (
                    <SecondDropDown onClose={() => setSecondView(false)} />
                  )}
                </li>

                <li onClick={() => setThirdView(!thirdView)}>
                  <UnderLinedStyle fontSize={"20px"}>계정</UnderLinedStyle>
                  {thirdView && (
                    <ThirdDropDown onClose={() => setThirdView(false)} />
                  )}
                </li>

                <li onClick={() => setFourthView(!fourthView)}>
                  <SearchIcon>
                    <FaSearch fontSize={"20px"} />
                  </SearchIcon>
                  {fourthView && <FourthModal isModalOpen={true} />}
                </li>
              </Menu>
            ) : (
              // 로그인 X
              <Menu>
                <li onClick={() => navigate("/Login")}>
                  <UnderLinedStyle fontSize={"20px"}>로그인</UnderLinedStyle>
                </li>

                <li onClick={() => navigate("/AgreeCheck")}>
                  <UnderLinedStyle fontSize={"20px"}>회원 가입</UnderLinedStyle>
                </li>
              </Menu>
            )}
          </ul>
        </Right>
      </Top>
    </>
  );
};
