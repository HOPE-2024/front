import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FirstDropDownMenu,
  SecondDropDownMenu,
  ThirdDropDownMenu,
} from "../../css/Template/HeaderDropDownStyle";

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
          navigate("/");
        }}
      >
        내 정보 관리
      </li>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        채팅
      </li>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        구매 목록
      </li>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        판매 목록
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
          navigate("/");
        }}
      >
        상품 보기
      </li>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        상품 등록
      </li>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        장바구니
      </li>
    </SecondDropDownMenu>
  );
};

export const ThirdDropDown = ({ onClose }) => {
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
    <ThirdDropDownMenu ref={dropdownRef}>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        상품 보기
      </li>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        상품 등록
      </li>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        장바구니
      </li>
    </ThirdDropDownMenu>
  );
};
