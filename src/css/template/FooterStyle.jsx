import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #023b96;
  width: 100vw;
  z-index: 1000;

  span {
    font-size: 1.05rem;
    font-weight: bold;
    color: white;
  }

  @media only screen and (aspect-ratio: 16/9) {
    body {
      background-color: lightblue;
    }
  }

  @media (max-width: 400px) and (max-height: 650px) {
    display: none;
  }
`;

export const Left = styled.div`
  width: 30%;
  height: 75px;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;

  span {
    white-space: nowrap;
    margin-left: 45px;
  }

  @media (max-width: 410px) {
    display: none;
  }
`;

export const Right = styled.div`
  width: 20%;
  height: 75px;
  display: flex;
  justify-content: right;
  align-items: center;

  span {
    white-space: nowrap;
    margin-right: 45px;
  }

  @media (max-width: 410px) {
    position: relative;
    left: 55vw;
  }
`;
