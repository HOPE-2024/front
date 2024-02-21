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
  const beforeText = `${year}년, ${country}의 평균 수명은 ${percent}%확률로 `;
  const emphasizedText = `${Math.round(prediction)}`;
  const afterText = `살로 예상됩니다. 인류의 평균 수명은 계속적으로 증가중에 있습니다. 이러한 긍정적인 추세에는 현대 의료 기술의 지속적인 발전이 크게 기여하고 있습니다. 의료 기술의 발전은 질병의 조기 진단과 치료를 가능하게 하였고, 건강 관리 기술에 혁신을 불러일으켰기 때문입니다.`;

  const list = [
    <SlideListContent style={{ backgroundColor: "none" }}>
      <TypeWriter
        beforeText={beforeText}
        emphasizedText={emphasizedText}
        afterText={afterText}
        height="40vh"
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
