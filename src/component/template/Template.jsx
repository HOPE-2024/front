import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import {
  MainCss,
  BackGroundHeader,
  TempHeader,
  TempContent,
} from "../../css/template/TemplateStyle";
import { Footer } from "./Footer";

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

      <Footer></Footer>
    </MainCss>
  );
};
