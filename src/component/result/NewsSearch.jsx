import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MachineAxiosApi } from "../../api/MachineAxiosApi";
import { EarthLoading } from "../../css/common/EarthLoading";
import {
  ResultCon,
  BlackBiggerText,
  SkyBiggerText,
  TextCon,
} from "../../css/result/ResultCss";

const NewsContainer = styled.div`
  width: 70vw;
  max-width: 1000px;
  height: 50vh;
  overflow: scroll;

  /* 웹킷 기반 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 파이어폭스를 위한 스타일 */
  scrollbar-width: none;
`;

const NewsItem = styled.div`
  border: 1px solid #ddd;
  margin: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.015);
  }
`;

const NewsLink = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: inherit;
`;

const NewsImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

const NewsTitle = styled.p`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 1.4em;
`;

export const NewsSearch = ({ keyWord = "당뇨" }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await MachineAxiosApi.fetchNews(keyWord);
      setArticles(response.data);
      setIsLoading(false); // 로딩 종료

      console.log(response);
    } catch (error) {
      console.error("News fetching error:", error);
      setIsLoading(false); // 에러 발생 시에도 로딩 종료
    }
  };

  useEffect(() => {
    let modifiedKeyWord = keyWord.replace(/_/g, " ");

    if (modifiedKeyWord.length > 0) {
      console.log("검색어 : " + modifiedKeyWord);
      fetchNews(modifiedKeyWord);
    }
  }, [keyWord]);

  return (
    <ResultCon>
      <TextCon>
        <SkyBiggerText>{keyWord.replace(/_/g, " ")}</SkyBiggerText>{" "}
        <BlackBiggerText>&nbsp;관련 뉴스 기사입니다.</BlackBiggerText>
      </TextCon>
      <NewsContainer>
        {isLoading ? <EarthLoading top="125px"></EarthLoading> : <></>}
        {articles.map((article, index) => (
          <NewsItem key={index}>
            <NewsLink
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewsImage src={article.image} alt="news" />
              <NewsTitle>{article.title}</NewsTitle>
            </NewsLink>
          </NewsItem>
        ))}
      </NewsContainer>
    </ResultCon>
  );
};
