import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../utils/Button";
import { useParams } from "react-router-dom";
import down from "../../images/bown.svg";
const MapCss = styled.div`
width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin-top: 40px;

  .content1 {
    width: 200px;
    height:auto;
    display: flex;
    flex-direction: column;
      margin-top: -20px;
    button {
      margin: 20px;
    }
    @media (max-width: 768px) {
    display: none;
  }
  }
  .content2 {
    width: 90%;
    height: auto;
    @media (max-width: 768px) {
  }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const MapFrame = styled.iframe`
  width: 100%;
  height: 700px; 
  border-radius: 20px;
  border: 2px solid #023b96;
  @media (max-width: 768px) {
   margin-top: 20px;
  }
`;

const ButtonVar = styled.div`
display: none;
  width: 200px;
  height: auto;
  margin: 0 auto;
  min-height: 30px;
  border: 1px solid #023b96; 
.content1{
  display: flex;
  margin-top: 0px;
  flex-direction: row;
  img{
    width: 20px;
    margin-top: 5px;
    margin-left: 10px;
  }
  p{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -30px;
  }

}
  &:hover {
    color: red;
    ul{
 
      display: block;
    }
  }
  ul{
    display: none;
    margin-top:5px;
  }
  li{

    height: 30px;
    line-height: 30px;
 
    .content2{
      margin: 0 auto;
      display: flex;
      justify-content: center;
  align-items: center;
    }
  }
  @media (max-width: 768px) {
    display: block;
  }
`;


export const Map = () => {
  const { Id } = useParams(); // URL에서 동적 세그먼트의 값을 추출
  const [searchKeyword, setSearchKeyword] = useState(Id);
  const [buttonVar, setButtonVar] = useState(false);
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MapCss>
      <ButtonVar
        onMouseOver={() => setIsOpen(true)} // 마우스가 올라갔을 때 리스트를 열어줍니다.
        onMouseOut={() => setIsOpen(false)} // 마우스가 벗어났을 때 리스트를 닫아줍니다.
      >

        <div className="content1"> <img src={down} alt="" />  <p>{buttonVar}</p> </div>
        {isOpen && data.map((specialty, index) => ( // isOpen 상태에 따라 리스트를 보여줍니다.
          <ul>
            <li onClick={() => { setButtonVar(specialty); setIsOpen(false); handleSearch(specialty); }}><div className="content2">{specialty}</div></li>
          </ul>
        ))}
      </ButtonVar>


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