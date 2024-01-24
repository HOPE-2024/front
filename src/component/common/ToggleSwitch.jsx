import { useState } from "react";
import styled from "styled-components";

export const ToggleContainer = styled.div`
  position: relative;
  margin-top: 1rem;
  left: 46%;
  cursor: pointer;

  > .toggle-container {
    width: 88px;
    height: 30px;
    border-radius: 30px;
    background-color: ${(props) => props.backgroundColor || "var(--SKY)"};
  }
  > .toggle--checked {
    background-color: ${(props) => props.backgroundColor || "var(--NAVY)"};
    transition: 0.5s;
  }
  > .toggle-circle {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    top: 2px;
    left: 3px;
    width: 40px;
    height: 25px;
    border-radius: 30px;
    background-color: ${(props) => props.backgroundColor || "var(--WHITE)"};
    transition: 0.5s;
  }
  > .toggle--checked {
    left: 45px;
    transition: 0.5s;
  }
  > .toggle-circle-text {
    font-size: 0.5rem;
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
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}>
          <span className="toggle-circle-text">{isOn ? "지역" : "증상"}</span>
        </div>
      </ToggleContainer>
    </>
  );
};
