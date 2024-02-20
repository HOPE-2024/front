import React, { useState } from "react";
import { Form, Title, Input, Button } from "../../css/event/EventCss";

export const EventEditForm = ({ event, updateEvent }) => {
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEvent({ ...event, title, description });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>일정 수정</Title>
        <Input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">수정</Button>
      </Form>
    </>
  );
};
