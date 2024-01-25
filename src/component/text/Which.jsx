import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// 키프레임 정의
const opacityAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

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

// Styled Components
const Content = styled.div`
  background-color: yellow;
  position: absolute;
  top: 50%;
  left: 30%;
  &::after,
  &::before {
    color: #000;
    font-size: 42px;
    animation: ${opacityAnimation} 2s ease-out 0s normal none infinite;
  }
`;

const WordSwitcher = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: top;
  transition: width 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
  white-space: nowrap;
  margin-right: -5px;
  margin-top: 0;
  font-weight: bold;
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
  p {
    visibility: hidden;
    position: absolute;
    left: 0;
    &.active {
      visibility: visible;
    }
  }
`;

const Glitch = styled.p`
  color: white;
  position: absolute;
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
export const Which = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const count = 3;

  useEffect(() => {
    const doChange = () => {
      let nextItem = currentItem === count - 1 ? 0 : currentItem + 1;
      setCurrentItem(nextItem);
    };

    const interval = setInterval(doChange, 2000);
    return () => clearInterval(interval);
  }, [currentItem, count]);

  return (
    <Content>
      <h1>
        Hello. We
        <WordSwitcher id="word-switcher" className="in">
          <Glitch
            className={`glitch ${currentItem === 0 ? "active" : ""}`}
            data-text="design"
            data-oid="0"
          >
            design
          </Glitch>
          <Glitch
            className={`glitch ${currentItem === 1 ? "active" : ""}`}
            data-text="develop"
            data-oid="1"
          >
            develop
          </Glitch>
          <Glitch
            className={`glitch ${currentItem === 2 ? "active" : ""}`}
            data-text="love"
            data-oid="2"
          >
            love
          </Glitch>
        </WordSwitcher>
        apps.
      </h1>
    </Content>
  );
};
