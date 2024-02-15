import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Select } from "../../css/slideElementInput/InputStyle";
import { MedicineDataAxiosApi } from "../../api/MedicineDataAxiosApi";
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

  @media (max-width: 400px) and (max-height: 650px) {
    position: relative;
    top: 7vh;
  }
`;

const SearchMode = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 2px #5c9bff solid;
  width: 500px;
  height: 50px;
  border-radius: 4px;
  margin: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  background: white; // 배경색을 흰색으로 설정
  min-width: 180px;

  @media (max-width: 768px) {
    border-radius: 4px;
  }
`;

const Input = styled.input`
  width: 95%;
  height: 95%;
  border: none;
  outline: none;
  font-size: 1rem;
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

export const StyledSearch = ({ onSearch, rspSearch, rspSearchOption }) => {
  const [search, setSearch] = useState(""); // 검색어
  const [searchOption, setSearchOption] = useState("전체"); // 검색필터
  const navigate = useNavigate();

  useEffect(() => {
    setSearch(rspSearch);
    setSearchOption(rspSearchOption);
  }, [rspSearch, rspSearchOption]);
  // 검색 버튼 클릭 시 동작할 함수
  const searchTitle = async () => {
    if (search === "" && search === "undefined") {
      // 검색어가 없다면 alert 창 알림
      alert("검색어를 입력해주세요.");
    } else {
      // 검색어가 있다면 검색어 저장
      const rsp = await MedicineDataAxiosApi.addSearchLog(search);
      console.log("검색어 저장 : ", rsp.data);
      // onSearch() 호출하여 필터, 검색어 부모에게 전달
      onSearch(searchOption, search);
      // 해당 경로로 이동
      navigate(`/medicineresult?searchoption=${searchOption}&search=${search}`);
    }
  };

  // Enter 키가 눌리면 실행될 함수
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchTitle();
    }
  };

  // option이 바뀔 때 실행되는 함수
  const handleOptionChange = (e) => {
    // 바뀐 옵션 값을 searchOption에 저장
    setSearchOption(e.target.value);
  };

  // selectbox의 옵션 지정
  const searchOptionList = ["전체", "의약품명", "제조사명", "성분", "증상"];
  return (
    <>
      <SearchBox>
        <Select value={searchOption} onChange={handleOptionChange}>
          {searchOptionList.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>
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
