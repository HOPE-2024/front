import { FlexColumn } from "../../css/common/Boxs";
import { CoverImage } from "../../css/cover/CoverStyle";
import Image from "../../images/sugar_image.webp";
import { DiabFocus } from "../../css/text/focus/DiabFocus";
import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const All = styled.div`
  position: relative;
  bottom: 3.5vh;
`;

export const DiabCover = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { loginStatus } = context;

  const buttonText = loginStatus === "true" ? "예측해보러가기" : "로그인";

  const goToInput = () => {
    if (loginStatus !== "true") {
      navigate("/Login");
    } else {
      navigate("/Diabetes");
    }
  };

  return (
    <>
      <All>
        <FlexColumn>
          <CoverImage
            url={Image}
            text={buttonText}
            onClick={goToInput}
          ></CoverImage>
          <DiabFocus></DiabFocus>
        </FlexColumn>
      </All>
    </>
  );
};
