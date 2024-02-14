import { useEffect, useState } from "react";
import { Button } from "../../utils/Button";
import { ReportMadal } from "../../utils/modal/ReportMadal";
import { useNavigate } from "react-router-dom";
import { MemberListCss } from "../../css/admin/Report";
import { SelectReportList } from "../../component/admin/SelectReportList";
import { SearchVar } from "../../component/admin/SearchVar";
import { CurrentVar } from "../../component/admin/CurrentVar";

export const Report = () => {
  //회원 조회 axios를 선택할 때 사용
  const [listType, setListType] = useState("all");
  const navigate = useNavigate();
  const [open, setOpen] = useState("");
  const [list, setList] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  const redate = (e) => {
    const dateObject = new Date(e);
    return <>{dateObject.toLocaleDateString()}</>;
  };

  const menuClick = (tabName) => {
    setListType(tabName);
    setCurrentPage(0)

  };

  //화면 랜더링 시 메뉴에 맞게 데이터를 가져옵니다.
  useEffect(() => {
    SelectReportList(listType, setData, currentPage, setMaxPage);

  }, [listType, open, currentPage]);


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

          <li className={` ${listType === "all" || listType === "after" || listType === "before" ? "active" : ""} `}>신고 관리</li>
          <li
            className={` ${listType === "all" ? "active" : ""} font`}
            onClick={() => menuClick("all")}
          >
            모두 보기
          </li>
          <li
            className={` ${listType === "before" ? "active" : ""
              } font`}
            onClick={() => menuClick("before")}
          >
            읽기 전
          </li>
          <li
            className={` ${listType === "after" ? "active" : ""
              } font`}
            onClick={() => menuClick("after")}
          >
            읽기 후
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

      <div className="content2">
        <div className="search">
          <SearchVar list={"report"} setData={setData} >
          </SearchVar>
        </div>
        <div className="list">

          {data.map((item, index) => (
            <div
              key={index}
              className={`list1 ${index % 2 === 0 ? "blue" : ""}`}
              onClick={() => {
                // 모달이 이미 열려 있지 않은 경우에만 열기
                setOpen(true);
                setList(item);
              }}
            >
              <div className="list1-1 listOption">
                <ul>
                  <li>신고대상</li>
                  <li>신고자</li>
                  <li>신고일</li>
                  <li>신고 분류</li>
                  <li>신고 사유</li>
                  <li>상태</li>
                </ul>
              </div>

              <div className="list1-2 listOption">
                <ul>
                  <li>{item.reported.nickName}</li>
                  <li>{item.reporter.nickName}</li>
                  <li>{redate(item.date)}</li>
                  <li>{item.check}</li>
                  <li>{item.reason}</li>
                  <li>{item.status}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="currentVar">
          <CurrentVar maxPage={maxPage} currentPage={currentPage} setCurrentPage={setCurrentPage}></CurrentVar>
        </div>

      </div>
      <ReportMadal open={open} setOpen={setOpen} list={list}></ReportMadal>
    </MemberListCss>
  );
};
