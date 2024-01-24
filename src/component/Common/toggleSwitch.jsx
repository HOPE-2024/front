import styled from "styled-components";
import React, { useState } from "react";

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ToggleCheckBoxWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2rem;
  cursor: pointer;
`;

export const ToggleCheckBox = styled.input`
  /* position: relative; */
  z-index: 1;
  width: 5rem;
  height: 2rem;
  background: var(--SKY);
  background: ${(props) => props.leftBgColor ?? "var(--BLUE)"};
  border-radius: 2em;

  &:before {
    position: absolute;
    content: "${(props) => props.left ?? "Yes"}";
    padding-left: 1em;
    width: 5rem;
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${(props) => props.leftColor ?? "var(--BLACK)"};
    font-weight: bold;
    font-size: small;
    transition: all 0.2s ease-in-out;
  }

  &:after {
    position: relative;
    content: "";
    display: block;
    width: 1.6em;
    height: 1.6em;
    top: calc((2rem - 1.6em) / 2);
    left: calc(5rem - 1.9em);
    border-radius: 50%;
    background: ${(props) => props.circleColor ?? "var(--BLUE)"};
    transition: all 0.2s ease-in-out;
  }

  &:checked {
    background: ${(props) => props.rightBgColor ?? "var(--BLACK)"};
    transition: all 0.2s ease-in-out;

    &:before {
      position: absolute;
      padding-right: 1em;
      content: "${(props) => props.right ?? "No"}";
      align-items: center;
      justify-content: flex-end;
      color: ${(props) => props.rightColor ?? "var(--SKY)"};
    }

    &:after {
      content: "";
      z-index: 2;
      top: calc((2rem - 1.6em) / 2);
      left: calc((2rem - 1.6em) / 2);
      width: 1.6em;
      height: 1.6em;
      display: block;
      border-radius: 50%;
      background: ${(props) => props.circleColor ?? "var(--WHITE)"};
      position: relative;
    }
  }
`;

export const ComponentWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
`;
export const ToggleSwitch = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--SKY);
  background: ${(props) => props.leftBgColor ?? "var(--BLUE)"};
  border-radius: 2em;
  transition: background 0.2s ease-in-out;

  &:before {
    content: "${(props) =>
      props.checked ? props.right ?? "No" : props.left ?? "Yes"}";
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 1em;
    color: ${(props) =>
      props.checked
        ? props.rightColor ?? "var(--SKY)"
        : props.leftColor ?? "var(--BLACK)"};
    font-weight: bold;
    font-size: small;
    transition: all 0.2s ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 1.6em;
    height: 1.6em;
    top: calc((2rem - 1.6em) / 2);
    left: calc(5rem - 1.9em);
    border-radius: 50%;
    background: ${(props) => props.circleColor ?? "var(--BLUE)"};
    transition: all 0.2s ease-in-out;
  }
`;

export const ChatToggle = ({
  left,
  right,
  leftColor,
  rightColor,
  leftBgColor,
  rightBgColor,
  circleColor,
  setChecked,
}) => {
  const [checked, setCheckedState] = useState(false);

  const handleToggleChange = () => {
    setCheckedState(!checked);
    setChecked && setChecked(!checked);
  };

  return (
    <>
      <Wrapper>
        <ToggleCheckBoxWrapper>
          <ToggleCheckBox
            left={left}
            right={right}
            leftColor={leftColor}
            rightColor={rightColor}
            leftBgColor={leftBgColor}
            rightBgColor={rightBgColor}
            circleColor={circleColor}
            onChange={handleToggleChange}
            type="checkbox"
            checked={checked}
          />
          <ToggleSwitch
            left={left}
            right={right}
            leftColor={leftColor}
            rightColor={rightColor}
            leftBgColor={leftBgColor}
            rightBgColor={rightBgColor}
            circleColor={circleColor}
            checked={checked}
          />
        </ToggleCheckBoxWrapper>
      </Wrapper>
    </>
  );
};
