import { FlexColumn } from "../../css/common/Boxs";
import { Spark } from "../../css/text/Spark";
import { FaceInput } from "../../component/predictInput/FaceInput";

export const Face = () => {
  return (
    <>
      <FlexColumn>
        <Spark>얼굴 나이 예측</Spark>
        <FaceInput></FaceInput>
      </FlexColumn>
    </>
  );
};
