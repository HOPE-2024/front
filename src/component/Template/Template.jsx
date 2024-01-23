import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

const MainCss = styled.div`
  max-width: 1280px;
  min-width: 768px;
  margin: 0 auto;
  gap: 12px;

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
`;

const TempFooter = styled.div`
  grid-area: Footer;
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
        <div className="border"></div>
        <Footer></Footer>
      </TempFooter>
    </MainCss>
  );
};
