import styled from "styled-components";

export const FirstDropDownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 90%;
  right: 28%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 500;

  li {
    padding: 10px;
    cursor: pointer;
    margin: 5px;
    text-align: center;

    transition: background-color 0.3s;
    background: #ffffff;
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
  top: 90%;
  right: 17%;
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 500;

  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 5px;
    text-align: center;

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
  top: 90%;
  right: 5%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 500;

  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 5px;
    text-align: center;

    &:hover {
      background-color: #f0f0f0;
      font-weight: bold;
    }
  }
`;

export const FiveDropDownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 90%;
  right: 40%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 500;

  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 5px;
    text-align: center;

    &:hover {
      background-color: #f0f0f0;
      font-weight: bold;
    }
  }
`;
