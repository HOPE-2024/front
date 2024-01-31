import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatAxiosApi } from "../../api/ChatAixosApi";

const ModalClickCss = styled.div`
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s;
  z-index: 999;
`;

const Message = styled.div`
  p {
    margin-top: 20px;
  }
  width: 600px;
  height: 180px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin: 20px;
`;

const InputField = styled.input`
  width: 90%;
  margin-top: 1vh;
  padding: 1vh;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddChatModal = ({
  // 기본값 설정
  modalOpen = false,
  setModalOpen = () => {},
  onSubmit = () => {},
  checkMmessage = "",
  revertChanges = () => {},
  checkInput = "",
  type,
}) => {
  const [inputValue, setInputValue] = useState(""); // 추가: 입력값을 상태로 관리
  const navigate = useNavigate();

  // 모달 바깥 부분 클릭 시,
  const modalClick = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpen();
    }
  };

  // 확인
  const CheckClick = () => {
    if (inputValue.trim() === "") {
      alert("채팅방 제목을 입력하세요.");
      return;
    }

    onSubmit(inputValue);

    ChatAxiosApi.freeChatCreate(inputValue)
      .then((response) => {
        console.log("채팅방 생성 성공");
        navigate(0);
      })
      .catch((error) => {
        console.log("채팅방 생성 실패");
      });

    setModalOpen();
  };

  // 취소
  const closeClick = () => {
    setModalOpen(false);
  };

  return (
    <ModalClickCss>
      {modalOpen && (
        <>
          <ModalWrapper ModalWrapper onClick={modalClick}>
            <Message>
              <p>{checkMmessage}</p>
              <InputField
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={checkInput}
              />
              <Button>
                <button onClick={CheckClick}>확인</button>
                <button onClick={closeClick}>취소</button>
              </Button>
            </Message>
          </ModalWrapper>
        </>
      )}
    </ModalClickCss>
  );
};
