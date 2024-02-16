import styled from "styled-components";
import LoadingImage from "../../images/EarthLoading.webp";
import { FlexColumn } from "./Boxs";
import { useEffect, useState } from "react";

const Wrapper = styled(FlexColumn)`
  position: relative;
  top: ${(props) => props.top || "0px"};
`;

const Earth = styled.div`
  width: 20vw;
  height: 20vh;
  background-image: url(${LoadingImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LoadingText = styled.div`
  font-size: 24px;
  font-family: Arial, sans-serif;
  color: white;
  font-weight: bolder;
  position: absolute;
`;

const Dots = styled.span`
  color: white;
  font-weight: bolder;
`;

const LoadingTextAnimation = () => {
  const fullText = "Now Loading";
  const [displayedText, setDisplayedText] = useState("");
  const [dots, setDots] = useState("");

  useEffect(() => {
    const textInterval = setInterval(() => {
      setDisplayedText((currentText) => {
        if (currentText.length < fullText.length) {
          return fullText.substring(0, currentText.length + 1);
        }
        clearInterval(textInterval);
        return currentText;
      });
    }, 150); // 글자가 나타나는 속도 조절

    const dotsInterval = setInterval(() => {
      setDots((currentDots) =>
        currentDots.length < 3 ? currentDots + "." : ""
      );
    }, 500); // 점들이 나타나는 속도 조절

    return () => {
      clearInterval(textInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <LoadingText>
      {displayedText}
      <Dots>{dots}</Dots>
    </LoadingText>
  );
};

export const EarthLoading = ({ top }) => {
  return (
    <>
      <Wrapper top={top}>
        <Earth></Earth>
        <LoadingTextAnimation></LoadingTextAnimation>
      </Wrapper>
    </>
  );
};
