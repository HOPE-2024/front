import styled from "styled-components";
import { ReactComponent as DrugSvg } from "../../images/member/drug.svg";

export const ForgotIdContainer = styled.div`
  width: 100%;
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
  width: 80px;
  height: 60px;
  cursor: pointer;
`;

export const Title = styled.div`
  width: 50vw;
  margin-top: 10px;
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--NAVY);
  text-align: center;
`;

export const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

export const RadioLabel = styled.label`
  margin: 0 10px;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
`;

export const InputField = styled.input`
  width: 350px;
  height: auto;
  margin: 10px 20px;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 18px;
  font-size: 16px;
  outline-style: none;
`;

export const InputAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoContainer = styled.div`
  font-size: 0.85em;
  margin: 5px;
`;
