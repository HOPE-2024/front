import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #023b96;
  width: 100vw;

  span {
    font-size: 1.05rem;
    font-weight: bold;
    color: white;
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
`;