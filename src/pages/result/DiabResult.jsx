import { useLocation } from "react-router-dom";
import { DiabResultSlide } from "../../component/result/slide/DiabResultSlide";

export const DiabResult = () => {
  const location = useLocation();
  const { prediction } = location.state;
  const { featureImportances } = location.state;
  const { correlation } = location.state;
  const { correlation_x } = location.state;
  const { correlation_y } = location.state;

  return (
    <>
      <DiabResultSlide
        prediction={String(prediction)}
        featureImportances={featureImportances}
        correlation={correlation}
        correlation_x={correlation_x}
        correlation_y={correlation_y}
      ></DiabResultSlide>
    </>
  );
};
