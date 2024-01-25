import React, { useState, useEffect, useRef } from "react";
import {
  All,
  Items,
  Item,
  Button,
  Title,
  Content,
  ContentBox,
} from "../../css/template/HamburgerStyle";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemsRealDom = useRef();

  const PillClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // 외부 클릭 감지 함수, 바깥쪽 영역이 클릭됐을때
    const handleClickOutside = (event) => {
      if (
        itemsRealDom.current &&
        !itemsRealDom.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // 메모리 최적화를 컴포넌트가 언마운트 될때 이벤트 리스너가 해제되게 설정
      // 컴포넌트의 언마운트 : display : none (X), 다른 페이지로 이동하거나 하는 경우에, 즉 눈에만 안보이는 것이 아니라 완전히 사라졌을때를 의미
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [itemsRealDom]);

  return (
    <>
      <All>
        <Button onClick={PillClick}></Button>
        <Items
          ref={itemsRealDom} // DOM 요소에 직접 접근하기 위한 속성
          isOpen={isOpen}
          style={{
            // false : 일때 48vw 오른쪽으로 이동한 위치에 남아있는 것이 아닌, 원위치로 회귀
            transform: isOpen ? "translateX(47vw)" : "translateX(0)",
          }}
        >
          <Item isOpen={isOpen}>
            <Title>제목 </Title>
            <br />
            <ContentBox>
              <Content href="/Login">로그인</Content>
            </ContentBox>
            <ContentBox>
              <Content href="/Signup">회원가입</Content>
            </ContentBox>
          </Item>

          <Item isOpen={isOpen}>
            <Title>제목뭘로하지? </Title>
            <br />
            <ContentBox>
              <Content href="/Map">지도</Content>
            </ContentBox>
          </Item>

          <Item isOpen={isOpen}>
            <Title>커뮤니티 </Title>
            <br />
            <ContentBox>
              <Content href="/ChatList">채팅</Content>
            </ContentBox>
          </Item>
        </Items>
      </All>
    </>
  );
};
