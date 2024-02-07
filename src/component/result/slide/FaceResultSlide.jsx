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
import { FaceGenderAge } from "../FaceGenderAge";

export const FaceResultSlide = ({ result, image }) => {
  console.log("FaceResultSlide 결과 : " + result);
  // 슬라이더에 사용될 이미지 URL들을 저장하는 배열
  const list = [
    <SlideListContent style={{ backgroundColor: "none" }}>
      <FaceGenderAge result={result} image={image}></FaceGenderAge>
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      머신 러닝, 딥 러닝 중 어떤 모델로 얼굴 검출을 하였는지 기술
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      사진을 입력하는 창에, 나이 입력 input 를 출력하고, 결과값과 input을
      비교해서 동안, 노안을 판별
    </SlideListContent>,
    <SlideListContent style={{ backgroundColor: "none" }}>
      노안일 경우에는 노안 해결 뉴스 크롤링, 동안일 경우에는 동안 유지 방법 뉴스
      크롤링
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
