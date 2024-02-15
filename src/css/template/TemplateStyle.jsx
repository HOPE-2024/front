import styled from "styled-components";
import backgroundSVG from "../../images/backGround.svg";

export const MainCss = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: flex-start; // 컨텐츠 시작 부분부터 순서대로 배치
  position: relative;
  margin: 0 auto;

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
    background-attachment: fixed; // 배경 이미지를 스크롤 시에도 고정된 위치에 있도록 설정
    opacity: 0.3;
    /* filter: blur(5px); */
    z-index: -1; // 배경 이미지가 다른 요소들을 가리지 않게 설정
  }
`;

export const BackGroundHeader = styled.div`
  background-color: white;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0);
  }
`;

export const TempHeader = styled.div`
  width: 90vw;
`;

export const TempContent = styled.div`
  flex: 1; // 중요
  overflow-x: hidden;
`;
