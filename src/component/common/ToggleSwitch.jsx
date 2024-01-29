import { useState } from "react";
import styled from "styled-components";

export const ToggleContainer = styled.div`
  position: fixed;
  display: flex;
  top: 12vh;
  cursor: pointer;

  > .toggle-container {
    width: 13vh;
    height: 3.8vh;
    border-radius: 30px;
    border: 1px solid var(--BLACK);
    background-color: ${(props) => props.backgroundColor || "var(--SKY)"};
  }
  > .toggle--checked {
    background-color: ${(props) => props.backgroundColor || "var(--SKY)"};
    transition: 0.5s;
  }
  > .toggle-circle {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2vh;
    top: 0.4vh;
    left: 3px;
    width: 6vh;
    height: 3vh;
    border-radius: 30px;
    background-color: ${(props) => props.backgroundColor || "var(--WHITE)"};
    transition: 0.5s;
  }
  > .toggle--checked {
    left: 6.6vh;
    transition: 0.5s;
  }
  > .toggle-circle-text {
  }
`;

export const Desc = styled.div`
  text-align: center;
  margin: 20px;
`;
