import { StyledSearch } from "../../css/common/StyledSearch";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { SearchAxiosApi } from "../../api/SearchAxiosApi";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Container = styled.div`
  width: 100vw;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const TitleBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleText = styled.p`
  margin-top: 30px;
  margin-bottom: 1%;
  font-size: 1.8em;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ResultList = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ListBox = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const DetailBox = styled.button`
  width: 100%;
  // 한 칸의 크기 조절 가능
  height: 130px;
  margin: 3% 0;
  padding: 0 3%;

  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: white; /* 배경 투명하게 설정 */
  box-shadow: 1px 2px 5px 1px #d5d5d5;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 150px;
  }
  .Box {
    margin-left: 5%;
    font-size: 1.1em;
  }
  .box1 {
    display: flex;
    justify-content: flex-start;
    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 5%;
    }
  }
  .box2 {
    width: 100px;
    margin-bottom: 5%;
    display: flex;
    justify-content: flex-start;
  }
  .box3 {
    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-start;
    }
  }
  img {
    box-shadow: 1px 2px 5px 1px #e3e3e3;
    width: 27%;
    height: 100px;
  }
`;

export const Pagenation = styled.div`
  .pagination {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 각 페이지 번호 */
  .pagination li {
    list-style: none;
    margin: 0 5px; /* 페이지 간의 간격 조절 */
    display: inline-block;
  }

  /* 페이지 번호 링크 스타일 */
  .pagination a {
    text-decoration: none;
    padding: 8px 12px;
    color: #333;
  }

  /* 활성화된 페이지 번호 스타일 */
  .pagination a.active {
    background-color: #4caf50;
    color: white;
  }
`;
export const MedicineResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [fields, setFields] = useState(); // 분류 (ex. 증상, 의약품명, 제조사, 성분)
  const [dataList, setDataList] = useState([]); // 검색 결과 리스트
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchOption, setSearchOption] = useState();
  const [search, setSearch] = useState();
  // URL 파라미터 읽기
  const searchParams = new URLSearchParams(location.search);
  const searchOptionParam = searchParams.get("searchoption");
  const searchParam = searchParams.get("search");

  // 검색창 (자식)에게서 받아오는 메서드 (검색 버튼을 눌렀을 때만 전달됨)
  const onSearch = (searchOption, search) => {
    console.log("1 : ", searchOption);
    console.log("2 : ", search);

    setSearch(search);
    setSearchOption(searchOption);
    switch (searchOption) {
      case "의약품명":
        setFields("name,name_en");
        break;
      case "제조사명":
        setFields("company,company_en");
        break;
      case "성분":
        setFields("ingredient,ingredient_en");
        break;
      case "증상":
        setFields(null);
        break;
      default:
        setFields("name,name_en,company,company_en,ingredient,ingredient_en");
        break;
    }
    fetchDataList(search, fields, currentPage);
  };

  // URL 변경시 호출(새로고침, 뒤로가기를 위한 useEffect())
  useEffect(() => {
    // URL 파라미터의 값을 전달하여 목록 가져옴
    if (searchOptionParam && searchParam) {
      onSearch(searchOptionParam, searchParam);
    }
  }, [location]);

  // 검색이 될 때 또는 페이징 처리할 때 api 호출
  useEffect(() => {
    fetchDataList(search, fields, currentPage);
  }, [currentPage, search, fields, searchOption]);

  // 검색 api 전송하여 값 받아오는 메서드
  const fetchDataList = async (search, fields, currentPage) => {
    try {
      const rsp = await SearchAxiosApi.multiSearch(search, fields, currentPage);
      if (rsp) {
        console.log(rsp.data.hits);
        setDataList(rsp.data.hits.hits);
        setTotalPages(Math.ceil(rsp.data.hits.totalHits.value / 10));
      } else {
        console.log("MedicineResult dataList error");
      }
    } catch (error) {
      console.error("MedicineResult fetchDataList error:", error);
    }
  };

  // 페이징 처리 (현재 페이지를 정함)
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  // 해당 의약품 상세보기 페이지로 이동
  const onClickBtn = (id) => {
    navigate(`/medicinedetail/${id}`);
  };

  return (
    <>
      <Container>
        <TitleBox>
          <TitleText>알고 싶은 의약품을 검색해보세요!</TitleText>
          <SearchBox>
            <StyledSearch onSearch={onSearch}></StyledSearch>
          </SearchBox>
        </TitleBox>
        <ResultList>
          <ListBox>
            {dataList.map((data) => (
              <DetailBox key={data.id} onClick={() => onClickBtn(data.id)}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hopeimage2.appspot.com/o/img_noimage.jpg?alt=media&token=883ba6ad-bc2e-4ec1-a7ff-5853bb377dcd"
                  alt="이미지"
                />
                <div className="Box">
                  <div className="box1">
                    <p className="box2">제품명</p>
                    <p className="box3"> {data.sourceAsMap.name}</p>
                  </div>
                  <div className="box1">
                    <p className="box2">제조사명</p>
                    <p className="box3"> {data.sourceAsMap.company}</p>
                  </div>
                </div>
                {/* </Link> */}
              </DetailBox>
            ))}
          </ListBox>
          <Pagenation>
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </Pagenation>
        </ResultList>
      </Container>
    </>
  );
};
