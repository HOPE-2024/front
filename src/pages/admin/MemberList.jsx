import { useEffect, useState } from "react";
import { ChangeActive } from "../../component/admin/ChangeActive";
import { useNavigate } from "react-router-dom";
import { MemberListCss } from "../../css/admin/ReportCss";
import { SelectMemberList } from '../../component/admin/SelectMemberList';
import { SearchVar } from "../../component/admin/SearchVar";
import { CurrentVar } from "../../component/admin/CurrentVar";



export const MemberList = () => {
  const navigate = useNavigate();
  //회원 조회 axios를 선택할 때 사용
  const [listType, setListType] = useState("all");

  //회원 id 저장
  const [id, setId] = useState('');
  //데이터 출력 값 저장
  const [data, setData] = useState([]);

  //status변경 창을 열기 위한 입력 값 저장(index와 status가 같으면 상태 변경 창이 나타남)
  const [status, setStatus] = useState('');
  //회원 상태
  const [active, setActive] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);




  //회원 조회 클릭시 listType을 변경 후  useEffect로 변경된 데이터를 가져옵니다.
  const menuClick = (tabName) => {
    setListType(tabName);
    setCurrentPage(0)

  };

  //화면 랜더링 시 메뉴에 맞게 데이터를 가져옵니다.
  useEffect(() => {
    setStatus('')
    SelectMemberList(listType, setData, currentPage, setMaxPage);
  }, [listType, active, currentPage]);


  return (
    <MemberListCss>
      <div className="left">
        <ul>
          <li className={` ${listType === "all" || listType === "chatting" || listType === "stop" ? "active" : ""} `}>회원 관리</li>
          <li
            className={` ${listType === "all" ? "active" : ""} font`}
            onClick={() => menuClick("all")}
          >
            모든 회원
          </li>
          <li
            className={` ${listType === "chatting" ? "active" : ""
              } font`}
            onClick={() => menuClick("chatting")}
          >
            채팅 정지 회원
          </li>
          <li
            className={` ${listType === "stop" ? "active" : ""
              } font`}
            onClick={() => menuClick("stop")}
          >
            정지 회원
          </li>
          <li
            onClick={() => {
              navigate("/Report");
            }}
          >
            신고 관리
          </li>
          <li
            onClick={() => {
              navigate("/queryList");
            }}
          >
            문의 관리
          </li>
        </ul>
      </div>

      <div className="right">
        <div className="search">
          <SearchVar list={"member"} setData={setData} >

          </SearchVar>

        </div>
        <div className="list">
          <div className="list1 backA">
            <ul>
              <li className="fontA">아이디</li>
              <li className="fontA">이름</li>
              <li className="fontA">닉네임</li>
              <li className="fontB">이메일</li>
              <li className="fontB">연락처</li>
              <li className="fontA">상태</li>
            </ul>
          </div>
          {data && data.map((item, index) => (
            <div className="list1 memberA">
              <ul onClick={() => { setStatus(index); setId(item.id); setActive(item.active) }}>
                <li className="fontA">{item.memberId}</li>
                <li className="fontA">{item.name}</li>
                <li className="fontA">{item.nickName}</li>
                <li className="fontB" >
                  <p> {item.email}</p>
                </li>
                <li className="fontB">{item.phone}</li>
                <li className="fontA">
                  {item.active}
                </li>
              </ul>
              {index === status && <ChangeActive setStatus={setStatus} id={id} setActive={setActive} />}
            </div>

          ))}

        </div>

        <div className="currentVar">
          {maxPage > 1 && <CurrentVar maxPage={maxPage} currentPage={currentPage} setCurrentPage={setCurrentPage}></CurrentVar>}

        </div>

      </div>
    </MemberListCss>
  );
};