import { CoverImage, TextBox, CoverWrapper } from "../../css/cover/CoverStyle";
import Image from "../../images/life_image.webp";
import { LifeFocus } from "../text/focus/LifeFocus";
import { FlexColumn } from "../../css/common/Boxs";

export const LifeCover = () => {
  return (
    <>
      <CoverWrapper>
        <FlexColumn>
          <CoverImage url={Image}></CoverImage>
          {/* <TextBox height="75px">
            인생의 마지막 순간은 우리 모두에게 찾아오는 필연적인 여정입니다.
            당신의 마지막은 언제 찾아올까요?
          </TextBox> */}
          <LifeFocus></LifeFocus>
        </FlexColumn>
      </CoverWrapper>
    </>
  );
};
