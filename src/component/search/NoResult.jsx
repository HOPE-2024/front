import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  height: 100%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const ContentsBox = styled.div`
  margin-bottom: 5%;
  box-shadow: 1px 2px 5px 2px #d5d5d5;
  background-color: white;
  display: flex;
  justify-content: center;

  flex-direction: column;
  width: 100%;

  &.box1 {
    padding: 7% 0 8% 30%;
  }

  &.box2 {
    padding: 4%;
    align-items: center;
  }

  .Box {
  }

  .Box2 {
  }

  @media (max-width: 768px) {
    &.box1 {
      padding: 10% 0 10% 10%;
    }
  }

  span {
    color: red;
  }
  .text1 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 3%;
  }

  .text2 {
    line-height: 1.6em;
    font-size: 14px;
    color: #636363;
  }

  .text3 {
    margin: 3% 0;
    font-weight: bold;
    font-size: 1.2em;
  }

  .btn4 {
    margin-left: -5px;
    width: 184px;
    border: none;
    background-color: white; /* 배경 투명하게 설정 */
    cursor: pointer;
    color: gray;
    &:hover {
      color: #636363;
      font-weight: bold;
    }
  }
`;

export const ContentsSubBox = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
`;

export const BtnBox = styled.div`
  width: 100%;

  &.Box2 {
    display: flex;
    flex-direction: row;
  }
`;

export const ButtonBox = styled.button`
  width: 50%;
  height: 130px;
  border: none;
  background-color: white; /* 배경 투명하게 설정 */
  box-shadow: 1px 2px 5px 1px #d5d5d5;
  &:hover {
    box-shadow: 1px 2px 5px 1px #e3e3e3;
  }
  &:active {
    box-shadow: 1px 0.5px 5px 0.5px gray;
  }
  cursor: pointer;
  &.btn1 {
    width: 100%;
    margin-bottom: 2%;
  }
  &.btn2 {
    margin-right: 1%;
  }
  &.btn3 {
    margin-left: 1%;
  }

  .text4 {
    width: 100%;
    height: 100%;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: var(--NAVY);
      font-weight: bold;
      font-size: 1.3em;
    }
  }
`;
export const NoResult = ({ keyword }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <SubContainer>
          <ContentsBox className="box1">
            <p className="text1">
              <span>'{keyword}'</span>에 대한 검색 결과가 없습니다.
            </p>
            <p className="text2">
              단어의 철자가 정확한 지 확인해주세요.
              <br />
              다른 검색어로 검색해보세요.
              <br />
              필터를 올바르게 설정했는지 확인해주세요.
            </p>
            <button className="btn4" onClick={() => navigate("/Support/1")}>
              <br />
              <br />
              원하는 의약품 정보 요청하기
            </button>
          </ContentsBox>
          <ContentsBox className="box2">
            <p className="text3">
              찾으시는 검색 결과가 없다면 이런 기능은 어떠신가요?
            </p>
            <ContentsSubBox>
              <BtnBox className="Box1">
                <ButtonBox className="btn1">
                  <p className="text4">가장 많이 검색된 의약품 순위</p>
                </ButtonBox>
              </BtnBox>
              <BtnBox className="Box2">
                <ButtonBox
                  className="btn2"
                  onClick={() => navigate("/country")}
                >
                  <p className="text4">나의 평균 수명 예측</p>
                </ButtonBox>
                <ButtonBox
                  className="btn3"
                  onClick={() => navigate("/chatlist")}
                >
                  <p className="text4">고민이 있는 사람들과 대화하기</p>
                </ButtonBox>
              </BtnBox>
            </ContentsSubBox>
          </ContentsBox>
        </SubContainer>
      </Container>
    </>
  );
};
