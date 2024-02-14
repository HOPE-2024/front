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
import { TypeWriter } from "../../../css/text/TypeWriter";
import { ScatterGraph } from "../chart/ScatterGraph";

export const CountryFutureResultSlide = ({
  country,
  year,
  prediction,
  percent,
  x,
  y,
}) => {
  const beforeText = `${year}년, ${country}의 평균 수명은 ${percent}%확률로`;
  const emphasizedText = `${Math.round(prediction)}`;
  const afterText = `살로 예상됩니다.`;

  const list = [
    <SlideListContent style={{ backgroundColor: "none" }}>
      <TypeWriter
        beforeText={beforeText}
        emphasizedText={emphasizedText}
        afterText={afterText}
      />
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <ScatterGraph
        correlation_x={x}
        correlation_y={y}
        domain={[20, 100]}
        yPosition={20}
      ></ScatterGraph>
    </SlideListContent>,
  ];

  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < 0) {
      setI(list.length - 1);
    } else if (i >= list.length) {
      setI(0);
    }
    console.log("Now in : " + i);
  }, [i, list.length]);

  const NowWatching = () => {
    return (
      <Container>
        <Content
          style={{ transform: `translateX(-${i * 100}vw)` }}
          $numberOfImages={list.length}
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
