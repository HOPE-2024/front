import { useEffect, useState } from "react";
import { SelectOftenQuery } from "../../component/admin/SelectOftenQuery";

export const Support1 = () => {
    const [data, setData] = useState([]);
    const [view, setView] = useState(-1);
    console.log(1);
    useEffect(() => {
        SelectOftenQuery(setData);

    }, [])
    const open = (e) => {
        if (view !== e) {
            setView(e)
        } else {
            setView(-1)
        }
    }

    return (
        <>
            <div className="content3"><p>자주 묻는 질문</p></div>
            <div className="content4">
                {data.map((option, index) => (
                    <div key={index} >                        <ul>
                        <li className="title" onClick={() => { open(index) }}> <p>{option.title}</p>
                            {view === index ? <h1>＞</h1> : <h1 style={{ color: "white" }}>＜</h1>}
                        </li>
                        {view === index && <li className="content">   <p>{option.substance}</p></li>}
                    </ul>
                    </div>
                ))}
            </div></>
    )
}