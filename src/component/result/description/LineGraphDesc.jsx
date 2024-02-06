import styled from "styled-components";

const Wrapper = styled.div`
  width: 40vw;
  height: 30vh;
  font-size: 24px;
  line-height: 1.5;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 1200px) {
    width: 60vw;
  }

  @media (max-width: 700px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const FontStyle = styled.span`
  font-size: 40px;
  color: #136cfb;
  text-shadow: 2.5px 2.5px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 700px) {
    font-size: 36px;
  }

  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

export const LineGraphDesc = ({
  Country,
  trend,
  max,
  min,
  yearOfMax,
  yearOfMin,
}) => {
  let trendStory;

  const CountryText = `${Country}`;

  // 최소값과 최대값
  const lifeExpectancyInfo = `의 수명은 ${yearOfMin}년에 ${min}살로 가장 짧았고, ${yearOfMax}년에 ${max}살로 가장 길었습니다.`;

  if (trend === 0) {
    // 증가
    trendStory = `즉, 시간의 흐름 속에서, 국가의 평균 수명이 점차 증가하는 추세를 볼 수 있습니다. 이는 과학 기술의 발전, 의료 서비스의 개선, 그리고 생활 환경의 질적 향상 같은 여러 긍정적인 변화들에 의한 결과입니다. 건강한 생활 습관과 공중 보건의 발전이 어우러져, 국가의 수명을 연장시키고 있습니다.`;
  } else {
    // 감소
    trendStory = `때로는 역경이 우리 앞을 가로막기도 합니다. 해당 국가에서 관찰된 평균 수명의 감소 추세는 다양한 도전들, 예를 들자면 환경 오염, 경제적 불안정, 그리고 주요 질병의 유행 등을 반영합니다. 이는 우리 사회와 환경에 대한 깊은 성찰과, 건강을 지키기 위한 집단적 노력의 필요성을 일깨웁니다.`;
  }

  return (
    <Wrapper>
      <FontStyle>{CountryText}</FontStyle>
      {lifeExpectancyInfo}
      <br />
      {trendStory}
    </Wrapper>
  );
};
