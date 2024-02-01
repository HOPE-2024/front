import { useEffect, useState } from "react";
import styled from "styled-components"
import { Button } from "../../utils/Button"
import { InputBox, QueryCss } from "../../css/admin/QueryCss";
import { InsertQuery } from "../../component/admin/IsertQuery";
import { useNavigate } from "react-router-dom";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";
import { Reply } from "../../component/admin/Reply";

const QueryViewCss = styled.div`
  width: 70vw;
  height: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text{
    font-size: 1.8em;
    height: 50px;
    width: 100%;
    border-bottom: 2px solid black;
  }

  .info{
    width: 70%;
    border: 2px solid  #3C84F8;
    background: white;    
    border-radius: 10px;
    height: 50px;     
    display: flex;
    align-items: center;
    margin-top: 40px;

    ul{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;   

      li{
        width: 100px;    
      }
    }
  }

  .content{
    width: 100%;
    height: auto;     
    display: flex;
    flex-direction: column;
    align-items: center;

    ul{
      width: 70%;
      margin-top: 10px;
      border: 2px solid  #3C84F8;    
      background: white;    
      border-radius: 10px;
      height: 50px; 
      display: flex;
      flex-direction: row;  
      justify-content: space-around;   

      li{         
        width: 100px;    
        display: flex;    
        align-items: center;   
      }
    }
  }

`;
export const QueryList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        selectQury()
    }, [])
    const selectQury = async () => {
        console.log('채팅 정지 회원 조회 axios 실행')
        try {
            const res = await AdminAxiosApi.selectQuryList();
            setData(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <QueryViewCss>
            <div className="text">
                <p>문의 글</p>
            </div>
            <div className="info">
                <ul>
                    <li>문의 번호</li>
                    <li>유형</li>
                    <li style={{ width: "400px" }}>문의 제목</li>
                    <li>회원 닉네임</li>
                </ul>
            </div>
            <div className="content">
                {data && data.map((pick, index) => (
                    <  ul key={index} onClick={() => { navigate('../QueryView/' + pick.id) }}>
                        <li className="p1">{pick.id}</li>
                        <li className="p1">{pick.division}</li>
                        {/* <li className="p1">{pick.queryImg}</li> */}
                        <li style={{ width: "400px" }}>{pick.substance}</li>
                        <li className="p1">{pick.questioner.nickName}</li>
                    </ul>))}
            </div>
            <div className="reply">

            </div>
        </QueryViewCss>
    );
};
