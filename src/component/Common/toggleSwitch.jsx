import { useState } from "react";
import styled from "styled-components";

export const ToggleContainer = styled.div`
  position: relative;
  margin-top: 1rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 52px;
    height: 26px;
    border-radius: 30px;
    background-color: var(--SKY);
  }
  > .toggle--checked {
    background-color: var(--BLUE);
    transition: 0.5s;
  }
  > .toggle-circle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: var(--WHITE);
    transition: 0.5s;
  }
  > .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;

export const Desc = styled.div`
  text-align: center;
  margin: 20px;
`;

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div
          className={`toggle-container ${isOn ? "toggle--checked" : null}`}
        />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
      </ToggleContainer>
    </>
  );
};
