import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
  line-height: 15px;
  overflow-y: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 900;
  color: var(--NAVY);
  margin-top: 30px;
`;

export const Line = styled.div`
  width: 60%;
  height: 1px;
  background-color: #bfbfbf;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }
`;

export const SubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--NAVY);
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-top: 10px;
  }
`;

export const Detail = styled.div`
  width: 75%;
  font-size: 0.9rem;
  font-weight: 450;
  margin-top: 13px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
