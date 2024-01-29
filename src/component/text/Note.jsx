import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  width: 50vw;
  height: 50vh;
`;

// 노트북 배경
const StyledNotebookPage = styled.div`
  padding-left: 5vw;
  background-color: #fff;
  background-image: linear-gradient(
    rgba(33, 150, 243, 0.27) 0.05em,
    transparent 0.05em
  );
  background-size: 100% 2em;
  position: relative;
  min-height: 500px;
  box-shadow: 0 9px 20px rgba(0, 0, 0, 0.1);
  &:after {
    content: "";
    position: absolute;
    left: 10%;
    top: 0;
    width: 1px;
    height: 100%;
    background: #ef5350;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 50vh;
  background: none;
  border: none;
  color: #111;
  font-size: 24px;
  line-height: 1.33;
`;

// Custom Hook : 타자기 효과를 위해 구현
// setInterval : 자바 스크립트 내장 함수로, 지정된 시간 간격마다 코드를 반복 실행
// React 에서는 setInterval이 잘 작동하지 않는다.

/* 왜냐하면 주기적으로 상태를 업데이트하기 위해서 일반적으로 setInterval는 useEffect 와 함께 사용한다.
useEffect 의 의존성 배열에 들어있는 값에 변화가 일어날때, 렌더링이 발생한다. 즉 useEffect 의 props와 state는 언제든지 변화가 가능하다.
그러나 setInterval 은 clearInterval 를 사용하지 않는 한 그 값을 변화시킬 수 없다. 즉, 처음 useEffect가 실행되었을 때의 바로 그 값만 참조가 되는 것이다. 이 때문에 setInterval이 잘 작동하지 않는 것이다.
*/

// 커스텀 훅을 사용하면 setInterval 과 같은 타이머 함수를 사용할때 커스텀 훅 내부에서 상태 변수를 사용하고, 업데이트 가능하기 때문에 상태를 적절하게 관리 가능하다.
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // 1. 콜백 함수 저장
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // 2. 지정된 시간 간격으로 콜백 함수 실행
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id); // 반복 실행 중지
    }
  }, [delay]);
}

export const Note = () => {
  const [landingTitle, setLandingTitle] = useState("");
  const completedTitle = `
  안녕하세요.
  제 이름은 유동재입니다.
  당신의 이름은 무엇입니까?
  이 쓰레기 같은 자식아, 죽어라.
  다음에 봐요.`;

  useInterval(() => {
    if (landingTitle.length >= completedTitle.length) {
      return;
    }
    setLandingTitle(completedTitle.substring(0, landingTitle.length + 1));
  }, 150);

  return (
    <StyledContent>
      <StyledNotebookPage>
        <StyledTextArea value={landingTitle} readOnly />
      </StyledNotebookPage>
    </StyledContent>
  );
};
