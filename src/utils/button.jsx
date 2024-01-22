import styled from "styled-components";

const ButtonComp = styled.button`
  text-align: center;
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "40px"};
  color: ${(props) => props.color || "white"};
  font-weight: 600;
  font-size: ${(props) => props.fontSize || "1em"};
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.$front || "var(--NAVY)"};
  transition: 0.4s ease-in;
  cursor: pointer;
  &.false {
    // false로 지정된 버튼은 비활성화 ex) <Button className="false">비활성화 버튼</Button>
    background-color: #a7a7a7;
    cursor: default;
    &:hover {
      background-color: gray;
    }
  }
  &:hover {
    background-color: ${(props) => props.$back || "var(--DEEPBLUE)"};
    color: white;
  }
`;

// 활성/비활성 버튼
export const Button = (props) => {
  const {
    children,
    width,
    height,
    fontSize,
    active,
    clickEvt,
    front,
    back,
    color,
  } = props;
  return (
    <>
      <ButtonComp
        color={color}
        $front={front}
        $back={back}
        width={width}
        height={height}
        fontSize={fontSize}
        className={active ? "" : "false"}
        onClick={() => {
          if (active) clickEvt();
        }}
      >
        {children}
      </ButtonComp>
    </>
  );
};
