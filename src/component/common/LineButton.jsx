import styled from "styled-components";

export const LineButton = styled.div`
  line-height: 1.1;
  background-image: linear-gradient(
    transparent 20%,
    ${(props) => props.color || "#3c84f869"} 100%
  );
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.5s;
  color: ${(props) => props.color || "var(--BLACK)"};
  font-size: ${(props) => props.fontSize || "2vh"};
  cursor: pointer;

  &:hover {
    background-size: 100% 100%;
  }

  &.clicked {
    line-height: 1.2;
    background-size: 100% 100%;
  }
`;
