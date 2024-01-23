import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";

export const Top = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div``;

export const Right = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: end;
  padding-right: 10px;
`;

export const StyledLogo = styled(Logo)`
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: relative;
  top: 15px;
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
`;

export const Line = styled.div`
  width: 2px;
  height: 20px;
  position: relative;
  top: 5px;
  background-color: #023b96;
`;
