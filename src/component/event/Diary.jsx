import React from "react";
import styled from "styled-components";

const DiaryWrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #ebf2fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  color: #4f98ca;
  margin-bottom: 15px;
`;

const Detail = styled.p`
  color: #083d77;
  margin: 5px 0;
  font-size: 16px;
`;

const NoSelectionMessage = styled.div`
  color: #626262;
  font-style: italic;
`;

export const Diary = ({ selectedEvent }) => {
  if (!selectedEvent) {
    return <NoSelectionMessage>일정을 선택해 주세요.</NoSelectionMessage>;
  }

  return (
    <DiaryWrapper>
      <Title>일정 상세 정보</Title>
      <Detail>제목: {selectedEvent.title}</Detail>
      <Detail>설명: {selectedEvent.description}</Detail>
      <Detail>날짜: {selectedEvent.date}</Detail>
    </DiaryWrapper>
  );
};
