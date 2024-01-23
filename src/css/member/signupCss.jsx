import styled from "styled-components";
import { ReactComponent as DrugSvg } from "../../images/member/drug.svg";

export const SignupContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
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

export const Instruction = styled.div`
  color: #fc0000;
  font-size: 0.65rem;
  font-weight: bold;
`;

export const Instruction2 = styled.div`
  color: gray;
  font-size: 0.65rem;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;

  &.item1 {
    margin: 10px;
  }
  &.item2 {
    position: relative;
    right: 10%; //item2가 원래 있어야 할 위치에서 오른쪽으로 10%만큼 떨어진 곳에 위치
  }
  &.item3 {
    display: flex;
  }
`;
