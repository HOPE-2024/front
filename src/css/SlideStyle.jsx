import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: yellow;
`;

export const Content = styled.div`
  display: flex;
  width: calc(100% * ${(props) => props.$numberOfImages});
  height: 400px;
  transition: transform 0.5s ease-in-out;

  img {
    width: calc(100% / ${(props) => props.$numberOfImages});
    height: 100%;
    flex-shrink: 0;
    box-sizing: border-box; // padding과 border를 전체 크기에 포함
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
  z-index: 2;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  font-weight: bold;
  position: absolute;
`;

// 첫 번째 버튼(예: 왼쪽 버튼)에 적용할 추가 스타일
export const PrevButton = styled(Button)`
  left: -25px; // 화면의 중앙에서 왼쪽으로 조금 이동
`;

// 두 번째 버튼(예: 오른쪽 버튼)에 적용할 추가 스타일
export const NextButton = styled(Button)`
  right: -25px; // 화면의 중앙에서 오른쪽으로 조금 이동
`;

export const Navigation = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  display: flex;
  gap: 5px;

  button {
    padding: 0;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5); // 기본 색상
  }

  .current {
    background-color: rgba(255, 255, 255, 0.9); // 활성화된 버튼 색상
  }
`;
