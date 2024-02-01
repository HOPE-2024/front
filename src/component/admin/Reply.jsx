import styled from "styled-components";
import { Button } from "../../utils/Button";


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
       
    }
  }
  .output{
    width: 100%; 
    height: auto;
    border-bottom: 1px solid black;
    border-top:solid 1px black;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;      
    line-height :30px ;
    ul{
          display: flex;
          border: 1px solid black;
          flex-direction: column;
          margin: 10px 0;
          border-radius: 10px;
          height: auto;
          padding-bottom: 5px;
          width: 80%;         
        li{
          width: 100%;
        }
    }
    .p1 , .p2{
        margin-top: 5px;
        width: 95%;
        margin-left: 30px;
    }
  }
`;


const InputBox = styled.textarea`
 width: 70%;
 height: 100%;

`;

export const Reply = ({ list }) => {
    console.log(list);
    return (
        <ReplyCss>
            <div className="output">
                {list && list.map((pick, index) => (
                    <ul key={index}>
                        <li className="p1"> {pick.answerer}</li>
                        <li className="p2"> {pick.answer}</li>
                    </ul>
                ))}
            </div>
            <div className="input">
                <div className="content1" style={{ borderBottom: "none" }}>
                    <InputBox placeholder="댓글" />
                </div>
                <div className="content2">
                    <Button children={"댓글 등록"}></Button>
                </div>
            </div>
        </ReplyCss>
    );
};