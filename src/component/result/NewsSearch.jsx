import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// Styled-components로 스타일을 적용한 컴포넌트 정의
const NewsContainer = styled.div`
  margin: 20px;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
`;

const NewsItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const NewsImage = styled.img`
  width: 100%;
  height: auto;
`;

const NewsTitle = styled.p`
  padding: 10px;
`;

export const NewsSearch = ({ keyWord = "당뇨" }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/search-news?query=${encodeURIComponent(keyWord)}`
      );
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
    <NewsContainer>
      {isLoading ? <h2>Loading...</h2> : <h2>검색어: {keyWord}</h2>}
      <NewsGrid>
        {articles.map((article, index) => (
          <NewsItem key={index}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <NewsImage src={article.image} alt="news" />
              <NewsTitle>{article.title}</NewsTitle>
            </a>
          </NewsItem>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
};
