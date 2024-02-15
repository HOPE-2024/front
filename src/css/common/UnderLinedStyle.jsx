import styled from "styled-components";

export const UnderLinedStyle = styled.div`
  line-height: 1.8;
  background-image: linear-gradient(
    transparent 85%,
    ${(props) => props.color || "#023b96"} 40%
  ); // 기본값 : #023b96
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.4s;
  font-size: ${(props) => props.fontSize || "1rem"};
  white-space: nowrap;

  cursor: pointer;

  &:hover {
    background-size: 100% 100%;
    transform: scale(1.1);
  }

  &.clicked {
    line-height: 1.2;
    background-size: 100% 100%;
  }
`;
