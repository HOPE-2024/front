import styled from "styled-components";
import Why from "../../images/why.svg";

export const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 45vw;
  height: 15vh;
  position: relative;
  bottom: 9vh;

  @media (max-width: 1200px) {
    width: 45vw;
    right: 3vw;
    bottom: 20vh;
  }

  @media (max-height: 500px) {
    height: 50vh;
  }

  @media (min-width: 1200px) {
    height: 30vh;
  }

  /* 화면의 세로 길이가 가로 길이보다 길어지는 경우에 대한 미디어 쿼리 */
  @media (orientation: portrait) {
    width: 65vw;
    bottom: 15vh;

    @media (max-width: 500px) {
      top: 47px;
      width: 300px;
      height: 500px;
    }

    @media (max-width: 400px) {
      top: 5px;
      width: 300px;
      height: 500px;
    }
  }
`;

// 말풍선
export const Balloon = styled.div`
  position: relative;
  width: 27vw;
  min-width: 350px;
  height: 25vh;
  bottom: 33.5vh;
  left: 12vw;
  padding: 5%;
  background: white;
  border-radius: 10px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  z-index: 50;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 6px 20px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 15px; // 삼각형 크기 조정
    border-color: transparent transparent transparent white; // 삼각형의 왼쪽 테두리만 보이게 설정
    right: -3%;
    bottom: 15%;
  }

  ul {
    font-size: 1.3em;
  }
`;

export const Icon = styled.div`
  background-image: url(${Why});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 57vh;
  left: 66vw;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    top: 52vh;
    left: 60vw;
  }

  @media (min-width: 1200px) {
    top: 42vh;
  }

  @media (orientation: portrait) {
    top: 44vh;
    left: 68vw;

    @media (min-height: 1000px) {
      top: 45vh;
    }

    @media (min-height: 1100px) {
      top: 34vh;
      left: 7vw;
    }
  }
`;
