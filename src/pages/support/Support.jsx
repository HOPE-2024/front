import { useEffect, useState } from "react";
import styled from "styled-components"
import { Support1 } from "./Support1";
import { Support2 } from "./Support2";
import { useNavigate, useParams } from "react-router-dom";
import query1 from "../../images/query1.svg";
import query2 from "../../images/query2.svg";
import query3 from "../../images/query3.svg";

const SupportScc = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    height: auto;
    background: #ffffff;
    overflow: hidden;
    margin-top: 50px;
    .content1{
width: 100%;
margin-top: 40px;
height: auto;
 p{
    margin-left: 20px;
    font-size: 1.5em;
 }
    }
    .content2{
        width: 100%;
height: auto;
 font-size: .7em;
ul{
     margin-top: 30px;
    display: flex;
          flex-direction: row;
justify-content: center;
li{
    width: 250px;
    height: 250px;
    margin: 0 15px;
    //고객지원 목록 색상
    background: #e5e5e5;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
       justify-content: center;
       align-items: center;    
        font-size: 2em;  
        padding-bottom: 10px;
        @media (max-width: 768px) {
           min-height: 150px;
         width:150px;
         height: 100%;
            }
}   

   &>:hover{
    background: #105eda;
}
}

    }
    .content3{

        width:100%;
margin-top: 50px;
height: auto;

p{
    margin-left: 20px;
    font-size: 1.3em;
 }
    }
    .content4{       
        height: auto;
         margin-top: 20px;
         padding-bottom: 100px;
        ul{
    
            li{ margin: 0 auto;
                width: 90%;
               display: flex;
            }  
        
            
            .title{
                line-height:30px;
                border: 1px solid black;
                height: 40px;
                background: #3C84F8;
                display: flex;
                justify-content: space-between;
                p{               
                    font-size     :20px ;
                    margin-left: 50px;
                    color:white;
                    padding-top: 5px;
                }
                h1{    margin: 0;
                    margin-right: 50px;
                    color: white;
                
                    transform: rotate(270deg);
                    font-size : 3em;

                }
            }
              &:hover > .title{
                background:  #b8c3d4;
            }
         
            .content{   
                /* border: 1px solid red; */
                height: auto;
                padding: 30px;
                padding-bottom: 0;
               p{                 
                 word-break: break-all;       
                 font-size  :1.2em ;
               }
             
            }
        }
        .faq{
            min-height: 400px;
            background: #efefef;
            width: 90%;
            border: 1px solid black;
        }
    }
    .content5{
        width: 100%;
        height: 400px;
        background: #a09f9f;
    }
`;
export const Support = () => {
    const navigate = useNavigate();
    const [type, setType] = useState(1);
    const { id } = useParams();
    useEffect(() => {
        if (id === "1") {
            setType(1)
        } else {
            setType(2)
        }
    },
        [id])
    return (
        <SupportScc type={type}>
            <div className="content1"> <p>고객 지원 </p></div>
            <div className="content2">
                <ul>
                    <li onClick={() => { setType(1) }} style={{ background: type === 1 && ' #3C84F8' }}>   <img src={query1} alt="Logo" width="100" height="80" style={{ marginBottom: "10px" }} /><p>자주 묻는 질문</p></li>
                    <li onClick={() => { setType(2) }} style={{ background: type === 2 && ' #3C84F8' }}>  <img src={query3} alt="Logo" width="100" height="80" style={{ marginBottom: "10px" }} /><p>나의 질문 보기</p></li>
                    <li onClick={() => { navigate("/QueryWrite") }}> <img src={query2} alt="Logo" width="60" height="80" style={{ marginBottom: "10px" }} /><p>문의 작성하기</p></li>
                </ul>
            </div>
            {type === 1 && <Support1 ></Support1>}
            {type === 2 && <Support2 ></Support2>}


        </SupportScc >
    )
}