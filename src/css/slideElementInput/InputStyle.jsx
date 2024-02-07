import styled from "styled-components";
import Glass from "../../images/glass.svg";

export const Wrapper = styled.div`
  height: ${(props) => props.height || "80vh"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
`;

export const Input = styled.input`
  border: 2px #5c9bff solid;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  margin: 10px;
  text-align: center;
  font-size: 1rem;
`;

export const Select = styled.select`
  border: 2px #5c9bff solid;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  margin: 10px;
  text-align: center;
  font-size: 1rem;
  margin-right: 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background: white;
  color: #3c84f8;
  border: 2px #3c84f8 solid;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;

export const Image = styled.div`
  background-image: url(${Glass});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  max-width: 60px;
  height: ${(props) => props.height || 10}vh;
  position: relative;
  top: ${(props) => props.top || 15}vh;
  right: ${(props) => props.right || 1}vw;
  position: relative;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }
`;
