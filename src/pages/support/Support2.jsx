import { QueryList } from "../admin/QueryList"
import styled from "styled-components"
import { QueryView } from "../admin/QueryView";
import { ReplyInsert } from "../../component/admin/ReplyInsert";
import { useEffect, useState } from "react";
import { SelectMyQuery } from "../../component/admin/SelectMyQuery";



export const Support2 = () => {
    const [data, setData] = useState([]);
    const [view, setView] = useState(-1);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        SelectMyQuery(setData);
    }, [refresh])
    const open = (e) => {
        if (view !== e) {
            setView(e)
        } else {
            setView(-1)
        }
    }
    return (
        <>
            <div className="content3"><p>내 문의 글 보기</p></div>
            <div className="content4">
                {data.map((option, index) => (
                    <div key={index} >
                        <ul>
                            <li className="title" onClick={() => { open(index) }}> <p>{option.title}</p>
                                {view === index ? <h1>＞</h1> : <h1 style={{ color: "white" }}>＜</h1>}
                            </li>
                            {view === index && <>
                                <li className="content">
                                    <QueryView list={data[index]} setRefresh={setRefresh}></QueryView>  </li>
                                <li><ReplyInsert list={data[index]} setRefresh={setRefresh}></ReplyInsert></li>

                            </>}
                        </ul>
                    </div>
                ))}
            </div>

        </>
    )
}