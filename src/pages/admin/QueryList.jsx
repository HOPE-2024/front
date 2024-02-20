import { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { QueryAxiosApi } from "../../api/QueryAxiosApi";
import { MemberListCss } from "../../css/admin/ReportCss";
import { QueryView } from "./QueryView";
import { ReplyInsert } from "../../component/admin/ReplyInsert";
import { AdminMenu } from "../../component/admin/AdminMenu";

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
  const menuClick = (tabName) => {
    setListType(tabName);

  };
  return (

    <MemberListCss>
      <div className="left">
        <AdminMenu listType={listType} menuClick={menuClick} navigate={navigate} setListType={setListType}></AdminMenu>
      </div>
      <div className="right qureyList">
        <div className="list1 backA">
          <ul>
            <li>문의 번호</li>
            <li>유형</li>
            <li>문의 제목</li>
            <li>회원 닉네임</li>
            <li>답변 상황</li>
          </ul>
        </div>


        {data && data.map((pick, index) => (
          <div className={pick.status !== "답변 완료" ? "memberA list1" : "memberB list1"}  >
            <ul key={index} onClick={() => { replyOpen(index) }}>
              <li >{pick.id}</li>
              <li>{pick.division}</li>
              {/* <li className="p1">{pick.queryImg}</li> */}
              <li >{pick.title}</li>
              {pick.often === "FAQ" ?
                <li>  <p className="p3">"FAQ"</p></li>
                : <li>{pick.questioner.nickName}</li>
              }
              <li style={{ position: "relative" }} >{pick.status}</li>
            </ul >
            {view === index && <div className="query">
              <li>
                <QueryView list={data[index]} setRefresh={setRefresh}></QueryView>  </li>
              <li>
                <div className="btn">
                  <ReplyInsert list={data[index]} setRefresh={setRefresh} ></ReplyInsert>
                </div>
              </li>
            </div>
            }
          </div>))
        }</div>


    </MemberListCss >
  );
};