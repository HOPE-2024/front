import styled, { keyframes } from "styled-components";

const shineAnimation = keyframes`
  0% {
    background-position: -150%; // 시작점을 왼쪽으로 조금 더 넓게 설정
  }
  100% {
    background-position: 150%; // 끝점을 오른쪽으로 조금 더 넓게 설정
  }
`;

export const Spark = styled.div`
  background: linear-gradient(to right, #5c9bff 30%, white 50%, #5c9bff 70%);
  background-size: 150% auto; // 그라데이션의 전체 길이를 조절
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shineAnimation} 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: bold;
  font-size: 45px;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  top: 20vh;
`;
