import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBox = styled.div`
  position: absolute;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: 1000px) {
    width: 70vw;
  }

  @media screen and (max-width: 300px) {
    width: 60vw;
  }
`;

const SearchMode = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 80%;
  height: 70px;
  margin: 20px;
  border: 2px solid #3c84f8;
  border-radius: 24px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  background: white; // 배경색을 흰색으로 설정
  min-width: 180px;

  @media (max-width: 768px) {
    height: 50px;
    border-radius: 20px;
  }
`;

const Input = styled.input`
  width: 95%;
  height: 95%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 0 10px;
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
  font-size: 1.5rem;
  margin-right: 20px;
  cursor: pointer;
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
