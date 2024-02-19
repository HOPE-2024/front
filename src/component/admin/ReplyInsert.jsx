import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../utils/Button";

import { useNavigate } from "react-router-dom";
import { DeleteQuery } from "./DeleteQuery";
import { QueryAxiosApi } from "../../api/QueryAxiosApi";
const ReplyInsertCss = styled.div`
  width: 100%;
  margin: 0 auto;
  .content1{
   display: flex;
   justify-content: center;
  }
  .content2{
   display: flex;
   justify-content: center;
   margin-top: 10px;
   padding-bottom: 20px;
   button{
    margin: 0 10px;
   }
  }
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
    const nickName = localStorage.getItem("nickName");
    const InsertReply = async (ReplyDto) => {
        console.log('댓글 등록 실행')
        try {
            const res = await QueryAxiosApi.insertReply(ReplyDto);
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
                    {list.questioner.nickName === nickName && <Button width={"100px"} children={"문의 수정"} clickEvt={edit}></Button>}

                    <Button width={"100px"} children={"문의 삭제"} clickEvt={delete1}></Button>
                    {/* <Button children={"문의 글 삭제"} clickEvt={submit2}></Button> */}
                </div>
            </div>
        </ReplyInsertCss >
    );
};