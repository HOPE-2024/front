import { useEffect, useState } from "react";
import { Button } from "../../utils/Button";
import { ReportMadal } from "../../utils/modal/ReportMadal";
import { useNavigate } from "react-router-dom";
import { MemberListCss } from "../../css/admin/Report";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";

export const Report = () => {
  //회원 조회 axios를 선택할 때 사용
  const [listType, setListType] = useState("all");
  const navigate = useNavigate();
  const [open, setOpen] = useState("");
  const [list, setList] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    selectReportList();
  }, [open]);

  const selectReportList = async () => {
    try {
      const res = await AdminAxiosApi.selectReportList();
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const redate = (e) => {
    const dateObject = new Date(e);
    return <>{dateObject.toLocaleDateString()}</>;
  };
  const memberSearch = () => {
    alert(1);
  };
  const menuClick = (tabName) => {
    setListType(tabName);
  };
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

          <li style={{ color: " #023B96" }}>신고 내용</li>
          <li
            className={` ${listType === "chatting" ? "active" : ""} font`}
            onClick={() => menuClick("all")}
          >
            모두 보기
          </li>
          <li className={"font"}>처리 전</li>
          <li className={"font"}>처리 완료</li>
        </ul>
      </div>

      <div className="content2">
        <div className="search">
          <input type="text" />
          <Button
            width={"60px"}
            height={"30px"}
            children={"검 색"}
            active={true}
            clickEvt={() => memberSearch()}
          />
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
      </div>
      <ReportMadal open={open} setOpen={setOpen} list={list}></ReportMadal>
    </MemberListCss>
  );
};
