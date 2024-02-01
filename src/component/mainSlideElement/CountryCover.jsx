import { FlexColumn } from "../../css/common/Boxs";
import { CoverImage, TextBox, Text, Line } from "../../css/cover/CoverStyle";
import Image from "../../images/country_image.webp";

export const CountryCover = () => {
  return (
    <>
      <FlexColumn>
        <CoverImage url={Image} text="알아보기"></CoverImage>
        <TextBox>
          &nbsp;인류의 수명 연장은 대표적인 과학적 성과 중 하나입니다. 각 국의
          평균 수명이 시간이 지남에 따라 어떻게 변화했는지 연도별로
          알아보시겠습니까?
        </TextBox>
      </FlexColumn>
    </>
  );
};
