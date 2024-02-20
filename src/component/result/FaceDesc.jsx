import React from "react";
import {
  ResultCon,
  MiddleText,
  TextConTwo,
  ExplaneCon,
} from "../../css/result/ResultCss";

export const FaceDesc = ({ model }) => {
  const getDescription = () => {
    switch (model) {
      case 0:
        return "OpenCV 머신러닝 얼굴 검출기는 Haar Cascade 분류기를 사용하여 이미지나 비디오 스트림에서 얼굴을 검출합니다. 이 방법은 다양한 크기의 얼굴을 신속하게 찾아낼 수 있지만, 조명이나 얼굴 각도에 따라 정확도가 달라질 수 있습니다.";
      case 1:
        return "딥러닝 OpenCV 얼굴 검출기는 DNN(Deep Neural Network) 모듈을 사용하여 얼굴을 검출합니다. 이 방법은 Haar Cascade 방법보다 더 정확하고 다양한 조건에서 얼굴을 잘 인식할 수 있지만, 처리 속도가 느릴 수 있습니다.";
      default:
        return "알 수 없는 모델입니다. 올바른 모델 번호를 입력해주세요.";
    }
  };

  return (
    <ResultCon>
      <TextConTwo>
        <MiddleText>얼굴 검출기 설명</MiddleText>
        <ExplaneCon>{getDescription()}</ExplaneCon>
      </TextConTwo>
    </ResultCon>
  );
};
