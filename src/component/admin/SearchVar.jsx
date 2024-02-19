import { useState } from "react";
import { Button } from "../../utils/Button";
import { SelectMember } from "./SelectMember";
import styled from "styled-components";
const SearchVarCss = styled.div`
    width: 400px;

    height: 100%;
    display: flex;
    position: relative;
    right: 0;
    margin-right: 50px;
    .content4 {
        width: 100px;
        background: #ffffffd0;
        height: 30px;
        border: 2px solid #3C84F8;
        margin: 0;     
        margin-right :10px ;
        font-size: 1em;
        p{
            display: flex;
        justify-content: center;
        line-height: 30px;
        }     
        ul{
          width: 100%;
          height: auto;      
        }
        li {        
            border: 2px solid #3C84F8;
            padding :0 ;
            margin: 0 ;       
            height   :30px ;
             display: none;    
             background   :white ;
             width: 100px;
             margin-top: 1px;
             margin-left: -2px;
        }
        &:hover li {
            display: block;
        }
    }
    .content5{
        width: 200px;
        input{
            width: 100%;
            background: #ffffffd0;
            border: 2px solid #3C84F8;
            height: 30px;}
    }
    .content6{
        margin-left: 10px;
        button{
            background: #3C84F8;
        }
    }
   
  
`;

export const SearchVar = ({ list, setData }) => {
    //검색창 입력 값 저장
    const [name, setName] = useState('');
    //검색 방식
    const [type, setType] = useState('이름');
    //검색 방법
    const searchType = [
        '이름', "닉네임", '아이디'
    ];
    const memberSearch = () => {
        SelectMember(name, setData, type, list)

    }
    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            memberSearch();
        }
    };
    return (
        <SearchVarCss>

            <div className="content4">
                <p> {type}</p>
                <ul>   {
                    searchType && searchType.map((specialty, index) => (
                        <li onClick={(e) => { setType(specialty) }}><div className="SearchVar"><p>{specialty}</p></div></li>
                    ))
                }</ul>
            </div>
            <div className="content5">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleEnterKey} />
            </div>
            <div className="content6">

                <Button
                    width={"60px"}
                    height={"30px"}
                    children={"검 색"}
                    active={true}
                    clickEvt={() => memberSearch(name)}
                />

            </div>


        </SearchVarCss>
    )


}