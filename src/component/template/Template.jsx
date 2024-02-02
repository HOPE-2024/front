import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import {
  MainCss,
  BackGroundHeader,
  TempHeader,
  TempContent,
  ContentWrapper,
} from "../../css/template/TemplateStyle";

export const Template = () => {
  return (
    <MainCss>
      <BackGroundHeader>
        <TempHeader>
          <Header></Header>
        </TempHeader>
      </BackGroundHeader>

      <ContentWrapper>
        <TempContent>
          <Outlet></Outlet>
        </TempContent>
      </ContentWrapper>
    </MainCss>
  );
};
