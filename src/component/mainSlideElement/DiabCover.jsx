import { FlexColumn } from "../../css/common/Boxs";
import { CoverImage, TextBox } from "../../css/cover/CoverStyle";
import Image from "../../images/sugar_image.webp";
import { DiabFocus } from "../../component/text/focus/DiabFocus";

export const DiabCover = () => {
  return (
    <>
      <FlexColumn>
        <CoverImage url={Image}></CoverImage>
        <TextBox height="75px">
          적을 알고 나를 알면 백 번 싸워도 위태롭지 않다, 고대의 지혜가 말하는
          바와 같이, 당뇨병이라는 은밀한 적을 깊이 이해하고, 건강 상태를
          예측함으로써 질병과의 싸움에서 승리할 수 있을 것입니다.
        </TextBox>
        <DiabFocus></DiabFocus>
      </FlexColumn>
    </>
  );
};
