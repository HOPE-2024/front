import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  width: calc(100% * ${(props) => props.$numberOfImages});
  height: 400px;
  transition: transform 0.5s ease-in-out;
`;

export const SlideListContent = styled.div`
  width: 100vw;
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-height: 800px) {
    height: 80vh;
  }

  @media screen and (max-height: 700px) {
    height: 75vh;
  }

  @media screen and (max-height: 600px) {
    height: 70vh;
  }

  @media screen and (max-height: 500px) {
    height: 65vh;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
`;

export const PrevButton = styled.button`
  width: 130px;
  height: 20vh;
  font-weight: bold;
  position: absolute;
  left: -48vw;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 500%;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: right;
  z-index: 1;

  @media screen and (min-width: 1200px) {
    left: -43vw;
  }

  @media screen and (min-width: 1500px) {
    left: -38vw;
  }

  @media screen and (min-width: 1800px) {
    left: -33vw;
  }

  &:hover {
    transform: scale(1.1);
    color: #3c84f8;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 700px) {
    width: 50px;
  }

  @media screen and (max-width: 700px) {
    width: 50px;
    color: rgba(0, 0, 0, 0);

    &:hover {
      color: rgba(0, 0, 0, 0);
    }
  }

  @media screen and (max-width: 300px) {
    width: 25px;
  }
`;

export const NextButton = styled.button`
  width: 130px;
  height: 20vh;
  font-weight: bold;
  position: absolute;
  right: -48vw;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 500%;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: left;

  @media screen and (min-width: 1200px) {
    right: -43vw;
  }

  @media screen and (min-width: 1500px) {
    right: -38vw;
  }

  @media screen and (min-width: 1800px) {
    right: -33vw;
  }

  &:hover {
    transform: scale(1.1);
    color: #3c84f8;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 700px) {
    width: 50px;
    color: rgba(0, 0, 0, 0);

    &:hover {
      color: rgba(0, 0, 0, 0);
    }
  }

  @media screen and (max-width: 300px) {
    width: 25px;
  }
`;

export const NavBox = styled.div`
  position: absolute;
  top: 80%;
  width: 100%;
  max-width: 500px;
  height: 50px;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  /* box-shadow: 4px 5px 7px 2px rgba(0, 0, 0, 0.2); */

  // 가로 가운데 정렬
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-height: 800px) {
    top: 70%;
  }

  @media screen and (max-height: 600px) {
    top: 60%;
  }

  @media screen and (max-height: 400px) {
    top: 50%;
  }

  @media screen and (max-height: 200px) {
    top: 40%;
  }
`;

export const Navigation = styled.nav`
  bottom: 1rem;
  display: flex;
  gap: 10px;

  button {
    padding: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: none;
    box-shadow: 2px 4px 6px 1px rgba(0, 0, 0, 0.095);
    background-color: white; // 기본 색상

    &:hover {
      transform: scale(1.4);
    }
  }

  .current {
    background-color: #136cfb; // 활성화된 버튼 색상
    box-shadow: none;
    width: 1.15rem;
    height: 1.15rem;
  }
`;
