import styled from "styled-components";

export const CityItem = styled.div`
  line-height: 1.2;
  background-image: linear-gradient(transparent 70%, #3c84f8 40%);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.8s;
  color: var(--BLACK);
  cursor: pointer;

  &:hover {
    background-size: 100% 100%;
  }

  &.clicked {
    line-height: 1.2;
    background-size: 100% 100%;
  }
`;
