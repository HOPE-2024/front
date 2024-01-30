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
} from "../../css/SlideStyle";
import { Note } from "../../component/text/Note";

export const LifeSlide = ({ prediction }) => {
  const text = ` 너는 ${Math.round(
    prediction
  )}살에 죽을 것이다, 크하하!\n얼마 남지 않은 쓰레기 같은 인생을 잘 마무리하거라!`;

  // 슬라이더에 사용될 이미지 URL들을 저장하는 배열
  const list = [
    <SlideListContent style={{ backgroundColor: "none" }}>
      <Note text={`${text}`} height="15vh"></Note>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}></SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}></SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}></SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}></SlideListContent>,
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
