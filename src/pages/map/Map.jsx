import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../utils/Button";
import { useParams } from "react-router-dom";

const MapCss = styled.div`
  width: 1280px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  .content1 {
    width: 200px;
    display: flex;
    flex-direction: column;
    button {
      margin: 20px;
    }
  }
  .content2 {
    width: 100%;
  }
`;
const MapFrame = styled.iframe`
  width: 100%;
  height: 800px; /* 원하는 높이로 설정하세요 */
  border-radius: 20px;
  border: 2px solid #023b96;
`;

export const Map = () => {
  const { Id } = useParams(); // URL에서 동적 세그먼트의 값을 추출
  const [searchKeyword, setSearchKeyword] = useState(Id);
  const data = [
    "내과",
    "외과",
    "소아과",
    "치과",
    "이비인후과",
    "산부이과",
    "피부과",
    "정형외과",
  ];
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };
  return (
    <MapCss>
      <div className="content1">
        {data.map((specialty, index) => (
          <Button
            key={index}
            width={"100px"}
            height={"50px"}
            children={specialty}
            active={true}
            clickEvt={() => handleSearch(specialty)}
          />
        ))}
      </div>
      <div className="content2">
        <MapFrame
          src={`https://map.kakao.com/?q=${searchKeyword}`}
          title="KakaoMap"
        />
      </div>
    </MapCss>
  );
};
