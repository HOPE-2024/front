import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CoverImage, CoverWrapper } from "../../css/cover/CoverStyle";
import Image from "../../images/life_image.webp";
import { LifeFocus } from "../../css/text/focus/LifeFocus";
import { FlexColumn } from "../../css/common/Boxs";
import { UserContext } from "../../context/AuthContext";

export const LifeCover = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { loginStatus } = context;
  /*
  const { a, b } = context 는 const a = context.a; const b = context.b 와 같다.
  const a = context 는 새로운 변수를 생성하고, context 객체의 값을 복사하여 가지고 있는 것이다. 이후의 a의 값을 수정해도 context 객체는 영향을 받지 않는다. 즉 const loginStatus = context 로 선언하게 되면, 로그인 상태가 변경되어도 loginStatus의 값에는 영향을 주지 않으므로, const { loginStatus } = context 로 선언해야 한다.
  */
  const buttonText = loginStatus === "true" ? "예측해보러가기" : "로그인";

  const goToInput = () => {
    if (loginStatus !== "true") {
      navigate("/Login");
    } else {
      navigate("/LifeExpectancy");
    }
  };

  return (
    <>
      <CoverWrapper>
        <FlexColumn>
          <CoverImage
            url={Image}
            text={buttonText}
            onClick={goToInput} // goToInput() 으로 하면 클릭 여부와 관계 없이 렌더링될 때 바로 실행되기에 일반적으로 () 를 붙이지 않는다.
          ></CoverImage>
          <LifeFocus></LifeFocus>
        </FlexColumn>
      </CoverWrapper>
    </>
  );
};
