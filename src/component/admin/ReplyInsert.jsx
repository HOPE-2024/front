import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../utils/Button";
import { InsertReport } from "./InsertReport";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";
import { useNavigate } from "react-router-dom";
import { DeleteQuery } from "./DeleteQuery";
const ReplyInsertCss = styled.div`
  width  :100% ;
  height: auto;
  .input{

    width: 100%;
   margin-top: 20px;
    height: auto;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    .content1{ 
        margin: 0;
        width: 100%;
        height: 120px; 
        display: flex;
       justify-content: center;

    }    
 
    .content2{
        margin: 0;
        width: 100%;  
        height: 40px;
        display: flex;
       justify-content: center;
       margin-top: 10px;
       button{
        margin: 20px 10px;
        height: 50px;
       }
    }
  }
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
        margin-top: 5px;
        width: 95%;
        margin-left: 30px;
        input{
           width: 100%;
           min-height: 30px;
        }
   
        .info{
            width: auto;     
         display: flex;
         justify-content: start;      

         .delete{
            width: 50px;     
            height: 30px;
            border: 2px solid  #adadad ;
            display: flex;
            justify-content: center;
            margin-left: 10px;       
            font-size  : 12px ;
         }
      :hover{
            border: 2px solid #023b96; 
         }
    }
    }
    
  }
    padding-bottom: 50px;
`;
const InputBox = styled.textarea`
 width: 90%;
 height: 50%;
 padding: 10px;
 &:hover  {
      border: 3px #023b96 solid;
    }
`;

export const ReplyInsert = ({ list, setRefresh }) => {
    const [newReply, setNewReply] = useState('')
    const navigate = useNavigate();
    const InsertReply = async (ReplyDto) => {
        console.log('댓글 등록 실행')
        try {
            const res = await AdminAxiosApi.InsertReply(ReplyDto);
            console.log(res.data);
            setNewReply('')
            setRefresh(prevRefresh => !prevRefresh);
        } catch (error) {
            console.log(error);
        }
    };

    const submit = async () => {
        const ReplyDto = {
            answer: newReply,
            queryId: list.id,
        };
        await InsertReply(ReplyDto)
    }
    const edit = () => {
        navigate("../QueryEdit/" + list.id)
    }
    const delete1 = async () => {
        await DeleteQuery(list.id)
        setRefresh(prevRefresh => !prevRefresh);
    }
    return (
        <ReplyInsertCss>
            <div className="input">
                <div className="content1" style={{ borderBottom: "none" }}>
                    <InputBox placeholder="댓글" value={newReply} onChange={(e) => { setNewReply(e.target.value) }} />
                </div>
                <div className="content2">
                    <Button width={"100px"} children={"댓글 등록"} clickEvt={submit}></Button>
                    <Button width={"100px"} children={"문의 수정"} clickEvt={edit}></Button>
                    <Button width={"100px"} children={"문의 삭제"} clickEvt={delete1}></Button>
                    {/* <Button children={"문의 글 삭제"} clickEvt={submit2}></Button> */}
                </div>
            </div>
        </ReplyInsertCss >
    );
};