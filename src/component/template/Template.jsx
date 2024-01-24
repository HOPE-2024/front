import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

const MainCss = styled.div`
  max-width: 1280px;
  min-width: 768px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    "Header"
    "Content"
    "Footer";
`;
const TempHeader = styled.div`
  grid-area: Header;
`;

const TempContent = styled.div`
  grid-area: Content;
  height: 100vh;
`;

const TempFooter = styled.div`
  grid-area: Footer;
  width: 100%;
  position: absolute;
  bottom: 0;
  max-width: 1280px;
`;

export const Template = () => {
  return (
    <MainCss>
      <TempHeader>
        <Header></Header>
      </TempHeader>

      <TempContent>
        <Outlet></Outlet>
      </TempContent>

      <TempFooter>
        <Footer></Footer>
      </TempFooter>
    </MainCss>
  );
};
