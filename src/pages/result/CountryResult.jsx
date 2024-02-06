import { useLocation } from "react-router-dom";
import { CountryResultSlide } from "../../component/result/slide/CountryResultSlide";

export const CountryResult = () => {
  const location = useLocation();
  const { Country } = location.state;
  const { CountryResult } = location.state;

  return (
    <>
      <CountryResultSlide
        Country={Country}
        CountryResult={CountryResult}
      ></CountryResultSlide>
    </>
  );
};
