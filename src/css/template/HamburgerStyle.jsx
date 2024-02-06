import styled from "styled-components";
import Pill from "../../images/pill.svg";
import LogoH from "../../images/H.svg";

// <nav> 태그 : 다른 페이지 / 현재 페이지의 다른 부분과 연결되는 내비게이션 링크들의 집합을 정의, 일반적으로 메뉴, 목차, 인덱스 등에 사용
// 가시적, 명시적인 의미가 큰 태그로, <div> 태그를 대체
// <nav> 태그로 메뉴를 만들 때는 일반적으로 <ul>, <li> 태그를 사용, <li> 태그 안에는 <a> 태그로 링크를 만들어두는 것이 기본
export const All = styled.nav`
  order: 1; // flex 순서
  position: relative;
  right: 18vw;
  top: 2vh;

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-height: 700px) {
    top: 3vh;
  }

  @media (max-height: 500px) {
    top: 4vh;
  }
`;

export const HamburgerLogo = styled.div`
  background-image: url(${LogoH});
  background-size: cover;
  background-position: left;
  width: 40px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  right: 20px;
  position: relative;
  top: 7px;
`;

export const Button = styled.button`
  background-image: url(${Pill});
  background-size: cover;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 50px;
  border: none;
  z-index: 501;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Items = styled.ul`
  background-color: rgba(255, 255, 255, 0.75);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 110vh;
  width: 45vw;
  padding: 100%;
  position: absolute;
  top: -5vw;
  left: -50vw;
  z-index: 494;
  transition: transform 0.3s ease-in-out;
  box-shadow: 5px 0 10px rgba(255, 255, 255, 0.5), -5px 0 10px black;

  @media (max-width: 400px) {
    top: -16vw;
  }
`;

export const Item = styled.li`
  padding: 1rem 0;
  font-size: 1.3rem;
  position: relative;
  bottom: 50px;
  left: 30px;

  // 서서히 사라지게 애니메이션 효과 설정
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
  white-space: nowrap;
  color: #023b96;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    font-size: 1.25rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 80%;
  margin: 0;
  padding: 8px;
  padding-left: 10px;
  border-radius: 10px;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Content = styled.a`
  text-decoration: none;
  &:hover {
    color: #3c84f8;
    font-weight: bold;
  }
`;
