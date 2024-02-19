import styled from "styled-components";
import { Button } from "../../utils/Button";
import { useEffect, useState } from "react";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";
import { useNavigate } from "react-router-dom";
import { QueryAxiosApi } from "../../api/QueryAxiosApi";
const ReplyCss = styled.div`  
width: 100%;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
height: auto;
margin: 20px 0;
.A{
    height: auto;  
    min-height: 60px;
    width: 100%;
   border:  1px solid black;
  margin:5px 0;
  
}
.Reply1{

 display: flex;
 align-items: center;
 min-height: 30px;
 padding-left: 10px;
.delete{
  border: 1px solid black;  
 display: flex;
 justify-content: center;
  align-items: center;
  margin: 0 5px;
  width: 50px;
  height: 25px;
  border-radius: 10px;
}
}
.Reply2{
    padding: 0;
    margin: 0;
    min-height: 30px;
 display: flex;
 flex-direction: row;
 padding-left: 10px;
 input{
    border: 1px solid #acacac;
    width: 100%;
 }
}
.info{
  
}

`;






export const Reply = ({ list, id, setRefresh, mode, setMode, submit3 }) => {
    const navigate = useNavigate();
    const [data, setData] = useState('');
    const [show, setShow] = useState();
    const [newReply, setNewReply] = useState();

    const nickName = localStorage.getItem("nickName");



    const deleteSubmit = (id) => {
        DeleteReply(id)
    }


    const DeleteReply = async (id) => {
        console.log('댓글 삭제 실행')
        try {
            const res = await QueryAxiosApi.deleteReply(id);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
        // refresh();
        setShow();
        setRefresh(prevRefresh => !prevRefresh);
    };

    const updateSubmit = (id) => {
        console.log(id);
        const ReplyDto = {
            answer: newReply,
            id: id,
        };
        UpdateReply(ReplyDto)
        setData('')
    }

    const UpdateReply = async (ReplyDto) => {

        console.log('댓글 수정 실행')
        try {
            const res = await QueryAxiosApi.UpdateReply(ReplyDto);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
        setShow();
        setRefresh(prevRefresh => !prevRefresh);
    };





    return (
        <ReplyCss>

            {list && list.map((pick, index) => (
                <div className="A">
                    <div className="Reply1" key={index} onClick={() => { setShow(index); setNewReply('') }}>
                        {pick.answerer}
                        {nickName}
                        {show === index && <>
                            <div className="delete" onClick={() => { deleteSubmit(pick.id) }}>삭제</div>
                            {nickName === pick.answerer && <div className="delete" onClick={() => { updateSubmit(pick.id); }}>수정</div>}
                        </>
                        }

                    </div>

                    {show !== index ?
                        <div className="Reply2"> {pick.answer}</div> :
                        <div className="Reply2">
                            <input type="text" value={newReply} onChange={(e) => { setNewReply(e.target.value) }}
                                placeholder={pick.answer} /></div>}



                </div>))}



        </ReplyCss>
    );
};