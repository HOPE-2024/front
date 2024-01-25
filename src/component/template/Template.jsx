import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  MainCss,
  BackGroundHeader,
  TempHeader,
  TempContent,
  TempFooter,
} from "../../css/template/TemplateStyle";

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
