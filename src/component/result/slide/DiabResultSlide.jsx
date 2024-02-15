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
import { Gauge } from "../../../component/result/Gauge";
import { NewsSearch } from "../../../component/result/NewsSearch";
import { DiabChatRoomList } from "../DiabChatRoomList";
import { DiabDesc } from "../description/DiabDesc";
import { BpDesc } from "../description/BpDesc";

export const DiabResultSlide = ({
  prediction,
  featureImportances,
  correlation,
  correlation_x,
  correlation_y,
  bmi,
  bp,
  gender,
  age,
}) => {
  const beforeText =
    "랜덤 포레스트 모델을 통해 예측된 결과, 당신의 1년 후의 당뇨병 진행도는 ";
  const emphasizedText = `${Math.round(prediction)}`;
  const afterText = `으로 예상됩니다. 해당 모델의 신뢰도는 ${Math.round(
    (correlation[1][0] + correlation[0][1]) * 50
  )}% 입니다. 평가된 모델의 성능을 자세히 알고 싶으시다면 슬라이드를 넘겨주세요.`;

  // 슬라이더에 사용될 이미지 URL들을 저장하는 배열
  const list = [
    <SlideListContent style={{ backgroundColor: "none" }}>
      <TypeWriter
        beforeText={beforeText}
        emphasizedText={emphasizedText}
        afterText={afterText}
      />
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <DiabDesc diabetesValue={prediction}></DiabDesc>
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
      <Gauge bmi={bmi}></Gauge>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <BpDesc age={age} bloodPressure={bp} gender={gender}></BpDesc>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <NewsSearch></NewsSearch>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      <DiabChatRoomList></DiabChatRoomList>
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
    console.log("Now in : " + i);
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
