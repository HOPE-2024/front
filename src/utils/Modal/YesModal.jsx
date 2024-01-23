import React from "react";
import styled, { keyframes } from "styled-components";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";

const ModalClickCss = styled.div`
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
`;

// 애니메이션
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
  max-width: 600px;
  width: ${(props) => props.width || "600px"};
  height: ${(props) => props.height || "180px"};
  padding: 20px;
  line-height: 1.2;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 줄바꿈과 공백을 유지하도록 설정
const MessageContent = styled.div`
  white-space: pre-wrap;
`;

export const YesModal = ({
  // 인자를 받지 못했을 때를 위한 기본값 설정
  setModalOpen = () => {},
  onSubmit = () => {},
  modalOpen = false,
  checkMessage = "",
  width,
  height,
}) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  const handleConfirmClick = () => {
    onSubmit();
    setModalOpen(false);
  };

  return (
    <ModalClickCss>
      {modalOpen && (
        <ModalWrapper onClick={handleBackgroundClick}>
          <Message width={width} height={height}>
            <MessageContent>
              {/* \n를 줄바꿈으로 인식하게 설정 */}
              {checkMessage.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </MessageContent>
            <br />
            <UnderLinedStyle fontSize="1.5rem" onClick={handleConfirmClick}>
              확인
            </UnderLinedStyle>
          </Message>
        </ModalWrapper>
      )}
    </ModalClickCss>
  );
};
