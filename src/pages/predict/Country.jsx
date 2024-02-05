import { FlexColumn } from "../../css/common/Boxs";
import { Spark } from "../../css/text/Spark";
import { CountryInput } from "../../component/predictInput/CountryInput";

export const Country = () => {
  return (
    <>
      <FlexColumn>
        <Spark top="20vh">연도별 국가 평균 수명</Spark>
        <CountryInput></CountryInput>
      </FlexColumn>
    </>
  );
};
