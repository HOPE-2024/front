import { useEffect, useState } from "react";
import styled from "styled-components"
import { SelectOftenQuery } from "../../component/admin/SelectOftenQuery";
import { Support1 } from "./Support1";
import { Support2 } from "./Support2";
import { SelectMyQury } from "../../component/admin/SelectMyQury";

const SupportScc = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    height: auto;
    background: white;
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

ul{
     margin-top: 30px;
    display: flex;
flex-direction: row;
justify-content: center;
li{
    width: 300px;
    height: 300px;
    margin: 0 20px;
    background: #d4d4d4;
    display: flex;
       justify-content: center;
       align-items: center;    
        font-size: 2em;  

}
:hover{
    background: red;
}
}

    }
    .content3{
        width: 100%;
margin-top: 50px;
height: auto;

p{
    margin-left: 20px;
    font-size: 1.3em;
 }
    }
    .content4{       
         margin-top: 20px;
        ul{
    
            li{ margin: 0 auto;
                width: 100%;
               display: flex;
            }  
            
            .title{
                border: 1px solid green;
                height: 40px;
                background: #b0b0b0;
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
                    font-weight: bold;  
                
                    transform: rotate(270deg);
                    font-size : 3em;
                }
            }
              &:hover > .title{
                background:red;
            }
         
            .content{   
                border: 1px solid red;
                height: auto;
                padding: 30px;
               p{                 
                 word-break: break-all;       
                 font-size  :1.2em ;
               }
             
            }
        }
    }
    .content5{
        width: 100%;
        height: 400px;
        background: #a09f9f;
    }
`;
export const Support = () => {
    const [view, setView] = useState(-1);
    const [data, setData] = useState([]);
    const [type, setType] = useState(1);

    // useEffect(() => {
    //     if (type === 1) {
    //         SelectOftenQuery(setData);
    //     }
    //     if (type === 2) {
    //         SelectMyQury(setData);
    //     }

    // }, [type])
    return (
        <SupportScc>
            <div className="content1"> <p>고객 지원</p></div>
            <div className="content2">
                <ul>
                    <li onClick={() => { setType(1) }}>자주 묻는 질문</li>
                    <li onClick={() => { setType(2) }}>나의 질문</li>
                    <li onClick={() => { setType(3) }}>1대1 문의 작성</li>
                </ul>
            </div>
            {type === 1 && <Support1 ></Support1>}
            {type === 2 && <Support2 ></Support2>}
            {/* {type === 3 && <Support1 data={data} setView={setView} view={view} ></Support1>} */}
            <div className="content5">
            </div>
        </SupportScc >
    )
}