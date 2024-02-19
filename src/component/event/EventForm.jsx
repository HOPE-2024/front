import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ebf2fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(32, 33, 36, 0.28);
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #a0c4ff;
  &:focus {
    outline: none;
    border-color: #4f98ca;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4f98ca;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3c8dbc;
  }
`;

export const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [drug, setDrug] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addEvent({ title, description, drug });
    setTitle("");
    setDescription("");
    setDrug("");
  };

  return (
    <Form onSubmit={handleSubmit}>
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
