import styled from "styled-components";
import backgroundSVG from "../../images/backGround.svg";

export const MainCss = styled.div`
  display: flex;
  flex-direction: column; // flex 컨테이너를 세로 방향으로 정렬
  justify-content: space-between; // 컨텐츠를 상하에 균등하게 배치
  min-height: 100vh; // 최소 높이를 뷰포트의 100%로 설정
  position: relative; // Footer를 하단에 고정하기 위해 relative 설정
  margin: 0 auto;
  padding-bottom: 50px; // Footer의 높이만큼 padding-bottom 설정, Footer 높이에 맞게 조정 필요

  // ::before : 가상 요소로, 선택한 요소의 내부에 콘텐츠를 추가할때 사용하는 CSS의 강력한 기능
  // 복잡한 레이아웃을 생성하거나, 추가적인 스타일을 적용하는데 유용
  &::before {
    content: ""; // content 속성은 필수이며, 이를 통해 텍스트나 이미지 삽입 가능
    // 여기선 "" 로 설정하여, 빈 콘텐츠를 추가

    // 배경 이미지를 배치하고, 전체 컨테이너를 채우도록 설정
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-image: url(${backgroundSVG});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.3;
    /* filter: blur(5px); */
    z-index: -1; // 배경 이미지가 다른 요소들을 가리지 않게 설정
  }
`;

export const BackGroundHeader = styled.div`
  background-color: white;
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0);
  }
`;

export const TempHeader = styled.div`
  width: 60vw;
`;

export const TempContent = styled.div`
  height: 100vh;
`;

export const TempFooter = styled.div`
  width: 100vw;
  height: 50px; // Footer의 높이, 실제 높이에 맞게 조정 필요
  position: absolute; // Footer를 하단에 고정
  bottom: 0;
  z-index: 9413;
  background-color: rgba(0, 0, 0, 0.5); // Footer 배경색, 필요에 따라 조정
`;
