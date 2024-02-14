import styled from "styled-components";
import { ReactComponent as DrugSvg } from "../../images/member/drug.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledSvg = styled(DrugSvg)`
  width: 80px;
  height: 60px;
  cursor: pointer;
`;

export const Title = styled.div`
  margin-top: 10px;
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--NAVY);
`;

export const SubTitle = styled.div`
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const InfoContainer = styled.div`
  font-size: 0.7rem;
  margin: 3px;
  color: red;
  font-weight: bold;
  margin-right: 70px;
`;

export const LowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
