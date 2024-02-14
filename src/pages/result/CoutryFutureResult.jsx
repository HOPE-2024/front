import { useLocation } from "react-router-dom";
import { CountryFutureResultSlide } from "../../component/result/slide/CountryFutureResultSlide";

export const CoutryFutureResult = () => {
  const location = useLocation();
  const { Prediction } = location.state;
  const { Country } = location.state;
  const { Year } = location.state;
  const { Percent } = location.state;
  const { x } = location.state;
  const { y } = location.state;

  return (
    <>
      <CountryFutureResultSlide
        country={Country}
        year={Year}
        prediction={Prediction}
        percent={Percent}
        x={x}
        y={y}
      ></CountryFutureResultSlide>
    </>
  );
};
