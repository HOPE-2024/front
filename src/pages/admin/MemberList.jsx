import { useEffect, useState } from "react";
import { Button } from "../../utils/Button";
import { ChangeActive } from "../../component/admin/ChangeActive";
import { useNavigate } from "react-router-dom";
import { MemberListCss } from "../../css/admin/Report";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";
import { InsertMemberList } from '../../component/admin/InsertMemberList';
import { ChattingMemberList } from '../../component/admin/ChattingMemberList';
import { StopMemberList } from '../../component/admin/StopMemberList';
import { SelectMember } from '../../component/admin/SelectMember';


export const MemberList = () => {
  const navigate = useNavigate();
  //회원 조회 axios를 선택할 때 사용
  const [listType, setListType] = useState("all");
  //검색창 입력 값 저장
  const [inputValue, setInputValue] = useState('');
  //회원 id 저장
  const [id, setId] = useState('');
  //데이터 출력 값 저장
  const [data, setData] = useState([]); // 초기에 "모든 회원"이 선택되어 있는 상태
  //status변경 창을 열기 위한 입력 값 저장(index와 status가 같으면 상태 변경 창이 나타남)
  const [status, setStatus] = useState('');
  //회원 상태
  const [active, setActive] = useState('');


  //회원 조회 클릭시 listType을 변경 후  useEffect로 변경된 데이터를 가져옵니다.
  const menuClick = (tabName) => {
    setListType(tabName);
  };
  //검색 버튼 클릭시 axios실행
  const memberSearch = (name) => {
    SelectMember(name, setData, setInputValue, setStatus);
  };

  //화면 랜더링 시 메뉴에 맞게 데이터를 가져옵니다.
  useEffect(() => {
    if (listType === 'all') {
      InsertMemberList(setData);
    } if (listType === 'chatting') {
      ChattingMemberList(setData, setStatus);

    } if (listType === 'stop') {
      StopMemberList(setData, setStatus);
    }
  }, [listType, active]);

  const enter = () => {
    memberSearch(inputValue);
  };
  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      enter();
    }
  };
  return (
    <MemberListCss>
      <div className="content1">
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
            신고 내용
          </li>

        </ul>
      </div>

      <div className="content2">
        <div className="search">
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleEnterKey} />
          <Button
            width={"60px"}
            height={"30px"}
            children={"검 색"}
            active={true}
            clickEvt={() => memberSearch(inputValue)}
          />
        </div>
        <div className="list">
          {data && data.map((item, index) => (

            <div key={index} className={`list1 ${index % 2 === 0 ? "blue" : ""}`}
              onClick={() => { setStatus(index); setId(item.id); setActive(item.active) }}>
              <div className="list1-1 listOption">
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
                  <li className="email" style={{ height: "30px", marginTop: "7px" }}>
                    {item.email}
                  </li>
                  <li>{item.phone}</li>
                  <li>
                    {item.active}
                  </li>
                </ul>
                {index === status && <ChangeActive setStatus={setStatus} id={id} setActive={setActive} />}
              </div>
            </div>
          ))}

        </div>
      </div>
    </MemberListCss>
  );
};
