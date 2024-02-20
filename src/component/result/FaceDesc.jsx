import React from "react";
import styled from "styled-components";
import { FlexColumn } from "../../css/common/Boxs";

const Title = styled.p`
  font-size: 2em;
  color: #023b96;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 1.5em;
  width: 70vw;
  line-height: 1.5;
  font-weight: bold;
`;

const StyledSpan = styled.span`
  font-weight: bolder;
  color: #136cfb;
  font-size: 1.2em;
`;

export const FaceDesc = ({ model }) => {
  const getDescription = () => {
    switch (model) {
      case 0:
        return (
          <>
            <StyledSpan>머신러닝</StyledSpan> 모델을 사용하여 얼굴을
            검출했습니다. 해당 모델은 수천 개의 얼굴 이미지를 사용하여 학습을
            진행했습니다. 사진이나 비디오에서 얼굴을 신속하게 찾아낼 수 있으며,
            빠른 처리 속도를 자랑합니다. 하지만, 조명 변화나 얼굴의 방향에 따라
            정확도가 영향을 받을 수 있습니다. 즉, 일상적인 사용에 적합하며, 빠른
            결과가 필요한 상황에 유용한 모델입니다.
          </>
        );
      case 1:
        return (
          <>
            <StyledSpan>딥러닝</StyledSpan> 모델을 사용하여 얼굴을 검출했습니다.
            해당 모델은 수십만 개의 얼굴 이미지를 사용하여 더 깊이 있는 학습을
            진행했습니다. 이로 인해, 다양한 조명과 얼굴 방향에서도 얼굴을
            정밀하게 검출할 수 있으며, 얼굴의 세부적인 특징을 더 잘 인식할 수
            있습니다. 높은 정확도를 제공하지만, 분석에 더 많은 시간이
            필요합니다. 즉, 고도의 정확성이 요구되는 상황에 특히 적합합니다.
          </>
        );
      default:
        return "알 수 없는 모델입니다. 올바른 모델 번호를 입력해주세요.";
    }
  };

  return (
    <>
      <FlexColumn>
        <Title>당신의 얼굴을 검출한 인공지능에 대한 설명입니다.</Title>
        <Content>{getDescription()}</Content>
      </FlexColumn>
    </>
  );
};
