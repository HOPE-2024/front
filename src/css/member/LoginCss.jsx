import styled from "styled-components";
import { ReactComponent as DrugSvg } from "../../images/member/drug.svg";
import KakaoLogo from "../../images/member/kakao_logo.png";
import NaverLogo from "../../images/member/naver_logo.png";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const StyledSvg = styled(DrugSvg)`
  width: 100px;
  height: 70px;
  cursor: pointer;
`;

export const Title = styled.div`
  width: 50vw;
  margin: 20px;
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--NAVY);
  text-align: center;
`;

export const Input = styled.input`
  width: 350px;
  height: auto;
  line-height: normal;
  padding: 1em;
  border: 1px solid var(--NAVY);
  border-radius: 18px;
  outline-style: none;
`;

export const FindLink = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0 5px;

  &:hover {
    color: var(--NAVY);
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;

  &.item1 {
    margin: 10px;
  }
  &.item2 {
    position: relative;
    margin: 15px;
    left: 6%; //item2가 원래 있어야 할 위치에서 왼쪽으로 10%만큼 떨어진 곳에 위치
    @media screen and (max-width: 768px) {
      left: 15%;
    }
  }
  &.item3 {
    margin: 20px;
    font-size: 0.8rem;
    font-weight: bold;
  }
  &.item4 {
    font-size: 0.8rem;
    font-weight: bold;
  }
  &.item5 {
    margin: 10px;
  }
`;

export const KakaoStyled = styled.img.attrs({
  src: KakaoLogo,
})`
  width: 80px;
  height: 40px;
  margin-right: 10px;
`;

export const NaverStyled = styled.img.attrs({
  src: NaverLogo,
})`
  width: 80px;
  height: 38px;
  margin-right: 10px;
`;
