import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes 정의
const fadeIn = keyframes`
  0% {
    background: transparent;
  }
  100% {
    background: rgba(0, 0, 0, .7);
  }
`;

const scaleUp = keyframes`
  0% {
    transform: scale(.8) translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

const scaleBack = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }
`;

const quickScaleDown = keyframes`
  0% {
    transform: scale(1);
  }
  99.9% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const fadeOut = keyframes`
  0% {
    background: rgba(0, 0, 0, .7);
  }
  100% {
    background: transparent;
  }
`;

const scaleDown = keyframes`
  0% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  100% {
    transform: scale(.8) translateY(1000px);
    opacity: 0;
  }
`;

const scaleForward = keyframes`
  0% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled Components 정의
const Content = styled.div`
  h1 {
    font-size: 1.5em;
    margin-bottom: 1em;
  }

  .buttons {
    margin-top: 1em;
    display: flex;
    flex-wrap: wrap;

    .button {
      margin-right: 1em;
      margin-bottom: 1em;
      padding: 0.5em 1em;
      text-decoration: none;
      background-color: #007bff;
      color: #fff;
      border: 1px solid #007bff;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0s 0.3s;

  &.modal-active {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease, visibility 0s 0s;
  }

  &.out {
    animation: ${quickScaleDown} 0s 0.5s linear forwards;
  }
`;

const ModalBackground = styled.div`
  background: transparent;
  animation: ${fadeIn} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  &.out {
    animation: ${fadeOut} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2em;
  border-radius: 4px;
  text-align: center;
  opacity: 0;

  &.out {
    animation: ${scaleForward} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }

  h2 {
    margin-bottom: 1em;
  }
`;

export const EffectModal = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleButtonClick = (type) => {
    setModalType(type);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
    setModalType("");
  };

  return (
    <>
      <Content>
        <h1>Modal Animations</h1>
        <div className="buttons">
          <a
            href="#none"
            onClick={() => handleButtonClick("one")}
            className="button"
          >
            Unfolding
          </a>
          <a
            href="#none"
            onClick={() => handleButtonClick("two")}
            className="button"
          >
            Revealing
          </a>
          <a
            href="#none"
            onClick={() => handleButtonClick("three")}
            className="button"
          >
            Uncovering
          </a>
          <a
            href="#none"
            onClick={() => handleButtonClick("four")}
            className="button"
          >
            Blow Up
          </a>
          <br />
          <a
            href="#none"
            onClick={() => handleButtonClick("five")}
            className="button"
          >
            Meep Meep
          </a>
          <a
            href="#none"
            onClick={() => handleButtonClick("six")}
            className="button"
          >
            Bond
          </a>
        </div>
      </Content>

      <ModalContainer
        className={`modal-container ${modalActive ? "modal-active" : ""} ${
          modalType === "two" || modalType === "three" || modalType === "four"
            ? modalType
            : ""
        } ${modalType === "out" ? "out" : ""}`}
        onClick={closeModal}
      >
        <ModalBackground className={modalType === "out" ? "out" : ""}>
          <ModalContent className={`modal ${modalType === "out" ? "out" : ""}`}>
            <h2>I'm a Modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis, similique!
            </p>
          </ModalContent>
        </ModalBackground>
      </ModalContainer>
    </>
  );
};
