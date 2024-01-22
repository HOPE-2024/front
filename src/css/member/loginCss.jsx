import styled, { css } from "styled-components";
import { ReactComponent as DrugSvg } from "../../images/drug.svg";

export const LoginContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 1px solid navy;
`;

export const StyledSvg = styled(DrugSvg)`
  width: 100px;
  height: 70px;
`;

export const Title = styled.div`
  width: 50vw;
  margin: 20px;
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--NAVY);
  text-align: center;
`;

export const Input = styled.input`
  width: 350px;
  height: auto;
  line-height: normal;
  padding: 1em;
  border: 1px solid var(--NAVY);
  border-radius: 18px;
  outline-style: none;
`;

export const FindLink = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0 5px;

  &:hover {
    color: var(--NAVY);
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;

  &.item1 {
    margin: 10px;
  }
  &.item2 {
    margin: 15px;
    text-decoration: none;
  }
`;
