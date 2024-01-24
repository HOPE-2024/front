import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 이미지
import { FaSearch } from "react-icons/fa";

// 검색바
const SearchBox = styled.div`
  position: absolute;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 25%;
  }
`;

const SearchMode = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 70%;
  height: 70px;
  margin: 20px;
  border: 2px solid #3c84f8;
  border-radius: 24px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  background: white; // 배경색을 흰색으로 설정

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Input = styled.input`
  width: 82%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 0 1vw; // 아이콘과 겹치지 않는 적절한 패딩을 설정
  background: rgba(0, 0, 0, 0);
  position: relative;
  left: 1%;
  top: 3%;

  &::placeholder {
    color: rgb(175, 175, 175);
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const SearchIcon = styled.div`
  position: relative;
  left: 5vw;
  margin-left: -0.5vw;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  svg {
    color: #136cfb;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
      color: #023b96;
    }
  }
`;

export const StyledSearch = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchTitle = async () => {
    navigate(`/` + search);
    setSearch("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchTitle();
    }
  };

  return (
    <>
      <SearchBox>
        <SearchMode>
          <Input
            type="text"
            placeholder="검색어를 입력하세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <SearchIcon onClick={searchTitle}>
            <FaSearch />
          </SearchIcon>
        </SearchMode>
      </SearchBox>
    </>
  );
};
