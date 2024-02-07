import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatAxiosApi } from "../../api/ChatAixosApi";
import { SickList } from "../../css/chat/AreaSickListCss";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";

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

const InputField = styled.input`
  width: 100%;
  margin-top: 1vh;
  padding: 1vh;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 40%;
  margin-top: 1vh;
  padding: 1vh;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const TitleCon = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  gap: 1%;
`;

const ButtonBox = styled.div`
  width: 50%;
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
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
  const [selectedSick, setSelectedSick] = useState("");
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
    if (selectedSick === "") {
      alert("질병을 선택하세요.");
      return;
    }

    onSubmit(inputValue);

    ChatAxiosApi.freeChatCreate(inputValue, selectedSick)
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
    setInputValue("");
    setSelectedSick(""); // 모달이 닫힐 때 입력값 초기화
    setModalOpen(false);
  };

  return (
    <ModalClickCss>
      {modalOpen && (
        <>
          <ModalWrapper ModalWrapper onClick={modalClick}>
            <Message>
              <p>{checkMmessage}</p>
              <TitleCon>
                <Select
                  value={selectedSick}
                  onChange={(e) => setSelectedSick(e.target.value)}
                >
                  <option value="">질병 선택</option>
                  {SickList.map((sick, index) => (
                    <option key={index} value={sick}>
                      {sick}
                    </option>
                  ))}
                </Select>
                <InputField
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={checkInput}
                />
              </TitleCon>
              <ButtonBox>
                <UnderLinedStyle onClick={CheckClick}>확인</UnderLinedStyle>
                <UnderLinedStyle onClick={closeClick}>취소</UnderLinedStyle>
              </ButtonBox>
            </Message>
          </ModalWrapper>
        </>
      )}
    </ModalClickCss>
  );
};
