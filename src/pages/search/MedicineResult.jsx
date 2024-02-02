import { StyledSearch } from "../../css/common/StyledSearch";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { SearchAxiosApi } from "../../api/SearchAxiosApi";
import ReactPaginate from "react-paginate";

const Container = styled.div`
  width: 100vw;
  height: 200vh;
  border: 30px solid red;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const TitleBox = styled.div`
  width: 100%;
  height: 27%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleText = styled.p`
  margin-top: 30px;
  margin-bottom: 1%;
  font-size: 1.8em;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ResultList = styled.div`
  width: 100vw;
  height: 62vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 5px solid yellow;
`;

const ListBox = styled.div`
  width: 60%;
  height: 100%;
  border: 5px solid green;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const DetailBox = styled.button`
  width: 100%;
  // 한 칸의 크기 조절 가능
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 3px solid blue;

  .Box {
    margin-left: 20%;
    font-size: 1.1em;
  }
  .box1 {
    display: flex;
    justify-content: flex-start;
    @media (max-width: 768px) {
      flex-direction: column;
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
`;
export const MedicineResult = () => {
  const [keyword, setKeyword] = useState(); // 검색어
  const [fields, setFields] = useState(); // 분류 (ex. 증상, 의약품명, 제조사, 성분)
  const [dataList, setDataList] = useState([]); // 검색 결과 리스트
  const [page, setPage] = useState(1); // 페이징처리
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // 검색 리스트
  useEffect(() => {
    const dataList = async () => {
      const rsp = await SearchAxiosApi.multiSearch("타이", "name", currentPage);
      if (rsp) {
        console.log(rsp.data.hits); // JSON 객체에서 목록까지 접근. map을 돌릴 때 각 요소의 내용에 접근해야 함
        setDataList(rsp.data.hits.hits);
        setTotalPages(Math.ceil(rsp.data.hits.totalHits.value / 10));
      } else {
        console.log("MedicineResult dataList error");
      }
    };
    dataList();
  }, [currentPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <>
      <Container>
        <TitleBox>
          <TitleText>알고 싶은 의약품을 검색해보세요!</TitleText>
          <SearchBox>
            <StyledSearch></StyledSearch>
          </SearchBox>
        </TitleBox>
        <ResultList>
          <ListBox>
            {dataList.map((data) => (
              <DetailBox key={data.id}>
                {/* <Link to={`/medicinedetail/${data.id}`}> */}
                <img src="" alt="이미지" />
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
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </ResultList>
      </Container>
    </>
  );
};
