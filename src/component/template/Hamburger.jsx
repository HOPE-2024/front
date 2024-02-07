import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  All,
  Items,
  Item,
  Button,
  Title,
  Content,
  ContentBox,
  HamburgerLogo,
} from "../../css/template/HamburgerStyle";
import { UserContext } from "../../context/AuthContext";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemsRealDom = useRef();
  const { loginStatus } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

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
          <HamburgerLogo></HamburgerLogo>
          {loginStatus === "true" ? (
            // 로그인 되었을 때의 메뉴 항목
            <>
              <Item isOpen={isOpen}>
                <Title>예측</Title>
                <ContentBox>
                  <Content href="/Country"></Content>
                </ContentBox>
                <ContentBox>
                  <Content href="/Country">국가 평균 수명</Content>
                </ContentBox>
                <ContentBox>
                  <Content href="/LifeExpectancy">기대 수명</Content>
                </ContentBox>
                <ContentBox>
                  <Content href="/Diabetes">당뇨병 진행도</Content>
                </ContentBox>
                <ContentBox>
                  <Content href="/Face">얼굴 나이</Content>
                </ContentBox>
              </Item>
              <Item isOpen={isOpen}>
                <Title>커뮤니티</Title>
                <ContentBox>
                  <Content href="/ChatList">채팅</Content>
                </ContentBox>
              </Item>
              <Item isOpen={isOpen}>
                <Title>계정</Title>
                <ContentBox>
                  <Content href="/MyCalender">일정</Content>
                </ContentBox>
                <ContentBox>
                  <Content href="/MyPage">내 정보 수정</Content>
                </ContentBox>
                <ContentBox>
                  <Content href="/Query">고객 지원</Content>
                </ContentBox>
                <ContentBox>
                  <Content onClick={logout}>로그아웃</Content>
                </ContentBox>
              </Item>
            </>
          ) : (
            // 로그인 되지 않았을 때의 메뉴 항목
            <>
              <Item isOpen={isOpen}>
                <Title>계정</Title>
                <ContentBox>
                  <Content href="/Login">로그인</Content>
                </ContentBox>
                <ContentBox>
                  <Content href="/AgreeCheck">회원가입</Content>
                </ContentBox>
              </Item>
            </>
          )}
        </Items>
      </All>
    </>
  );
};
