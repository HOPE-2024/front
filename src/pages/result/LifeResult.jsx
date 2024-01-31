import { useLocation } from "react-router-dom";
import { LifeSlide } from "../../component/result/LifeSlide";

export const LifeResult = () => {
  const location = useLocation();
  const { prediction } = location.state;
  const { featureImportances } = location.state;
  const { correlation } = location.state;
  console.log("예측 결과 : " + prediction);

  return (
    <>
      <LifeSlide
        prediction={String(prediction)}
        featureImportances={featureImportances}
        correlation={correlation}
      ></LifeSlide>
    </>
  );
};
