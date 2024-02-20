import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ebf2fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(32, 33, 36, 0.28);
`;

export const Title = styled.h2`
  color: #023b96;
  margin-bottom: 15px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #a0c4ff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #023b96;
  }
`;

export const Button = styled.button`
  padding: 15px 20px;
  background-color: #023b96;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3c8dbc;
  }
`;
