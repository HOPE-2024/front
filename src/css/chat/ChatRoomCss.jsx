import styled from "styled-components";

export const ChatRoomContainer = styled.div`
  display: flex;
  background-color: #ffffff9e;
  width: 100vh;
  height: 75vh;
`;

export const RoomJoiners = styled.div`
  font-size: 2vh;
  text-align: center;
  border: 1px solid var(--BLUE);
  width: 20vh;
  margin: 2vh;
  padding: 2vh 0;
`;

export const RoomChat = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--BLUE);
  width: 80vh;
  margin: 2vh 2vh 2vh 0vh;
  padding: 2vh 0;
`;

export const ChatTitle = styled.div`
  font-size: 2vh;
  text-align: center;
`;

export const MsgCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  overflow-y: auto;
`;

export const MsgBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40vw;
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
`;

export const MsgSender = styled.div`
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
`;

export const Msg = styled.div`
  padding: 1vh;
  margin: 1vh;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isSender ? "val(--SKY)" : "val(--WHITE)"};
  border: ${(props) =>
    props.isSender ? "1px solid val(--SKY)" : "1px solid val(--WHITE)"};
`;

export const InputCon = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  flex-direction: row;
  bottom: 20%;
`;

export const Input = styled.input`
  margin: 1vh;
  padding: 0.7vh;
  width: 55vh;
  border-radius: 2px;
  border: 1px solid var(--SKY);
  background: none;
  &:focus {
    outline: none;
    background-color: #ffffffaf;
  }
`;

export const SendBtn = styled.button`
  margin: 1vh;
  padding: 0.7vh;
  width: 7vh;
  border-radius: 2px;
  border: 1px solid var(--SKY);
  background-color: var(--SKY);
  color: var(--WHITE);
  cursor: pointer;
  &:hover {
    outline: none;
    background-color: var(--BLUE);
  }
`;
