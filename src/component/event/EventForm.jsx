import React, { useState } from "react";

export const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [drug, setDrug] = useState(""); // 약물 이름 상태 추가

  const handleSubmit = async (e) => {
    e.preventDefault();
    addEvent({ title, description, drug }); // 약물 이름도 전송
    setTitle("");
    setDescription("");
    setDrug(""); // 상태 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="설명"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
};
