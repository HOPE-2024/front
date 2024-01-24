import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import backgroundSVG from "../../images/backGround.svg";

const MainCss = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    "Header"
    "Content"
    "Footer";

  // 가상 요소로 배경 설정
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${backgroundSVG});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* opacity: 0.09; */
    /* filter: blur(5px); */
    z-index: -1;
  }
`;

const BackGroundHeader = styled.div`
  background-color: white;
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const TempHeader = styled.div`
  width: 60vw;
  grid-area: Header;
`;

const TempContent = styled.div`
  grid-area: Content;
  height: 100vh;
`;

const TempFooter = styled.div`
  grid-area: Footer;
  width: 100vw;
  position: absolute;
  bottom: 0;
`;

export const Template = () => {
  return (
    <MainCss>
      <BackGroundHeader>
        <TempHeader>
          <Header></Header>
        </TempHeader>
      </BackGroundHeader>

      <TempContent>
        <Outlet></Outlet>
      </TempContent>

      <TempFooter>
        <Footer></Footer>
      </TempFooter>
    </MainCss>
  );
};
