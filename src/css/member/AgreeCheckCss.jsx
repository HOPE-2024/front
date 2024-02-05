import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";

export const Container = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-left: 5%;
  }
`;

export const HeaderContainer = styled.div`
  margin-top: 50px;
  padding-left: 10%;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

// 로고와 인삿말 묶음
export const FirstBox = styled.div`
  height: 150px;
  margin: 30px;
  padding-left: 15%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 1.875rem;
  }
`;

export const LogoSvg = styled(Logo)`
  width: 10rem;
  height: 80px;
`;

export const Title = styled.div`
  font-size: 27px;
  font-weight: bold;
  margin: 20px;
`;

// 약관 동의 체크 항목 나열
export const SecondBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding-left: 15%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const TextLabel = styled.div`
  flex: 4.5;
`;

// 약관 내용 자세히보기
export const ReadMore = styled.div`
  font-size: 25px;
  color: var(--NAVY);
  cursor: pointer;
  flex: 2;
`;

// 약관 동의 체크 박스
export const CheckInput = styled.input`
  appearance: none; // 브라우저의 기본적인 체크박스 스타일을 제거
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 10px;

  &:checked {
    border-color: transparent; //체크되었을 때 경계선을 투명하게 만듬
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e"); // 체크 표시
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--NAVY);
  }
`;

// 맨 하단
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;
