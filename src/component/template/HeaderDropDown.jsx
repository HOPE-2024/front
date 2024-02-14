import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FirstDropDownMenu,
  SecondDropDownMenu,
  ThirdDropDownMenu,
} from "../../css/template/HeaderDropDownStyle";

export const FirstDropDown = ({ onClose }) => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // 클릭된 요소가 드롭다운 메뉴 내부가 아니라면 메뉴를 닫음
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    // 전체 문서에 이벤트 리스너 등록
    document.addEventListener("mousedown", handleOutsideClick);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <FirstDropDownMenu ref={dropdownRef}>
      <li
        onClick={() => {
          navigate("/Country");
        }}
      >
        국가 평균 수명
      </li>
      <li
        onClick={() => {
          navigate("/LifeExpectancy");
        }}
      >
        기대 수명
      </li>
      <li
        onClick={() => {
          navigate("/Diabetes");
        }}
      >
        당뇨병 진행도
      </li>
      <li
        onClick={() => {
          navigate("/Face");
        }}
      >
        얼굴 나이
      </li>
    </FirstDropDownMenu>
  );
};

export const SecondDropDown = ({ onClose }) => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // 클릭된 요소가 드롭다운 메뉴 내부가 아니라면 메뉴를 닫음
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    // 전체 문서에 이벤트 리스너 등록
    document.addEventListener("mousedown", handleOutsideClick);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <SecondDropDownMenu ref={dropdownRef}>
      <li
        onClick={() => {
          navigate("/ChatList");
        }}
      >
        증상 별 채팅
      </li>
    </SecondDropDownMenu>
  );
};

export const ThirdDropDown = ({ onClose }) => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // 클릭된 요소가 드롭다운 메뉴 내부가 아니라면 메뉴를 닫음
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    // 전체 문서에 이벤트 리스너 등록
    document.addEventListener("mousedown", handleOutsideClick);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <ThirdDropDownMenu ref={dropdownRef}>
      <li
        onClick={() => {
          navigate("/MyCalender");
        }}
      >
        일정
      </li>
      <li
        onClick={() => {
          navigate("/MyPage");
        }}
      >
        내 정보 수정
      </li>
      <li
        onClick={() => {
          navigate("/Support/1");
        }}
      >
        고객 지원
      </li>
      <li onClick={logout}>로그아웃</li>
    </ThirdDropDownMenu>
  );
};
