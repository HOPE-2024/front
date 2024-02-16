import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Animation
// 단어가 바뀔 때 사용, 현재 단어가 사라지는 효과
const leaveWordAnimation = keyframes`
  0% {
    transform: rotateX(0deg);
    visibility: visible;
    opacity: 1;
  }
  100% {
    transform: rotateX(-90deg);
    visibility: visible;
    opacity: 0;
  }
`;

// 단어가 바뀔 때 사용, 새로운 단어가 회전하며 등장
const enterWordAnimation = keyframes`
  0% {
    transform: rotateX(90deg);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
`;

// 글자의 일부분만 보이게하는 효과
const glitchAnimation = keyframes`
  0% { clip: rect(23px, 9999px, 17px, 0); }
  5% { clip: rect(34px, 9999px, 24px, 0); }
  10% { clip: rect(34px, 9999px, 9px, 0); }
  15% { clip: rect(20px, 9999px, 22px, 0); }
  20% { clip: rect(5px, 9999px, 18px, 0); }
  25% { clip: rect(15px, 9999px, 35px, 0); }
  30% { clip: rect(26px, 9999px, 36px, 0); }
  35% { clip: rect(26px, 9999px, 33px, 0); }
  40% { clip: rect(26px, 9999px, 5px, 0); }
  45% { clip: rect(13px, 9999px, 28px, 0); }
  50% { clip: rect(29px, 9999px, 38px, 0); }
  55% { clip: rect(30px, 9999px, 13px, 0); }
  60% { clip: rect(7px, 9999px, 36px, 0); }
  65% { clip: rect(28px, 9999px, 14px, 0); }
  70% { clip: rect(15px, 9999px, 16px, 0); }
  75% { clip: rect(8px, 9999px, 8px, 0); }
  80% { clip: rect(39px, 9999px, 2px, 0); }
  85% { clip: rect(20px, 9999px, 18px, 0); }
  90% { clip: rect(27px, 9999px, 8px, 0); }
  95% { clip: rect(33px, 9999px, 14px, 0); }
  100% { clip: rect(23px, 9999px, 25px, 0); }
`;

const glitch2Animation = keyframes`
  0% { clip: rect(5px, 9999px, 21px, 0); }
  5% { clip: rect(38px, 9999px, 11px, 0); }
  10% { clip: rect(37px, 9999px, 18px, 0); }
  15% { clip: rect(11px, 9999px, 38px, 0); }
  20% { clip: rect(24px, 9999px, 13px, 0); }
  25% { clip: rect(37px, 9999px, 25px, 0); }
  30% { clip: rect(28px, 9999px, 40px, 0); }
  35% { clip: rect(14px, 9999px, 33px, 0); }
  40% { clip: rect(35px, 9999px, 3px, 0); }
  45% { clip: rect(23px, 9999px, 19px, 0); }
  50% { clip: rect(7px, 9999px, 18px, 0); }
  55% { clip: rect(18px, 9999px, 15px, 0); }
  60% { clip: rect(14px, 9999px, 31px, 0); }
  65% { clip: rect(29px, 9999px, 4px, 0); }
  70% { clip: rect(12px, 9999px, 2px, 0); }
  75% { clip: rect(3px, 9999px, 38px, 0); }
  80% { clip: rect(24px, 9999px, 39px, 0); }
  85% { clip: rect(34px, 9999px, 12px, 0); }
  90% { clip: rect(15px, 9999px, 11px, 0); }
  95% { clip: rect(10px, 9999px, 14px, 0); }
  100% { clip: rect(38px, 9999px, 21px, 0); }
`;

// CSS
// 전체
const Content = styled.div`
  width: 32vw;
  height: 30vh;
  font-size: 35px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  color: rgb(140, 140, 140);
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }

  @media screen and (max-width: 400px) {
    font-size: 25px;
  }

  @media screen and (max-width: 300px) {
    font-size: 20px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

// 단어 전환
const Switcher = styled.span`
  position: relative;
  bottom: 1vh;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  font-weight: bold;
  transition: width 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
  height: 100%;

  &.in p {
    -webkit-animation: ${leaveWordAnimation} 300ms
      cubic-bezier(0.215, 0.61, 0.355, 1);
    animation: ${leaveWordAnimation} 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
    transform-origin: center 35px;
  }
  &.in p.active {
    -webkit-animation: ${enterWordAnimation} 300ms 100ms
      cubic-bezier(0.215, 0.61, 0.355, 1);
    animation: ${enterWordAnimation} 300ms 100ms
      cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  // 실제 텍스트
  p {
    visibility: hidden;
    position: absolute;
    white-space: nowrap;
    &.active {
      visibility: visible;
    }
  }
`;

// 특수 효과
const Glitch = styled.p`
  color: #136cfb;
  position: absolute;
  font-size: 50px;
  &:after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -1px 0 red;
    top: 0;
    color: white;
    background: cornflowerblue;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${(props) => (props.active ? glitchAnimation : "none")} 2s linear
      alternate-reverse;
  }

  &:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: white;
    background: cornflowerblue;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${(props) => (props.active ? glitch2Animation : "none")} 3s
      linear alternate-reverse;
  }
`;

// React 컴포넌트
export const WordSwitcher = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const count = 3; // 변경될 단어의 개수

  useEffect(() => {
    const doChange = () => {
      let nextItem = currentItem === count - 1 ? 0 : currentItem + 1;
      setCurrentItem(nextItem);
    };

    const interval = setInterval(doChange, 2000); // 단어 변경 주기
    return () => clearInterval(interval);
  }, [currentItem, count]);

  // 단어의 길이에 맞춰서 공백을 조정
  const generateSpaces = () => {
    switch (currentItem) {
      case 0: // 의약품명
        return (
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </>
        );
      case 1: // 제조사명
        return (
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </>
        );
      case 2: // 성분
        return <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;
      default:
        return null;
    }
  };

  return (
    <>
      <Content>
        당신이 알고싶은&nbsp;
        {/* 전환되는 글자 */}
        <Switcher id="word-switcher" className="in">
          <Glitch
            className={`glitch ${currentItem === 0 ? "active" : ""}`}
            data-text="develop"
            data-oid="1"
          >
            의약품명
          </Glitch>
          <Glitch
            className={`glitch ${currentItem === 1 ? "active" : ""}`}
            data-text="love"
            data-oid="2"
          >
            제조사명
          </Glitch>
          <Glitch
            className={`glitch ${currentItem === 2 ? "active" : ""}`}
            data-text="love"
            data-oid="2"
          >
            성분
          </Glitch>
        </Switcher>
        {generateSpaces()} 을 검색해보세요
      </Content>
    </>
  );
};
