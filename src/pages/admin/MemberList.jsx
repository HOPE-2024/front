import { useEffect, useState } from "react";
import { Button } from "../../utils/Button";
import { useNavigate } from "react-router-dom";
import { MemberListCss } from "../../css/admin/Report";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";

export const MemberList = () => {
  const navigate = useNavigate();
  const [listType, setListType] = useState("all");

  const [data, setData] = useState([]); // 초기에 "모든 회원"이 선택되어 있는 상태

  const menuClick = (tabName) => {
    setListType(tabName);
  };

  const memberSearch = () => {

  };
  //화면 랜더링 시  데이터를 가져옴
  useEffect(() => {
    if (listType == 'all') {
      memberList();
    } if (listType == 'chatting') {
      chattingMemberList();

    } if (listType == 'stop') {
      stopMemberList();
    }

  }, [listType]);

  //모든 회원 조회
  const memberList = async () => {
    console.log('모든 회원 조회 axios 실행')
    try {
      const res = await AdminAxiosApi.selectMemberList();
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //채팅 정지 회원 조회
  const chattingMemberList = async () => {
    console.log('모든 회원 조회 axios 실행')
    try {
      const res = await AdminAxiosApi.chattingMemberList();
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //정지 회원 조회
  const stopMemberList = async () => {
    console.log('모든 회원 조회 axios 실행')
    try {
      const res = await AdminAxiosApi.stopMemberList();
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MemberListCss>
      <div className="content1">
        <ul>
          <li>회원 관리</li>
          <li
            className={` ${listType === "allMembers" ? "active" : ""} font`}
            onClick={() => menuClick("all")}
          >
            모든 회원
          </li>
          <li
            className={` ${listType === "chatRestricted" ? "active" : ""
              } font`}
            onClick={() => menuClick("chatting")}
          >
            채팅 정지 회원
          </li>
          <li
            className={` ${listType === "blockedMembers" ? "active" : ""
              } font`}
            onClick={() => menuClick("stop")}
          >
            차단 회원
          </li>
          <li
            onClick={() => {
              navigate("/Report");
            }}
          >
            신고 내용
          </li>
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
            <div className={`list1 ${index % 2 === 0 ? "blue" : ""}`}>
              <div key={index} className="list1-1 listOption">
                <ul>
                  <li>아이디</li>
                  <li>이름</li>
                  <li>닉네임</li>
                  <li style={{ height: "30px" }}>이메일</li>
                  <li>연락처</li>
                  <li>상태</li>
                </ul>
              </div>

              <div className="list1-2 listOption">
                <ul>
                  <li>{item.memberId}</li>
                  <li>{item.name}</li>
                  <li>{item.nickName}</li>
                  <li style={{ height: "30px", marginTop: "7px" }}>
                    {item.email}
                  </li>
                  <li>{item.phone}</li>
                  <li>{item.active}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MemberListCss>
  );
};
