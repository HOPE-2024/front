import styled from "styled-components";
import { ReactComponent as DrugSvg } from "../../images/member/drug.svg";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-left: 25px;
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

export const LowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.85rem;
  font-weight: bold;
  margin-top: 1.3rem;
`;

export const LowerTitle = styled.div`
  color: gray;
  margin-right: 1.7rem;
`;

export const GoId = styled.div`
  color: var(--NAVY);
  cursor: pointer;
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
