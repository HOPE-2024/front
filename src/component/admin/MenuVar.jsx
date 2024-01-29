
import { useNavigate } from "react-router-dom";


export const MenuVar = ({ listType, setListType }) => {
    const navigate = useNavigate();
    const menuClick = (e) => {
        setListType(e);
    };
    return (
        <ul>
            <li className={` ${listType === "all" || listType === "chatting" || listType === "stop" ? "active" : ""} `}>회원 관리</li>
            <li
                className={` ${listType === "all" ? "active" : ""} font`}
                onClick={() => { menuClick("all"); navigate('/memberlist') }}
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
            <li className={` ${listType === "reportAll" || listType === "before" || listType === "after" ? "active" : ""} `}>신고 관리</li>
            <li
                className={` ${listType === "reportAll" ? "active" : ""
                    } font`}
                onClick={() => { menuClick("reportAll"); navigate('/Report') }}
            >
                모두 보기
            </li>
            <li
                className={` ${listType === "before" ? "active" : ""
                    } font`}
                onClick={() => menuClick("before")}
            >
                처리 전
            </li>
            <li
                className={` ${listType === "after" ? "active" : ""
                    } font`}
                onClick={() => menuClick("after")}
            >
                처리 후
            </li>
        </ul>
    )
}