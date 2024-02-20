import { useState, useEffect } from "react";
import {
  Container,
  Content,
  Buttons,
  Navigation,
  PrevButton,
  NextButton,
  SlideListContent,
  NavBox,
} from "../../../css/SlideStyle";
import { LineGraph } from "../chart/LineGraph";
import { LineGraphDesc } from "../description/LineGraphDesc";
import { CountryFutureInput } from "../../predictInput/CountryFutureInput";

export const CountryResultSlide = ({ Country, CountryResult }) => {
  const [trendInfo, setTrendInfo] = useState({}); // 객체
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [yearOfMax, setYearOfMax] = useState("");
  const [yearOfMin, setYearOfMin] = useState("");
  const [trend, setTrend] = useState("");

  // 자식 컴포넌트에서 받은 값
  const handleTrendResult = (info) => {
    console.log("꺾은선 그래프 분석 결과:", info); // 그래프 분석 결과
    setTrendInfo(info); // trendInfo 상태 업데이트
  };

  useEffect(() => {
    if (trendInfo.max !== undefined) {
      setMax(trendInfo.max);
    }
    if (trendInfo.min !== undefined) {
      setMin(trendInfo.min);
    }
    if (trendInfo.yearOfMax !== undefined) {
      setYearOfMax(trendInfo.yearOfMax);
    }
    if (trendInfo.yearOfMin !== undefined) {
      setYearOfMin(trendInfo.yearOfMin);
    }
    if (trendInfo.trend !== undefined) {
      setTrend(trendInfo.trend);
    }
  }, [trendInfo]);

  // 슬라이더에 사용될 이미지 URL들을 저장하는 배열
  const list = [
    <SlideListContent style={{ backgroundColor: "none" }}>
      <LineGraph
        Country={Country}
        dataString={CountryResult}
        onTrendAnalyzed={handleTrendResult}
      ></LineGraph>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <LineGraphDesc
        Country={Country}
        max={max}
        min={min}
        yearOfMax={yearOfMax}
        yearOfMin={yearOfMin}
        trend={trend}
      ></LineGraphDesc>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <CountryFutureInput country={Country}></CountryFutureInput>
    </SlideListContent>,
  ];

  // 현재 활성화된 이미지의 인덱스
  const [i, setI] = useState(0);

  // i 값이 변경될 때 마다 유효한 범위를 확인하고 조정
  useEffect(() => {
    if (i < 0) {
      // 첫번째 이미지에서 이전 버튼을 누르면
      setI(list.length - 1); // 마지막 이미지로 이동
    } else if (i >= list.length) {
      // 마지막 이미지에서 다음 버튼을 누르면
      setI(0); // 첫번째 이미지로 이동
    }
  }, [i, list.length]);

  // 현재 활성화
  const NowWatching = () => {
    return (
      <Container>
        <Content
          style={{ transform: `translateX(-${i * 100}vw)` }}
          $numberOfImages={list.length} // Transient props : props앞에 $를 붙여 RealDom 조작을 방지
        >
          {list.map((Component, index) => (
            <div key={index}>{Component}</div>
          ))}
        </Content>
      </Container>
    );
  };

  const GoToNextContent = () => {
    setI(i + 1);
  };

  const GoToPrevContent = () => {
    setI(i - 1);
  };

  return (
    <>
      {NowWatching()}
      <Buttons>
        <PrevButton onClick={GoToPrevContent}>〈</PrevButton>
        <NextButton onClick={GoToNextContent}>〉</NextButton>
      </Buttons>
      <NavBox>
        <Navigation>
          {list.map((_, index) => (
            <button
              key={index}
              onClick={() => setI(index)}
              className={i === index ? "current" : ""}
            />
          ))}
        </Navigation>
      </NavBox>
    </>
  );
};
