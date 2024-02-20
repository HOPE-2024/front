import styled from "styled-components";

export const ResultCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FaceImage = styled.img`
  width: 18em;
  border-radius: 10px;
`;

export const TextConTwo = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* align-items: flex-start; */
`;

export const TextCon = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const SmallText = styled.div`
  font-size: 2.2em;
  padding: 0 0.5em;
`;

export const MiddleText = styled.div`
  font-size: 3.2em;
  font-weight: 700;
  color: var(--SKY);
`;

export const SkyText = styled.span`
  color: var(--SKY);
  font-size: 1.5em;
  display: flex;
  font-weight: 800;
  text-align: center;
  border: 1px solid blue;
`;
export const SkyBiggerText = styled.span`
  color: var(--SKY);
  font-size: 2em;
  display: flex;
`;
export const BlackText = styled.span`
  color: var(--BLACK);
  font-size: 1em;
  display: flex;
  text-align: center;
  border: 1px solid blue;
`;
export const BlackBiggerText = styled.span`
  color: var(--BLACK);
  font-size: 1.5em;
  display: flex;
`;

export const ExplaneCon = styled.div`
  width: 70vh;
  font-size: 1.5em;
  padding: 5px;
  text-align: justify;
`;

export const ResertCon = styled.div`
  width: 70vh;
  font-size: 1.5em;
  padding: 5px;
  /* text-align: justify; */
  align-items: center;
  border: 1px solid red;
`;

export const SmallTextTwo = styled.span`
  font-size: 1em;
  /* text-align: justify; */
`;
