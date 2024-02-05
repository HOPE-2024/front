import { FlexColumn } from "../../css/common/Boxs";
import { DiabInput } from "../../component/predictInput/DiabInput";
import { Spark } from "../../css/text/Spark";

export const Diabetes = () => {
  return (
    <>
      <FlexColumn>
        <Spark>당뇨병 진행도 예측</Spark>
        <DiabInput></DiabInput>
      </FlexColumn>
    </>
  );
};
