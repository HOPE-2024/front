import { useState } from "react";
import styled from "styled-components"

const MemberListCss = styled.div`
    width: 1280px;
    border: 2px solid red;
    height: auto;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    .content1{
   width: 200px;
   height: auto;
   font-size: 24px;
   li{
    margin: 10px;
   }
   .font{
    font-size: 18px;
    margin-left: 35px;
   }
    }
    .content2{
         display: flex;
         flex-direction: column;
         width:  calc(100% - (200px));
         flex-wrap: wrap;
        .list1 {
    border: 1px solid black;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: #d6eff8;
    margin: 5px;
  }
  .list1.blue {
background:white;
}
  .listOption {

    border-radius: 10px;
    padding: 0;
    margin: 0;
    ul {
      width: 100%;
      height: auto;
      padding: 0;
      margin: 0;
      list-style: none;
      margin-left: 10px; 
      display: flex;
    flex-direction: row;
      li {
        width: 150px;
        height: 20px;
        margin-top: 10px;
        word-wrap: break-word;
      }
    }
  }
  .list1-1 {
    width: 70px;
    height: 100%;
    border-radius: 10px;
  }
  .list1-2 {
    width:100%;
    height: 100%;
    border-radius: 10px;
  }
    }
`;
export const MemberList2 = () => {
  const [data, setData] = useState([
    { name: "홍길동", id: "길동이여라", mail: "yanwsaasdasdsadahjk2@naver.com", nickname: "길똥아", contact: "010-1212-4545", status: "일반" }
    , { name: "홍길동", id: "길동이여라", mail: "ydhjk2@naver.com", nickname: "길똥아", contact: "010-1212-4545", status: "일반" }
    , { name: "홍길동", id: "길동이여라", mail: "yanwsadhsadsdjk2@naver.com", nickname: "길똥아", contact: "010-1212-4545", status: "일반" }
    , { name: "홍길동", id: "길동이여라", mail: "yanwsadhjk2@naver.com", nickname: "길똥아", contact: "010-1212-4545", status: "일반" }
    , { name: "홍길동", id: "길동이여라", mail: "yanwsadhjk2@naver.com", nickname: "길똥아", contact: "010-1212-4545", status: "일반" }
    , { name: "홍길동", id: "길동이여라", mail: "yanwsadhjk2@naver.com", nickname: "길똥아", contact: "010-1212-4545", status: "일반" }
    , { name: "홍길동", id: "길동이여라", mail: "yanwsadhjk2@naver.com", nickname: "길똥아", contact: "010-1212-4545", status: "일반" }
    , { name: "홍길동", id: "길동이여라", mail: "yanwsadhjk2@naver.com", nickname: "길똥아", contact: "010-1212-4545", status: "일반" }
    , { name: "홍길동", id: "길동이여라", mail: "yanwsadhjk2@naver.com", nickname: "길똥아", contact: "010-1212-4545", status: "일반" }

  ]);
  return (
    <MemberListCss>
      <div className="content1">
        <ul>
          <li>회원 관리</li>
          <li className="font">모든 회원</li>
          <li className="font">채팅 정지 회원</li>
          <li className="font">차단 회원</li>
          <li>신고 내용</li>
        </ul>
      </div>
      <div className="content2">
        {/* <div className="list1-1 listOption">
          <ul>
            <li>아이디</li>
            <li>이름</li>
            <li>닉네임</li>
            <li style={{ height: "30px" }}>이메일</li>
            <li style={{ height: "30px" }}>이메일</li>
            <li>연락처</li>
            <li>상태</li>
          </ul>
        </div> */}
        {data.map((item, index) => (
          <div className={`list1 ${index % 2 === 0 ? 'blue' : ''}`}>
            <div className="list1-2 listOption">
              <ul>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.nickname}</li>
                <li style={{ width: "300px" }}>{item.mail}</li>
                <li style={{ width: "200px" }}>{item.contact}</li>
                <li >{item.status}</li>
              </ul>
            </div>


          </div>))}
      </div>
    </MemberListCss>
  )
}