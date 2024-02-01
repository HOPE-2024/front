import styled from "styled-components";

export const CoverWrapper = styled.div`
  position: relative;
  bottom: 2.5vh;
`;

export const CoverImage = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  width: 20vw;
  height: 20vw;
  border-radius: 20px;
  margin: ${(props) => props.margin || "30px"};
  position: relative; /* 가상 요소를 위한 포지션 설정 */

  @media (max-width: 1200px) {
    width: 40vw;
    height: 40vw;
  }

  &:hover {
    transform: scale(1.05);
    background-color: black;

    &::before {
      content: "${(props) => props.text}";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); /* 텍스트 중앙 정렬 */
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4); /* 검은색 반투명 배경 */
      color: white;
      font-size: 36px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      cursor: pointer;
    }
  }
`;

export const TextBox = styled.div`
  text-align: center;
  width: 35vw;
  height: ${(props) => props.height || "25vh"};
  border-radius: 20px;
  letter-spacing: 2px;
  line-height: 1.4;
  color: rgb(140, 140, 140);
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 1200px) {
    width: 65vw;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const Text = styled.span`
  font-size: 36px;
  line-height: 1;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: #3c84f8;
`;

export const Line = styled.span`
  color: rgb(140, 140, 140);
  white-space: nowrap;
`;
