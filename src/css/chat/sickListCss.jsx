import styled from "styled-components";

export const InLineLeft = styled.div`
  color: var(--BLACK);
  padding: 1em;
  gap: 0.5em;
  font-size: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  border: 2px solid var(--BLACK);
  border-radius: 4px;
  margin: 2% 0 2% 2%;
`;

export const InLineRight = styled.div`
  color: var(--BLACK);
  width: 80%;
  border: 2px solid var(--BLACK);
  border-radius: 4px;
  margin: 2% 2% 2% 2%;
`;

export const SickList = [
  "두통",
  "복통",
  "외상",
  "골절",
  "내상",
  "타박상",
  "화상",
  "피부",
  "알러지",
];
