import { WordSwitcher } from "../../css/text/WordSwitcher";
import { StyledSearch } from "../../css/common/StyledSearch";
import { useNavigate } from "react-router-dom";
import { Ranking } from "../search/Ranking";
import { useEffect, useState } from "react";
import { MedicineDataAxiosApi } from "../../api/MedicineDataAxiosApi";
import styled from "styled-components";

const RankingBox = styled.div`
  position: absolute;
  top: 54%;
  left: 42%;
`;
export const ElasticSearch = () => {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState([]);

  // 검색어 집계
  useEffect(() => {
    const getRanking = async () => {
      const rsp = await MedicineDataAxiosApi.getSearchLog();
      if (rsp) {
        console.log("검색어 순위 : ", rsp.data);
        setRanking(rsp.data);
      } else {
        console.log("검색어 불러오지 못함");
      }
    };
    getRanking();
  }, []);

  const onSearch = (searchOption, search) => {
    navigate(`/medicineresult?searchoption=${searchOption}&search=${search}`);
  };
  return (
    <>
      <WordSwitcher></WordSwitcher>
      <StyledSearch onSearch={onSearch}></StyledSearch>
      <RankingBox>
        <Ranking data={ranking}></Ranking>
      </RankingBox>
    </>
  );
};
