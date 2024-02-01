import { useEffect, useState } from "react";
import styled from "styled-components"
import { Button } from "../../utils/Button"
import { InputBox, QueryCss } from "../../css/admin/QueryCss";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";
import { useParams } from "react-router-dom";
import { Reply } from "../../component/admin/Reply";
const QueryViewCss = styled.div`
  width: 100%;
  height: 100%;

.member{
  margin-top: 10px;
  ul{
    display: flex;
flex-direction: row;
justify-content: center;
  }
  li{
    margin-left: 40px;
  }
}
.content4 ,.content3,.content2 {
  height: auto;
margin-left: 10%;
}
.filebox{
  img{
    height: 400px;
    border: 1px solid black;
  }
}
.content5{
height: auto;
}

`;

export const QueryView = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        selectQury()
    }, [])

    const selectQury = async () => {
        console.log('채팅 정지 회원 조회 axios 실행')
        try {
            const res = await AdminAxiosApi.selectQury(id);
            setData(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <QueryCss>
            <QueryViewCss>
                <div className="content1">
                    <p>문의 내역 </p>
                </div>
                <div className="member">
                    <ul>
                        <li>          회원 닉네임 :
                            {data.questioner && data.questioner.nickName}</li>
                        <li>          회원 이름 :
                            {data.questioner && data.questioner.name}</li>
                        <li>          회원 아이디 :
                            {data.questioner && data.questioner.memberId}</li>
                    </ul>

                </div>
                <div className="content2" >
                    <div className="text">
                        <p>문의 유형 :</p>
                    </div>
                    <div className="type" style={{ border: "none" }}>
                        <p>{data.division}</p>
                    </div>
                </div>
                <div className="content3" style={{ height: "auto" }}>
                    <div className="text">
                        <p>문의 내용 :</p>
                    </div>
                    <div className="textBox">
                        <p>{data.substance}</p>
                    </div>
                </div>
                {data.queryImg && <div className="content4">
                    <div className="text">
                        <p> 첨부 이미지 :</p>
                    </div>
                    <div className="filebox">
                        <img src={data.queryImg} alt=""></img>
                    </div>
                </div>}


            </QueryViewCss>
            <Reply list={data.reply}>

            </Reply>
        </QueryCss>
    );
};
