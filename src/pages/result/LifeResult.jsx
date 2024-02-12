import { useLocation } from "react-router-dom";
import { LifeResultSlide } from "../../component/result/slide/LifeResultSlide";

export const LifeResult = () => {
  const location = useLocation();
  const { prediction } = location.state;
  const { featureImportances } = location.state;
  const { correlation } = location.state;
  const { correlation_x } = location.state;
  const { correlation_y } = location.state;
  const { bmi } = location.state;
  const { alcohol } = location.state;
  const { alcoholA } = location.state;

  return (
    <>
      <LifeResultSlide
        prediction={String(prediction)}
        featureImportances={featureImportances}
        correlation={correlation}
        correlation_x={correlation_x}
        correlation_y={correlation_y}
        bmi={bmi}
        alcohol={alcohol}
        alcoholA={alcoholA}
      ></LifeResultSlide>
    </>
  );
};
