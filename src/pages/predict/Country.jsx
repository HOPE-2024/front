import { FlexColumn } from "../../css/common/Boxs";
import { Spark } from "../../css/text/Spark";
import { CountryInput } from "../../component/predictInput/CountryInput";

export const Country = () => {
  return (
    <>
      <FlexColumn>
        <Spark>연도별 각국 평균 수명 시각화</Spark>
        <CountryInput></CountryInput>
      </FlexColumn>
    </>
  );
};
