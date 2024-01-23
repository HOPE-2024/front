import { useState } from "react";
import styled from "styled-components"
import { Button } from '../../utils/button';
import { useNavigate } from "react-router-dom";
import { MemberListCss } from "../../css/admin/Report";

export const MemberList = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("allMembers"); // 초기에 "모든 회원"이 선택되어 있는 상태

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
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
    const memberSearch = () => {
        alert(1)
    }
    return (
        <MemberListCss>
            <div className="content1">
                <ul>
                    <li>회원 관리</li>
                    <li
                        className={` ${activeTab === "allMembers" ? "active" : ""} font`}
                        onClick={() => handleTabClick("allMembers")}
                    >
                        모든 회원
                    </li>
                    <li
                        className={` ${activeTab === "chatRestricted" ? "active" : ""} font`}
                        onClick={() => handleTabClick("chatRestricted")}
                    >
                        채팅 정지 회원
                    </li>
                    <li
                        className={` ${activeTab === "blockedMembers" ? "active" : ""} font`}
                        onClick={() => handleTabClick("blockedMembers")}
                    >
                        차단 회원
                    </li>
                    <li onClick={() => { navigate('/Report') }}>신고 내용</li>
                </ul>
            </div>


            <div className="content2">
                <div className="search">
                    <input type="text" />
                    <Button
                        width={"60px"}
                        height={"30px"}
                        children={'검 색'}
                        active={true}
                        clickEvt={() => memberSearch()}
                    />
                </div>
                <div className="list">
                    {data.map((item, index) => (
                        <div className={`list1 ${index % 2 === 0 ? 'blue' : ''}`}>
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
                                    <li>{item.id}</li>
                                    <li>{item.name}</li>
                                    <li>{item.nickname}</li>
                                    <li style={{ height: "30px", marginTop: "7px" }}>{item.mail}</li>
                                    <li>{item.contact}</li>
                                    <li>{item.status}</li>
                                </ul>
                            </div>


                        </div>))}
                </div>
            </div>
        </MemberListCss>
    )
}