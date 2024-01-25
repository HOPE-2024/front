import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  min-width: 150px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-wrap: nowrap;
`;

export const StyledLogo = styled(Logo)`
  order: 2; // flex 순서
  width: 150px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1200px) {
    position: relative;
    right: 75px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Right = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: end;
  padding-right: 10px;
`;

export const Menu = styled.div`
  position: relative;
  top: 2.3vh;
  display: flex;
  justify-content: end;
  font-size: 1rem;
  height: 100%;
  list-style: none;
  width: 500px;
  font-weight: bold;

  li {
    margin: 0 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 20px;
  position: relative;
  top: 5px;
  background-color: #023b96;
`;
