import React from "react";

export const Diary = ({ selectedEvent }) => {
  if (!selectedEvent) {
    return <div>일정을 선택해 주세요.</div>;
  }

  return (
    <div>
      <h2>일정 상세 정보</h2>
      <p>제목: {selectedEvent.title}</p>
      <p>설명: {selectedEvent.description}</p>
      <p>날짜: {selectedEvent.date}</p>
    </div>
  );
};
