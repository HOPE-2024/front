import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Animation
const maskAnimation = keyframes`
  to {
    transform: translateX(-140px);
  }
`;

// CSS
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 200px;
  white-space: nowrap;
  position: relative;
`;

// 배경 글자
const Content = styled.div`
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  letter-spacing: 2px;
  font-size: 40px;
  color: rgb(140, 140, 140);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Highlight = styled.span`
  color: ${(props) => (props.highlight ? "#3C84F8" : "grey")};
`;

// 강조 글자
const Mask = styled.div`
  width: 45px;
  height: 50px;
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
  transform: translateX(0);
  box-sizing: border-box;
  animation: ${maskAnimation} 2.5s ease infinite alternate;
  mix-blend-mode: difference;
`;

export const Focus = () => {
  const maskRef = useRef(null);
  const letterRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [highlights, setHighlights] = useState([false, false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      const maskRect = maskRef.current.getBoundingClientRect();
      const newHighlights = letterRefs.map((ref) => {
        const rect = ref.current.getBoundingClientRect();
        return rect.left < maskRect.right && rect.right > maskRect.left;
      });
      setHighlights(newHighlights);
    }, 50); // 주기적으로 체크

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Content>
        당신의
        <Highlight ref={letterRefs[0]} highlight={highlights[0]}>
          &nbsp;기
        </Highlight>
        <Highlight ref={letterRefs[1]} highlight={highlights[1]}>
          대
        </Highlight>
        <Highlight ref={letterRefs[2]} highlight={highlights[2]}>
          수
        </Highlight>
        <Highlight ref={letterRefs[3]} highlight={highlights[3]}>
          명
        </Highlight>
        을 알아보세요
      </Content>
      <Mask ref={maskRef}></Mask>
    </Wrapper>
  );
};
