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
import { ScatterGraph } from "../chart/ScatterGraph";
import { BarGraph } from "../chart/BarGraph";
import { TypeWriter } from "../../../css/text/TypeWriter";
import { Gauge } from "../Gauge";
import { Diseases } from "../Diseases";
import { NewsSearch } from "../NewsSearch";
import { AlcoholDesc } from "../description/AlcoholDesc";
import {
  ResultCon,
  SmallText,
  MiddleText,
  TextCon,
} from "../../../css/result/ResultCss";

export const LifeResultSlide = ({
  prediction,
  featureImportances,
  correlation,
  correlation_x,
  correlation_y,
  bmi,
  bmiA,
  alcohol,
  alcoholA,
}) => {
  const beforeText = "당신은 ";
  const emphasizedText = `${Math.round(prediction)}살 `;
  const afterText = `까지 살 것으로 예상됩니다. 해당 예측 모델의 신뢰도는 ${Math.round(
    (correlation[1][0] + correlation[0][1]) * 50
  )}% 입니다. 예측 모델에 대한 세부적인 정보와 개인 맞춤형 건강 조언을 듣고 싶으시다면, 슬라이드를 다음으로 넘겨주세요.`;
  const [diseaseFromChild, setDiseaseFromChild] = useState("");

  const handleDiseaseInfo = (disease) => {
    setDiseaseFromChild(disease);
  };

  // 슬라이더에 사용될 이미지 URL들을 저장하는 배열
  const list = [
    <SlideListContent style={{ backgroundColor: "none" }}>
      <ResultCon>
        <TypeWriter
          beforeText={beforeText}
          emphasizedText={emphasizedText}
          afterText={afterText}
          height="25vh"
        />
      </ResultCon>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <ScatterGraph
        correlation_x={correlation_x}
        correlation_y={correlation_y}
      />
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <BarGraph featureImportances={featureImportances} />
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <Gauge bmi={bmi} bmiA={bmiA}></Gauge>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <AlcoholDesc
        userAlcohol={alcohol}
        averageAlcohol={alcoholA}
      ></AlcoholDesc>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <Diseases
        onDiseaseInfo={handleDiseaseInfo}
        bmi={bmi}
        alcohol={alcohol}
      ></Diseases>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <NewsSearch keyWord={diseaseFromChild}></NewsSearch>
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
