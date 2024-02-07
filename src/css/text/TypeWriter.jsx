import Typist from "react-typist";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.width || "40vw"};
  height: ${(props) => props.height || "30vh"};
  position: relative;
  font-size: ${(props) => props.font || "35px"};
  line-height: ${(props) => props.lineHeight || "60px"};

  @media (max-width: 1200px) {
    width: ${(props) => props.mWidth || "30vw"};
    height: ${(props) => props.mHeight || "25vh"};
    font-size: 28px;
    line-height: 40px;
  }
`;

const Normal = styled.span`
  color: black;
`;

const Special = styled.span`
  font-weight: bold;
  color: #3c84f8;
  font-size: 50px;
  text-shadow: 2.5px 2.5px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1200px) {
    font-size: 40px;
  }
`;

export const TypeWriter = ({
  beforeText = "",
  emphasizedText = "",
  afterText = "",
  ...rest // 위 선언된 props 이외의 모든 props를 호출, Wrapper 에 props 전달 가능
}) => {
  return (
    <>
      {/* 전체 타이핑 딜레이 */}
      <Typist cursor={{ show: false }} avgTypingDelay={20}>
        <Wrapper {...rest}>
          <Normal> {beforeText} </Normal>
          {/* 문자열 사이의 딜레이 */}
          <Typist.Delay ms={100} />
          <Special>{emphasizedText}</Special>
          <Typist.Delay ms={100} />
          <Normal> {afterText} </Normal>
        </Wrapper>
      </Typist>
    </>
  );
};
