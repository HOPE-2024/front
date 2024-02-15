import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SubContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  line-height: 20px;
  @media only screen and (max-width: 768px) {
    padding: 30px 30px 0px 30px;
  }

  .title {
    font-size: 1.5rem;
    color: var(--NAVY);
    font-weight: bold;
    margin-top: 20px;
  }
  .subTitle {
    font-size: 1rem;
    font-weight: 500;
  }
  &.radio {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 왼쪽 정렬 설정 */
  }
  .lastText {
    margin-top: 20px;
    line-height: 20px;
    color: #ff3e3e;
    font-size: 0.8rem;
    font-weight: 500;
    @media only screen and (max-width: 768px) {
      padding: 0px 25px 0px 25px;
    }
  }
  .btn {
    margin-top: 50px;
  }
`;

export const RadioBox = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;
`;

export const RadioContainer = styled.label`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const RadioBtn = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: var(--BLUE);
    border: 3px solid white;
    box-shadow: 0 0 0 1.6px var(--BLUE);
  }
`;
