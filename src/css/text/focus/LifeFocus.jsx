import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Animation
const maskAnimation = keyframes`
  to {
    transform: translateX(-210px);
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
    font-size: 35px;
  }
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
  @media screen and (max-width: 350px) {
    font-size: 15px;
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
  font-size: 40px;

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
  left: 2.5vw;

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
`;

const TextBox = styled.div`
  text-align: center;
  max-width: 45vw;
  color: rgb(140, 140, 140);
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
`;

export const LifeFocus = () => {
  // useRef : 실제 DOM 요소에 대한 참조
  const maskRef = useRef(null);
  const letterRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [highlights, setHighlights] = useState([
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
        인생의 마지막 순간은 우리 모두에게 찾아오는 필연적인 여정입니다.
      </TextBox>
      <TextBox>당신의 마지막은 언제 찾아올까요?</TextBox>
      <Content>
        당신의
        <Highlight ref={letterRefs[0]} highlight={highlights[0]}>
          &nbsp;기
        </Highlight>
        <Highlight ref={letterRefs[1]} highlight={highlights[1]}>
          대&nbsp;
        </Highlight>
        <Highlight ref={letterRefs[2]} highlight={highlights[2]}>
          수
        </Highlight>
        <Highlight ref={letterRefs[3]} highlight={highlights[3]}>
          명
        </Highlight>
        을 예측해보세요
      </Content>
      <Mask ref={maskRef}></Mask>
    </Wrapper>
  );
};
