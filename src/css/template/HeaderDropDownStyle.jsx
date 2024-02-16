import styled from "styled-components";

export const FirstDropDownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 120%;
  right: 29%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;

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
  top: 120%;
  right: 17%;
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;

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
  top: 120%;
  right: 3%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;

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
  top: 120%;
  right: 35%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 9;

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
