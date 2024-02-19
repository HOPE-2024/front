import { FlexColumn } from "../../css/common/Boxs";
import { Spark } from "../../css/text/Spark";
import { CountryInput } from "../../component/predictInput/CountryInput";

export const Country = () => {
  return (
    <>
      <FlexColumn>
        <Spark top="15vh">연도별 국가 평균 수명</Spark>
        <br />
        <Spark>국가를 선택하고, 해당 국가의 평균 수명을 알아보세요</Spark>
        <CountryInput></CountryInput>
      </FlexColumn>
    </>
  );
};
