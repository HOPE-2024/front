import styled from "styled-components";

export const MyPageCon = styled.div`
  background-color: #ffffff9a;
  width: 100%;
  padding: 1.5em 0;
  display: flex;
  justify-content: center;
`;

export const MyPageLineCon = styled.div`
  position: relative;
  width: 90%;
  border: 2px solid var(--BLUE);
  border-radius: 15px;
  padding: 2vh 0;
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileCon = styled.div`
  width: 40%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    order: 1;
    margin-bottom: 2em;
  }
`;

export const ProfileBox = styled.div`
  position: absolute;
  top: 4vh;
`;

export const EditConstainer = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    order: 2;
    width: 100%;
  }
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
  margin-top: 30vh;
`;

export const SettingBtn = styled.button`
  font-size: 130%;
  width: 100%;
  color: var(--BLACK);
  border-radius: 14px;
  border: none;
  background-color: #136cfb35;
  padding: 1vh 2vh;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const NickModalBox = styled.div`
  position: absolute;
  bottom: 10%;
  @media screen and (max-width: 500px) {
    position: relative;
    top: 80%;
  }
`;

export const InfoCon = styled.div`
  height: 5.5em;
  padding: 0 1em;
`;

export const Line = styled.div`
  border: 2px solid var(--BLUE);
  border-radius: 50px;
  height: 100%;
  width: 0;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const EditLogo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.5em;
  margin: 0 1em;
  justify-content: right;
  @media screen and (max-width: 500px) {
    width: 2em;
    position: relative;
    margin-bottom: 1em;
  }
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
