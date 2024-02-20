import React, { useState } from "react";
import { Form, Title, Input, Button } from "../../css/event/EventCss";

export const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [drug, setDrug] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      addEvent({ title, description, drug });
      setTitle("");
      setDescription("");
      setDrug("");
      alert("일정이 추가되었습니다.");
    } catch (e) {
      alert("일정을 추가하는데 오류가 발생했습니다 : " + e);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>일정 추가</Title>
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
      <Button type="submit">추가</Button>
    </Form>
  );
};
