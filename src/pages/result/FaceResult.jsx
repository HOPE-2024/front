import { useLocation } from "react-router-dom";
import { FaceResultSlide } from "../../component/result/slide/FaceResultSlide";

export const FaceResult = () => {
  const location = useLocation();
  const { result } = location.state;
  const { image } = location.state;
  const { age } = location.state;
  const { model } = location.state;
  console.log(result);

  return (
    <>
      <FaceResultSlide
        result={result}
        image={image}
        model={model}
        age={age}
      ></FaceResultSlide>
    </>
  );
};
