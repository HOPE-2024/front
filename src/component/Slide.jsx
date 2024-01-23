import { useState, useEffect } from "react";
import {
  Container,
  Content,
  Buttons,
  Button,
  Navigation,
} from "../css/SlideStyle";

export const Slide = () => {
  // 슬라이더에 사용될 이미지 URL들을 저장하는 배열
  const list = [
    "https://image.idus.com/image/files/ebebbddfc2fc4b6ca1064cb28bbb447e.jpg",
    "https://image.idus.com/image/files/0590592b1598475c9b7c0b3f4331054c.jpg",
    "https://image.idus.com/image/files/3e01d0b3962f4f0297fea7a372243637.jpg",
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
          style={{ transform: `translateX(-${i * (100 / list.length)}%)` }}
          $numberOfImages={list.length} // Transient props : props앞에 $를 붙여 RealDom 조작을 방지
        >
          {list.map((url, index) => (
            <img key={index} src={url} alt={`Loading ${index + 1}`} />
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
        <Button onClick={GoToPrevContent}>〈</Button>
        <Button onClick={GoToNextContent}>〉</Button>
      </Buttons>
      <Navigation>
        {list.map((_, index) => (
          <button
            key={index}
            onClick={() => setI(index)}
            className={i === index ? "current" : ""}
          />
        ))}
      </Navigation>
    </>
  );
};
