import { useState } from "react";
import {
  InLineLeft,
  InLineRight,
  ChatListOutLine,
  CityList,
  SickList,
  AddChatListStyled,
} from "../../css/chat/AreaSickListCss";
import { LineButton } from "../../component/common/LineButton";
import { ToggleContainer } from "../../component/common/ToggleSwitch";
import { AddChatModal } from "../../utils/Modal/AddChatModal";

export const ChatList = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOn, setIsOn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [chatTitle, setChatTitle] = useState("");

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  const handleListClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems((prevItmes) =>
        prevItmes.filter((selectedItme) => selectedItme !== item)
      );
    } else {
      setSelectedItems((prevItmes) => [...prevItmes, item]);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // navigator("/ChatRoom");
    // navigator(`/ChatRoom/${}`)
  };

  const onSubmitModal = () => {
    console.log("채팅방 만들기, 제목 : ", chatTitle);
    closeModal();
  };

  return (
    <>
      <ChatListOutLine>
        <InLineLeft>
          <ToggleContainer onClick={toggleHandler}>
            <div
              className={`toggle-container ${isOn ? "toggle--checked" : null}`}
            />
            <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}>
              <span className="toggle-circle-text">
                {isOn ? "지역" : "증상"}
              </span>
            </div>
          </ToggleContainer>
          {isOn
            ? CityList.map((item, index) => (
                <LineButton
                  key={index}
                  onClick={() => handleListClick(item)}
                  className={`${selectedItems.includes(item) ? "clicked" : ""}`}
                >
                  {item}
                </LineButton>
              ))
            : SickList.map((item, index) => (
                <LineButton
                  key={index}
                  onClick={() => handleListClick(item)}
                  className={`${selectedItems.includes(item) ? "clicked" : ""}`}
                >
                  {item}
                </LineButton>
              ))}
        </InLineLeft>
        <InLineRight>
          <AddChatListStyled onClick={openModal} />
          <AddChatModal
            modalOpen={modalOpen}
            setModalOpen={closeModal}
            onSubmit={onSubmitModal}
            checkMmessage="채팅방 제목"
            checkInput="채팅방 제목을 입력하세요"
            revertChanges={() => setChatTitle("")}
            type="input"
          />
        </InLineRight>
      </ChatListOutLine>
    </>
  );
};
