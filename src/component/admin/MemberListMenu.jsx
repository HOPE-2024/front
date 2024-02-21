






export const MemberListMenu = ({ listType, menuClick, navigate, setListType }) => {

    return (
        <>
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

        </>
    )
}