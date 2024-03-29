import { useState } from "react";
import { MachineAxiosApi } from "../../api/MachineAxiosApi";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../../css/slideElementInput/InputStyle";
import { MiddleBox, FlexColumn } from "../../css/common/Boxs";
import { Spark } from "../../css/text/Spark";
import styled from "styled-components";
import { EarthLoading } from "../../css/common/EarthLoading";

const Box = styled.div`
  position: relative;
  bottom: 20vh;
`;

export const CountryFutureInput = ({ country = "Korea, Rep." }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const navigate = useNavigate();

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 로컬 스토리지에서 loginStatus 값을 확인합니다.
    const isLoggedIn = localStorage.getItem("loginStatus") === "true";

    // 로그인 상태가 아니라면, confirm 대화 상자를 표시합니다.
    if (!isLoggedIn) {
      const moveToLogin = window.confirm(
        "회원 전용 서비스입니다. 로그인 페이지로 이동하시겠습니까?"
      );
      if (moveToLogin) {
        // 사용자가 확인을 누르면 로그인 페이지로 이동합니다.
        navigate("/login");
      }
      return; // 로그인 상태가 아니면 함수 실행을 여기서 종료합니다.
    }

    // 로그인 상태인 경우에는 원래 로직대로 진행합니다.
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
    <>
      <FlexColumn>
        <Box>
          <Spark>해당 국가의 향후 기대수명을 예측해보세요</Spark>
        </Box>
        <form onSubmit={handleSubmit}>
          <MiddleBox>
            {isLoading ? (
              <EarthLoading></EarthLoading>
            ) : (
              <>
                <Input type="number" value={year} onChange={handleYearChange} />
                <Button type="submit" disabled={isLoading}>
                  예측
                </Button>
              </>
            )}
          </MiddleBox>
        </form>
      </FlexColumn>
    </>
  );
};
