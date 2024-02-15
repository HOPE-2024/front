import { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { QueryAxiosApi } from "../../api/QueryAxiosApi";
import { MemberListCss } from "../../css/admin/Report";
import { QueryView } from "./QueryView";
import { ReplyInsert } from "../../component/admin/ReplyInsert";
const QueryViewCss = styled.div`
  width: 80%;
  margin: 0 auto;
  height:  auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  .text{
    font-size: 1.8em;
    height: 50px;
    width: 100%;
    border-bottom: 2px solid black;
  }

  .info{
    width: 100%;
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
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .content{
    width: 100%;
    height: auto;     
    display: flex;
    flex-direction: column;
    align-items: center;

.content2{
        margin: 0 auto;
        width: auto;  
        height: 40px;
        display: flex;
       justify-content: center;  
       align-items:center ;

    }

    ul{
      width:100%;
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
  .query{
    width: 100%;
    list-style: none;



.output{
    width: 100%; 
    height: auto;
    /* border: 2px solid #023b96; */

    background: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;      
    line-height :30px ;
    ul{
          display: flex;
          border: 2px solid #adadad ;
          flex-direction: column;
          margin: 10px 0;
          border-radius: 10px;
          height: auto;
          padding-bottom: 5px;
          width: 100%;         
        li{
          width: 100%;
          
        }
    }
    .p1 , .p2{

        width: 95%;
        margin-left: 30px;
        input{
           width: 100%;
           height: auto;
           min-height: 30px;      
        }
   
        .info{       border: none;
            width: auto;     
         display: flex;
         justify-content: start;       
            margin: 0;
 
    }   
    }
 
  }
  .p3{
     margin: 0;
     padding: 0;
      color: #ffffff;
    }
    li{
      width: 100%;
    }
  }




.btn{         
    .input{     padding: 0;
               height:auto;
      .content2{  
        height: auto;
        display: flex;
        flex-direction: row;
        button{
    
          height: 50px;
          width: 100px;
        }
      }
    }
   
   
}
.list1{
  li{
    justify-content: center;
  }

}
`;
export const QueryList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [listType, setListType] = useState("after");
  const [view, setView] = useState();
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    selectQury()
  }, [refresh])
  const selectQury = async () => {
    console.log('질문 가져오는 axios 실행')
    try {
      const res = await QueryAxiosApi.selectQueryList();
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const replyOpen = (e) => {
    if (e !== view) {
      setView(e)
    } else {
      setView(-1)
    }

  }
  return (

    <MemberListCss>
      <div className="content1">
        <ul>
          <li
            onClick={() => {
              navigate("/memberList");
            }}
          >
            회원 관리
          </li>
          <li
            onClick={() => {
              navigate("/Report");
            }}
          >
            신고 관리
          </li>
          <li
            className={` ${listType !== "" ? "active" : ""
              } `}
            onClick={() => { setListType("after") }}
          >
            문의 관리
          </li>
          <li
            className={` ${listType === "after" ? "active" : ""
              } font`}
            onClick={() => { setListType("after") }}
          >
            문의 보기
          </li>
          <li
            className={` ${listType === "before" ? "active" : ""
              } font`}
            onClick={() => { navigate("../QueryWrite") }}
          >
            FAQ 등록
          </li>
        </ul>
      </div>
      <div className="content2">
        <QueryViewCss>
          <div className="info">
            <ul>
              <li>문의 번호</li>
              <li>유형</li>
              <li style={{ width: "400px" }}>문의 제목</li>
              <li>회원 닉네임</li>
            </ul>
          </div>
          <div className="query">
            <div className="content">
              {data && data.map((pick, index) => (<>
                <ul className="list1" key={index} style={{ backgroundColor: pick.status === "답변 완료" ? " #3C84F8" : "inherit" }} onClick={() => { replyOpen(index) }}>


                  <li className="p1">{pick.id}</li>
                  <li className="p1">{pick.division}</li>
                  {/* <li className="p1">{pick.queryImg}</li> */}
                  <li style={{ width: "400px" }}>{pick.title}</li>
                  {pick.often === "FAQ" ?
                    <li>  <p className="p3">"FAQ"</p></li>
                    : <li className="p1">{pick.questioner.nickName}</li>

                  }
                </ul >

                {view === index && <>
                  <li>
                    <QueryView list={data[index]} setRefresh={setRefresh}></QueryView>  </li>
                  <li>
                    <div className="btn">
                      <ReplyInsert list={data[index]} setRefresh={setRefresh} ></ReplyInsert>
                    </div>
                  </li>
                </>
                }
              </>))
              }</div>
          </div>
        </QueryViewCss>
      </div >
    </MemberListCss >
  );
};
