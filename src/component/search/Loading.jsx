import styled from "styled-components";
import LoadingGif from "../../images/Loading.gif";
const Background = styled.div`
  margin: 0px auto;
  width: 768px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const LoadingImg = styled.img`
  margin-top: 20px;
  width: 50px;
  height: 50px;
`;
const LoadingText = styled.p`
  font-size: 20px;
`;
const Loading = ({ text }) => {
  return (
    <Background>
      <LoadingImg src={LoadingGif} alt="로딩" />
      <br />
      <LoadingText>{text}</LoadingText>
    </Background>
  );
};
export default Loading;
