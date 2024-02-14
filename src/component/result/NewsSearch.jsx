import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MachineAxiosApi } from "../../api/MachineAxiosApi";

const NewsContainer = styled.div`
  width: 70vw;
  max-width: 1000px;
  height: 50vh;
  overflow: scroll;
`;

const NewsItem = styled.div`
  border: 1px solid #ddd;
  margin: 5px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const NewsLink = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: inherit;
`;

const NewsImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const NewsTitle = styled.p`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const NewsSearch = ({ keyWord = "당뇨" }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    console.log("검색어 : " + keyWord);
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
    if (keyWord.length > 0) {
      fetchNews();
    }
  }, [keyWord]);

  return (
    <>
      <NewsContainer>
        {isLoading ? <h2>Loading...</h2> : <h2>검색어: {keyWord}</h2>}
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
    </>
  );
};
