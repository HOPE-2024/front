import { useState } from "react";
import { Button } from "../../utils/Button";
import { ReportMadal } from "./ReportMadal";
import { useNavigate } from "react-router-dom";
import { MemberListCss } from "../../css/admin/Report";
export const Report = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState("");
  const [list, setList] = useState("");

  const [data, setData] = useState([
    {
      reporter: "홍길동",
      reported: "길동이여라",
      date: new Date,
      check: "욕설",
      reason: "욕을합니다욕을합니다욕을합니다욕을합니다욕을합니다욕을합니다욕을합니다",
      status: "일반",
    },
    {
      reporter: "홍길1동",
      reported: "길동이여라",
      date: new Date(2024, 1, 11),
      check: "혐오발언",
      reason: "혐호합니다",
      status: "일반",
    },
    {
      reporter: "홍길동",
      reported: "길동이여라",
      date: new Date(2024, 0, 23),
      check: "광고/스팸",
      reason: "길똥아",
      status: "일반",
    },
    {
      reporter: "홍길동",
      reported: "길동이여라",
      date: new Date(2024, 0, 23),
      check: "부적절한 아이디",
      reason: "길똥아",
      status: "일반",
    },
    {
      reporter: "홍길동",
      reported: "길동이여라",
      date: new Date(2024, 0, 23),
      check: "yanwsaasdasdsadahjk2@naver.com",
      reason: "길똥아",
      status: "일반",
    },
    {
      reporter: "홍길동",
      reported: "길동이여라",
      date: new Date(2024, 0, 23),
      check: "yanwsaasdasdsadahjk2@naver.com",
      reason: "길똥아",
      status: "일반",
    },
    {
      reporter: "홍길동",
      reported: "길동이여라",
      date: new Date(2024, 0, 23),
      check: "yanwsaasdasdsadahjk2@naver.com",
      reason: "길똥아",
      status: "일반",
    },
    {
      reporter: "홍길동",
      reported: "길동이여라",
      date: new Date(2024, 0, 23),
      check: "yanwsaasdasdsadahjk2@naver.com",
      reason: "길똥아",
      status: "일반",
    },
    {
      reporter: "홍길동",
      reported: "길동이여라",
      date: new Date(2024, 0, 23),
      check: "yanwsaasdasdsadahjk2@naver.com",
      reason: "길똥아",
      status: "일반",
    },
    {
      reporter: "홍길동",
      reported: "길동이여라",
      date: new Date(2024, 0, 23),
      check: "yanwsaasdasdsadahjk2@naver.com",
      reason: "길똥아",
      status: "일반",
    },
    {
      reporter: "홍길동",
      reported: "길동이여라",
      date: new Date(2024, 0, 23),
      check: "yanwsaasdasdsadahjk2@naver.com",
      reason: "길똥아",
      status: "일반",
    },
  ]);
  const memberSearch = () => {
    alert(1);
  };
  return (
    <MemberListCss>
      <div className="content1">
        <ul>
          <li>회원 관리</li>
          <li
            className={"font"}
            onClick={() => {
              navigate("/memberList");
            }}
          >
            모든 회원
          </li>
          <li className={"font"}>채팅 정지 회원</li>
          <li className={"font"}>차단 회원</li>
          <li style={{ color: " #023B96" }}>신고 내용</li>
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
                  <li>{item.reporter}</li>
                  <li>{item.reported}</li>
                  <li>{item.date.toLocaleDateString()}</li>
                  <li>{item.check}</li>
                  <li>{item.reason}</li>
                  <li>{item.status}</li>
                </ul>
              </div>


            </div>
          ))}
        </div>
      </div>
      <ReportMadal
        open={open}
        setOpen={setOpen}
        list={list}
      ></ReportMadal>
    </MemberListCss >
  );
};
