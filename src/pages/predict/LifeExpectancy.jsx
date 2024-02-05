import { FlexColumn } from "../../css/common/Boxs";
import { Spark } from "../../css/text/Spark";
import { LifeInput } from "../../component/predictInput/LifeInput";

export const LifeExpectancy = () => {
  return (
    <>
      <FlexColumn>
        <Spark>기대수명 예측</Spark>
        <LifeInput></LifeInput>
      </FlexColumn>
    </>
  );
};
