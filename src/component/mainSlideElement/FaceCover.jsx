import { FlexColumn } from "../../css/common/Boxs";
import { CoverImage, TextBox } from "../../css/cover/CoverStyle";
import Image from "../../images/face_image.webp";
import { FaceFocus } from "../../component/text/focus/FaceFocus";

export const FaceCover = () => {
  return (
    <>
      <FlexColumn>
        <CoverImage url={Image}></CoverImage>
        <TextBox height="75px">
          외모의 시간, 당신의 얼굴이 들려주는 이야기, 당신의 외모가 전하는
          나이의 비밀을 탐구해보세요. 당신은 몇 살로 보일까요?
        </TextBox>
        <FaceFocus></FaceFocus>
      </FlexColumn>
    </>
  );
};
