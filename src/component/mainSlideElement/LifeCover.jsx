import styled from "styled-components";

const Back = styled.div`
  background-image: url("../../images/life_image.webp");
  width: 200px;
  height: 200px;
`;

export const LifeCover = () => {
  return (
    <>
      <Back></Back>
      <span>기대 수명 예측 표지</span>
    </>
  );
};
