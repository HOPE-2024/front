import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  ChatRoomContainer,
  RoomJoiners,
  RoomChat,
  ChatTitle,
  MsgBox,
  MsgSender,
  Msg,
  InputCon,
  Input,
  SendBtn,
  MsgCon,
} from "../../css/chat/ChatRoomCss";
import { KH_SOCKET_URL } from "../../utils/Common";

export const ChatRoom = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [sender, setSender] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [inputMsg, setInputMsg] = useState("");
  const [chatList, setChatList] = useState([]);
  const ws = useRef(null);
  const onEterKey = (e) => {
    if (e.key === "Enter" && inputMsg) {
      e.preventDefalut();
      onClickMsgSend();
    }
  };

  //전송
  const onClickMsgSend = () => {
    //웹소켓 연결되 있을 대 정보 보내기
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          type: "TALK",
          roomId: roomId,
          sender: sender,
          message: inputMsg,
        })
      );
      setInputMsg("");
    } else {
      alert("채팅 연결에 실패.");
    }
  };

  const chatConRef = useRef(null);
  useEffect(() => {
    if (chatConRef.current) {
      chatConRef.current.scrollTop = chatConRef.current.scrollHeight;
    }
  }, [chatList]);
  return (
    <>
      <ChatRoomContainer>
        <RoomJoiners>채팅방 참여자</RoomJoiners>
        <RoomChat>
          <ChatTitle>&lt; 채팅 창 제목 &gt;</ChatTitle>
          <MsgCon>
            {chatList.map((chat, index) => (
              <MsgBox Key={index} inSender={chat.sender === sender}>
                <MsgSender
                  isSender={chat.sender === sender}
                >{`${chat.sender}`}</MsgSender>
                <Msg>{`${chat.msg}`}</Msg>
              </MsgBox>
            ))}
          </MsgCon>
          <InputCon>
            <Input></Input>
            <SendBtn> 전송 </SendBtn>
          </InputCon>
        </RoomChat>
      </ChatRoomContainer>
    </>
  );
};
