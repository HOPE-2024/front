






export const AdminMenu = ({ listType, menuClick, navigate, setListType }) => {

    return (
        <>
            <ul>
                <li
                    onClick={() => {
                        navigate("/memberList");
                    }}
                >
                    회원 관리
                </li>
                <li style={listType !== "all" ? { display: "none" } : null}
                    className={`${listType === "all" ? "active" : ""} font`}
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
                    확인 전
                </li>
                <li
                    className={` ${listType === "after" ? "active" : ""
                        } font`}
                    onClick={() => menuClick("after")}
                >
                    확인 후
                </li>
                <li
                    onClick={() => {
                        navigate("/queryList");
                    }}
                >
                    문의 관리
                </li>
                <li
                    onClick={() => {
                        navigate("/MedicineWrite");
                    }}
                >
                    약품 등록
                </li>

            </ul>

        </>
    )
}