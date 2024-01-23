import styled from "styled-components";

export const FirstDropDownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 120%;
  right: 42%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    background: #ffffff;
    z-index: 999;
    &:hover {
      background-color: #f0f0f0;
      font-weight: bold;
    }
  }
`;

export const SecondDropDownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 120%;
  right: 30%;
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
      font-weight: bold;
    }
  }
`;

export const ThirdDropDownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 120%;
  right: 13%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
      font-weight: bold;
    }
  }
`;
