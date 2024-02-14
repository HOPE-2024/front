import { useState } from "react";
import { MachineAxiosApi } from "../../api/MachineAxiosApi";
import { useNavigate } from "react-router-dom";

export const CountryFutureInput = ({ country = "Korea, Rep." }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const navigate = useNavigate();

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // 데이터를 보내기 시작할 때 로딩 상태를 true로 설정

    const userData = {
      Country: country,
      Year: year,
    };

    try {
      const response = await MachineAxiosApi.predictFuture(userData);

      let temp = JSON.parse(response.data.correlations);
      let sum = 0;
      temp.forEach((innerArray) => {
        innerArray.forEach((number) => {
          sum += number;
        });
      });
      const average = Math.floor((sum / 4) * 100);

      navigate("/coutryfutureresult", {
        state: {
          Prediction: response.data.prediction,
          Country: country,
          Year: year,
          Percent: average,
          x: response.data.x,
          y: response.data.y,
        },
      });
    } catch (error) {
      console.error("서버로 데이터를 보내는데 실패했습니다:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        연도:
        {isLoading ? ( // 로딩 상태에 따라 텍스트 표시
          <span>Loading...</span>
        ) : (
          <input type="number" value={year} onChange={handleYearChange} />
        )}
      </label>
      <button type="submit" disabled={isLoading}>
        제출
      </button>
      {/* 로딩 중에는 버튼을 비활성화 */}
    </form>
  );
};
