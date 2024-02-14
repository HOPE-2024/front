import React, { useState } from "react";

export const EventEditForm = ({ event, updateEvent }) => {
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEvent({ ...event, title, description });
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
      <button type="submit">수정</button>
    </form>
  );
};
