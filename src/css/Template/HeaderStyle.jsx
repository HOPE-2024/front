import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";

export const Top = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div``;

export const Right = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: end;
  padding-right: 10px;
`;

export const StyledLogo = styled(Logo)`
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: relative;
  top: 15px;
  display: flex;
  justify-content: end;
  font-size: 1rem;
  height: 100%;
  list-style: none;
  width: 500px;

  li {
    margin: 0 10px;
    white-space: nowrap; // 텍스트 한줄로 표시
    overflow: hidden;
    text-overflow: ellipsis; // 텍스트가 넘칠 때 ... 로 표시
    cursor: pointer;
  }

  span:hover {
    font-weight: bold;
    text-decoration: underline double blue;
  }
`;

export const CityItem = styled.div`
  line-height: 1.2;
  background-image: linear-gradient(transparent 70%, #3c84f8 40%);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.8s;
  color: var(--BLACK);
  cursor: pointer;

  &:hover {
    background-size: 100% 100%;
  }

  &.clicked {
    line-height: 1.2;
    background-size: 100% 100%;
  }
`;
