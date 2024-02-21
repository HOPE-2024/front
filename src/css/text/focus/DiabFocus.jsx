import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Animation
const maskAnimation = keyframes`
  to {
    transform: translateX(-315px);
  }
`;

const maskAnimation_2 = keyframes`
  to {
    transform: translateX(-270px);
  }
`;

// CSS
// 전체
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  text-shadow: 5px 5px 5px white;

  @media screen and (max-width: 900px) {
    font-size: 3px;
  }
  @media screen and (max-width: 800px) {
    font-size: 25px;
  }
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

// 배경 글자
const Content = styled.div`
  width: 100vw;
  position: relative;
  letter-spacing: 2px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(140, 140, 140);
  top: 1vh;
  font-size: 36px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Highlight = styled.span`
  font-size: 3.5rem;
  color: ${(props) => (props.highlight ? "#3C84F8" : "grey")};
`;

// 강조 글자
const Mask = styled.div`
  width: 60px;
  height: 60px;
  font-weight: bold;
  font-size: 40px;
  background: linear-gradient(#023b96, #023b96) no-repeat,
    linear-gradient(to right, #023b96, #023b96) no-repeat,
    linear-gradient(to right, #023b96, #023b96) bottom left no-repeat,
    linear-gradient(to right, #023b96, #023b96) bottom left no-repeat,
    linear-gradient(#023b96, #023b96) bottom right no-repeat,
    linear-gradient(#023b96, #023b96) bottom right no-repeat,
    linear-gradient(#023b96, #023b96) top right no-repeat,
    linear-gradient(#023b96, #023b96) top right no-repeat;
  background-size: 10px 2px, 2px 10px, 2px 10px, 10px 2px, 2px 10px, 10px 2px,
    10px 2px, 2px 10px, 10px 2px;
  color: #023b96;
  padding: 5px;
  transform: translateX(-20px);
  box-sizing: border-box;
  animation: ${maskAnimation} 2.5s ease infinite alternate;
  position: relative;
  bottom: 5vh;
  left: 6.5vw;

  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 800px) {
    display: none;
  }

  @media (min-height: 1200px) {
    bottom: 3.2vh;
  }

  @media (min-height: 1500px) {
    bottom: 2.5vh;
  }

  @media (min-height: 2000px) {
    bottom: 2vh;
  }

  @media (max-width: 1300px) {
    animation: ${maskAnimation_2} 2.5s ease infinite alternate;
  }
`;

const TextBox = styled.div`
  text-align: center;
  max-width: 45vw;
  color: rgb(140, 140, 140);
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
`;

export const DiabFocus = () => {
  // useRef : 실제 DOM 요소에 대한 참조
  const maskRef = useRef(null);
  const letterRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [highlights, setHighlights] = useState([
    "false",
    "false",
    "false",
    "false",
    "false",
    "false",
  ]);

  useEffect(() => {
    // maskRect의 오른쪽 경계가, 글자의 왼쪽 경계보다 오른쪽에 존재하고, maskRect의 왼쪽 경게가 글자의 오른쪽 경계보다 왼쪽에 존재하면, mask가 해당 글자와 겹친 상태로 판단 후 효과 적용
    const interval = setInterval(() => {
      const maskRect = maskRef.current.getBoundingClientRect();
      const newHighlights = letterRefs.map((ref) => {
        const rect = ref.current.getBoundingClientRect();
        return (
          rect.left + 10 < maskRect.right && rect.right > maskRect.left + 10
        );
      });
      setHighlights(newHighlights);
    }, 50); // 주기적으로 확인

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <TextBox>
        적을 알고 나를 알면 백 번 싸워도 위태롭지 않다, 고대의 지혜가 말하는
        바와 같이, 당뇨병이라는 은밀한 적을 깊이 이해하고, 건강 상태를
        예측함으로써 질병과의 싸움에서 승리할 수 있을 것입니다.
      </TextBox>
      <Content>
        1년 후의
        <Highlight ref={letterRefs[0]} highlight={highlights[0]}>
          &nbsp;당
        </Highlight>
        <Highlight ref={letterRefs[1]} highlight={highlights[1]}>
          뇨
        </Highlight>
        <Highlight ref={letterRefs[2]} highlight={highlights[2]}>
          병&nbsp;
        </Highlight>
        <Highlight ref={letterRefs[3]} highlight={highlights[3]}>
          진
        </Highlight>
        <Highlight ref={letterRefs[4]} highlight={highlights[4]}>
          행
        </Highlight>
        <Highlight ref={letterRefs[5]} highlight={highlights[5]}>
          도
        </Highlight>
        를 예측해보세요
      </Content>
      <Mask ref={maskRef}></Mask>
    </Wrapper>
  );
};
