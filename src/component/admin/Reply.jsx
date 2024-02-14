import styled from "styled-components";
import { Button } from "../../utils/Button";
import { useState } from "react";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";
import { useNavigate } from "react-router-dom";
import { QueryAxiosApi } from "../../api/QueryAxiosApi";
const ReplyCss = styled.div`
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
        margin: 20px 50px;
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
`;






export const Reply = ({ list, id, setRefresh, mode, setMode, submit3 }) => {
    const navigate = useNavigate();
    const [data, setData] = useState('');
    const [show, setShow] = useState();
    const [newReply, setNewReply] = useState();



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
            <div className="output" >
                {list && list.map((pick, index) => (
                    <ul key={index} onClick={() => { setShow(index); setNewReply('') }}>
                        <li className="p1"> <div className="info"> {pick.answerer}
                            {show === index && <>
                                <div className="delete" onClick={() => { deleteSubmit(pick.id) }}>삭제</div>
                                <div className="delete" onClick={() => { updateSubmit(pick.id); }}>수정</div></>
                            }
                        </div></li>
                        {show !== index ? <li className="p2"> {pick.answer}</li> :
                            <li className="p2">
                                <input type="text" value={newReply} onChange={(e) => { setNewReply(e.target.value) }}

                                    placeholder={pick.answer} /></li>}

                    </ul>

                ))}

            </div>
            {/* <div className="input">
                <div className="content1" style={{ borderBottom: "none" }}>
                    <InputBox placeholder="댓글" value={data} onChange={(e) => { setData(e.target.value) }} />
                </div>
                <div className="content2">
                    <Button children={"댓글 등록"} clickEvt={submit}></Button>


                    {mode !== 'edit' &&
                        <Button children={"수 정"} clickEvt={() => { setMode('edit') }}></Button>
                    }
                    {mode === 'edit' &&
                        <Button children={"확 인"} clickEvt={() => { submit3() }}></Button>
                    }
                    <Button children={"문의 글 삭제"} clickEvt={submit2}></Button>
                </div>
            </div> */}
        </ReplyCss>
    );
};