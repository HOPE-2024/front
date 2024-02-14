import styled from "styled-components";

export const ChatRoomContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75vh;
`;

export const ChatInner = styled.div`
  background-color: #136cfb35;
  border-radius: 12px;
  width: 80%;
  display: flex;
  flex-direction: row;
`;

export const RoomJoiners = styled.div`
  font-size: 2vh;
  text-align: center;
  justify-content: flex-start;
  width: 20%;
  margin: 2vh;
  padding: 2vh 0;
`;

export const RoomChat = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* border: 2px solid var(--NAVY); */
  border-radius: 10px;
  width: 80%;
  margin: 2% 2% 2% 2%;
  padding: 2vh;
`;
export const ChatTitleCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatTitle = styled.div`
  background-color: var(--NAVY);
  margin-bottom: 0.5vh;
  padding: 0.5rem;
  width: 100%;
  font-size: 2vh;
  color: white;
  font-weight: bold;
  text-align: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const MsgProfile = styled.img`
  height: 5vh;
  width: 5vh;
  margin-left: ${(props) =>
    props.isSender ? "auto" : "0"}; /* 샌더일 때는 오른쪽으로 이동 */
  margin-right: ${(props) =>
    props.isSender ? "0" : "auto"}; /* 샌더가 아닐 때는 왼쪽으로 이동 */
`;

export const MsgCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 20px;
`;

export const MsgTextCon = styled.div`
  flex-direction: column;
`;

export const MsgBox = styled.div`
  margin-top: 1vh;
  padding: 0.8vh;
  display: flex;
  align-items: center;

  max-width: ${(props) => (props.isSender ? "50%" : "40%")};
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
  background-color: #136cfb35;
  border-radius: ${(props) =>
    props.isSender ? "10px 10px 0 10px" : "10px 10px 10px 0"};
`;

export const MsgSender = styled.div`
  padding-bottom: 0.5vh;
  font-size: ${(props) => (props.isSender ? "0.7em" : "0.4em")};
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
`;

export const Msg = styled.div`
  font-size: ${(props) => (props.isSender ? "1em" : "0.8em")};
  border-radius: 10px;
  background-color: ${(props) =>
    props.isSender ? "val(--SKY)" : "val(--WHITE)"};
  border: ${(props) =>
    props.isSender ? "1px solid val(--SKY)" : "1px solid val(--WHITE)"};
`;

export const InputCon = styled.div`
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
  border: 0;
  background: #136cfb35;
  &:focus {
    outline: none;
    background-color: #ffffffaf;
  }
`;

export const SendBtn = styled.button`
  margin: 1vh;
  padding: 0.7vh;
  width: 7vh;
  border-radius: 4px;
  border: 0px;
  background-color: var(--NAVY);
  color: var(--WHITE);
  font-weight: bold;
  cursor: pointer;
  &:hover {
    outline: none;
  }
`;

export const ReportBox = styled.button`
  border-radius: 2px;
  border: 0;
  padding: 4px 8px;
  background-color: var(--NAVY);
  color: white;
  display: block;
  position: fixed;
  z-index: 1;
  left: "100%";
`;
