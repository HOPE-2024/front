import { useLocation } from "react-router-dom";
import { CountryResultSlide } from "../../component/result/slide/CountryResultSlide";

export const CountryResult = () => {
  const location = useLocation();
  const { CountryResult } = location.state;

  return (
    <>
      <CountryResultSlide CountryResult={CountryResult}></CountryResultSlide>
    </>
  );
};
