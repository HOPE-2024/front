import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .title {
    width: 28%;
    font-size: 15px;
  }
  .animated-text {
    width: 70%;
    height: 30px;
    overflow: hidden;
  }

  .line {
    font-size: 15px;
    font-weight: bold;
    line-height: 30px;
  }

  .line:first-child {
    animation: anim 30s infinite;
  }

  @keyframes anim {
    0% {
      margin-top: 0;
    }
    10% {
      margin-top: -30px;
    }
    20% {
      margin-top: -60px;
    }
    30% {
      margin-top: -90px;
    }
    40% {
      margin-top: -120px;
    }
    50% {
      margin-top: -150px;
    }
    60% {
      margin-top: -180px;
    }
    70% {
      margin-top: -210px;
    }
    80% {
      margin-top: -240px;
    }
    90% {
      margin-top: -270px;
    }
    100% {
      margin-top: 0;
    }
  }
`;

export const Ranking = ({ data }) => {
  return (
    <>
      <Container>
        <div className="title">인기 검색어</div>
        <div className="animated-text">
          {data.map((item, index) => (
            <div key={item.key} className="line">{`${index + 1}. ${
              item.key
            }`}</div>
          ))}
        </div>
      </Container>
    </>
  );
};
