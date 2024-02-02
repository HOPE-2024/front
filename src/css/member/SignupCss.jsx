import styled from "styled-components";
import { ReactComponent as DrugSvg } from "../../images/member/drug.svg";

export const SignupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 85%;
  }
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
  width: 100%;
`;

export const Instruction2 = styled.div`
  color: gray;
  font-size: 0.65rem;
  margin-bottom: 10px;
`;

export const Items = styled.div`
  // 회원 정보 입력
  &.item1 {
    margin: 10px;
  }
  // 경고창
  &.item2 {
    width: 330px;
  }
  // 하단 가입 & 취소 버튼
  &.item3 {
    display: flex;
  }
`;
