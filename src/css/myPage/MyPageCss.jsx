import styled from "styled-components";

export const MyPageCon = styled.div`
  background-color: #ffffff9a;
  width: 100%;
  padding: 1vh;
  display: flex;
  justify-content: center;
`;

export const MyPageLineCon = styled.div`
  position: relative;
  width: 90%;
  border: 2px solid var(--BLUE);
  border-radius: 15px;
  padding: 1vh;
  display: flex;
`;

export const ProfileCon = styled.div`
  width: 40%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileBox = styled.div`
  padding: 3vh;
  position: absolute;
  top: 3.5vh;
`;

export const EditConstainer = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextCon = styled.div`
  font-size: 100%;
  color: var(--BLACK);
  height: 1.5em;
  text-align: center;
`;
export const TextInfoCon = styled.div`
  font-size: 150%;
  width: 13em;
  color: var(--BLACK);
  border-radius: 14px;
  background-color: #136cfb35;
  padding: 1vh 2vh;
  text-align: center;
`;

export const SettionCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40vh;
`;

export const SettingBtn = styled.button`
  font-size: 150%;
  width: 100%;
  color: var(--BLACK);
  border-radius: 14px;
  border: none;
  background-color: #136cfb35;
  padding: 1vh 2vh;
  text-align: center;
  cursor: pointer;
`;

export const NickModalBox = styled.div`
  position: absolute;
  bottom: 10%;
`;

export const InfoCon = styled.div`
  height: 6em;
`;

export const Line = styled.div`
  border: 2.5px solid var(--BLUE);
  border-radius: 50px;
  height: 70vh;
  margin: 2vh;
  width: 0;
`;

export const EditLogo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 4%;
  height: 3.5%;
  justify-content: right;
`;

export const EditBtnCon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
`;

export const Input = styled.input`
  background-color: none;
  width: 100%;
  text-align: center;
  font-size: 1em;
  padding: 0.5em;
  border: 1px solid var(--BLUE);
  border-radius: 4px;
  background-color: #136cfb35;
`;
