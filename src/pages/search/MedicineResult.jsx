import { StyledSearch } from "../../css/common/StyledSearch";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { SearchAxiosApi } from "../../api/SearchAxiosApi";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NoResult } from "../../component/search/NoResult";
import { ReactComponent as HomeSvg } from "../../images/home.svg";
import Loading from "../../component/search/Loading";

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const TopBox = styled.div`
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
  height: 150px;
  margin: 2% 0;
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
    color: #333;
  }
  .box3 {
    font-weight: bold;
    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-start;
    }
  }
  img {
    box-shadow: 1px 2px 5px 1px #e3e3e3;
    width: 25%;
    height: 120px;
    @media (max-width: 768px) {
      width: 40%;
      height: 100px;
    }
  }
`;
export const TitleBox = styled.div`
  width: 60%;
  text-align: left;
  .text1 {
    font-size: 2em;
    font-weight: bold;
    color: var(--NAVY);
  }
  .text2 {
    margin: 20px 0;
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
    margin: 0 5px; /* 페이지 간의 간격 조절 */
    display: inline-block;
  }

  /* 페이지 번호 링크 스타일 */
  .pagination a {
    padding: 8px 12px;
    line-height: 1.8;
    background-image: linear-gradient(
      transparent 85%,
      ${(props) => props.color || "#023b96"} 40%
    ); // 기본값 : #023b96
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size 0.4s;
    font-size: ${(props) => props.fontSize || "1rem"};

    cursor: pointer;

    &:hover {
      background-size: 100% 100%;
      transform: scale(1.1);
    }
  }
`;
export const MedicineResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [fields, setFields] = useState(); // 분류 (ex. 증상, 의약품명, 제조사, 성분)
  const [dataList, setDataList] = useState(1); // 검색 결과 리스트
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
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // 해당 의약품 상세보기 페이지로 이동
  const onClickBtn = (id) => {
    navigate(`/medicinedetail/${id}`);
  };

  // 검색 중일 때 Loading 화면 출력
  if (dataList === 1) {
    return (
      <>
        <Loading text={"잠시만 기다려주세요..."}></Loading>
      </>
    );
  }
  return (
    <>
      <Container>
        <TopBox>
          <TitleText>알고 싶은 의약품을 검색해보세요!</TitleText>
          <SearchBox>
            <StyledSearch
              onSearch={onSearch}
              rspSearch={searchParam}
              rspSearchOption={searchOptionParam}
            ></StyledSearch>
          </SearchBox>
        </TopBox>
        {dataList.length === 0 ? (
          <NoResult keyword={search}></NoResult>
        ) : (
          <ResultList>
            <TitleBox>
              <p className="text1">'{search}' 검색 결과</p>
              <p className="text2">
                <HomeSvg />
                &nbsp;&nbsp;&gt;&nbsp; 의약품검색
              </p>
            </TitleBox>
            <ListBox>
              {dataList.map((data) => (
                <DetailBox key={data.id} onClick={() => onClickBtn(data.id)}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/hopeimage-74788.appspot.com/o/img_195900043.jpg?alt=media&token=afe578c0-e3d0-480a-9be4-5fe5439787b9"
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
                pageRangeDisplayed={5} // 한 번에 띄울 페이지의 수
                marginPagesDisplayed={1} // 페이지 수가 많을 때, 몇개의 구분으로 나눌 지
                onPageChange={handlePageChange} // 페이지 클릭했을 때 실행될 메서드
                breakLabel={"..."} // 구분한 라벨 표시 방법 ex) ""으로 설정하면 ...같은 줄임이 표시되지 않음
                previousLabel={"<"} // 이전 페이지 표시 방법
                nextLabel={">"} // 다음 페이지 표시 방법
                containerClassName={"pagination"} // Container 클래스 이름
                activeClassName={"active"}
              />
            </Pagenation>
          </ResultList>
        )}
      </Container>
    </>
  );
};
