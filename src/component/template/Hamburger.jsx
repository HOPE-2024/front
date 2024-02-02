import React, { useState, useEffect, useRef, useContext } from "react";
import {
  All,
  Items,
  Item,
  Button,
  Title,
  Content,
  ContentBox,
} from "../../css/template/HamburgerStyle";
import { UserContext } from "../../context/AuthContext";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemsRealDom = useRef();
  const { loginStatus } = useContext(UserContext);

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
          ref={itemsRealDom}
          isOpen={isOpen}
          style={{
            transform: isOpen ? "translateX(47vw)" : "translateX(0)",
          }}
        >
          {loginStatus === "true" ? (
            // 로그인 되었을 때의 메뉴 항목
            <>
              <Item isOpen={isOpen}>
                <Title>지도</Title>
                <ContentBox>
                  <Content href="/Map">지도 보기</Content>
                </ContentBox>
              </Item>
              <Item isOpen={isOpen}>
                <Title>커뮤니티</Title>
                <ContentBox>
                  <Content href="/ChatList">채팅</Content>
                </ContentBox>
              </Item>
            </>
          ) : (
            // 로그인 되지 않았을 때의 메뉴 항목
            <>
              <Item isOpen={isOpen}>
                <br />
                <ContentBox>
                  <Content href="/Login">로그인</Content>
                </ContentBox>
                <ContentBox>
                  <Content href="/Signup">회원가입</Content>
                </ContentBox>
              </Item>
            </>
          )}
        </Items>
      </All>
    </>
  );
};
