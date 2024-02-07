import { FlexColumn } from "../../css/common/Boxs";
import { Spark } from "../../css/text/Spark";
import { LifeInput } from "../../component/predictInput/LifeInput";
import { Image } from "../../css/slideElementInput/InputStyle";
import { MiddleBox } from "../../css/common/Boxs";

export const LifeExpectancy = () => {
  return (
    <>
      <FlexColumn>
        <MiddleBox>
          <Image></Image>
          <Spark>기대수명 예측</Spark>
        </MiddleBox>
        <Spark top="15vh" font="28px">
          신체 정보를 기반으로 당신의 여정의 잠재적 기간을 탐구해보세요
        </Spark>
        <LifeInput></LifeInput>
      </FlexColumn>
    </>
  );
};
