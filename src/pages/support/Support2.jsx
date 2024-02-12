import { QueryList } from "../admin/QueryList"
import styled from "styled-components"

import { QueryView } from "../admin/QueryView";
import { ReplyInsert } from "../../component/admin/ReplyInsert";
import { useEffect, useState } from "react";
import { SelectMyQury } from "../../component/admin/SelectMyQury";



export const Support2 = () => {
    const [data, setData] = useState([]);
    const [view, setView] = useState(-1);
    useEffect(() => {
        SelectMyQury(setData);
    }, [])
    const open = (e)=>{
    
    if(view !== e){
    setView(e) 
   
    }else{ 
        
        setView(-1)
    }
    
    }
    return (
        <>
            <div className="content3"><p>내 문의 글 보기</p></div>
            <div className="content4">
                {data.map((option, index) => (
                    <div key={index} >                        <ul>
                        <li className="title" onClick={() => { open(index) }}> <p>{option.title}</p>
                            {view === index ? <h1>＞</h1> : <h1>＜</h1>}
                        </li>
                        {view === index && <> <li className="content">  <QueryView list={data[index]}></QueryView>  </li>
                            <li><ReplyInsert list={data[index]}></ReplyInsert></li>
                        </>}
                    </ul>
                    </div>
                ))}
            </div>

        </>
    )
}