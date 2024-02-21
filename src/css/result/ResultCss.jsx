import styled from "styled-components";

export const ResultCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FaceImage = styled.img`
  width: 24em;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const TextConTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextCon = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-weight: bold;
`;

export const SmallText = styled.div`
  font-size: 2.2em;
`;

export const MiddleText = styled.div`
  font-size: 3.2em;
  font-weight: 700;
  color: var(--SKY);
`;

export const NoWrap = styled.span`
  white-space: nowrap;

  @media (orientation: portrait) {
    white-space: normal;
  }
`;

export const SkyText = styled.span`
  color: var(--SKY);
  font-size: 1.5em;
  font-weight: bold;
`;

export const SkyBiggerText = styled.span`
  color: var(--SKY);
  font-size: 2em;
  display: flex;
  font-weight: bold;
`;

export const BlackText = styled.span`
  color: var(--BLACK);
  font-size: 1em;
  display: flex;
  border: 1px solid blue;
`;

export const BlackBiggerText = styled.span`
  color: var(--BLACK);
  font-size: 1.5em;
  display: flex;
`;

export const ExplaneCon = styled.div`
  width: 70vw;
  font-size: 1.5em;
  padding: 5px;
  position: relative;
  bottom: 20px;
  font-weight: bold;
`;

export const ResertCon = styled.div`
  margin-top: 20px;
  width: 60vw;
  font-size: 2em;
  padding: 5px;
  text-align: center;
  line-height: 1.5;
  font-weight: bold;

  @media (orientation: portrait) {
    font-size: 1.5em;
  }
`;

export const SmallTextTwo = styled.span`
  font-size: 1em;
  /* text-align: justify; */
`;
