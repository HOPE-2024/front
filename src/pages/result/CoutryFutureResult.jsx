import { useLocation } from "react-router-dom";

export const CoutryFutureResult = () => {
  const location = useLocation();
  const { Prediction } = location.state;

  return <>기대수명 : {Prediction}</>;
};
