import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconBox = styled.div`
  font-size: 4rem;
  color: var(--NAVY);
  margin: 20px;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--NAVY);
`;

export const IdInfo = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
