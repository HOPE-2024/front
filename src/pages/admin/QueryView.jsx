
import { QueryViewCss } from "../../css/admin/QueryViewCss";
import { Reply } from "../../component/admin/Reply";
import { useState } from "react";
import { ImgModal } from "../../utils/modal/ImgModal";

export const QueryView = ({ list, setRefresh }) => {
    const [open, setOpen] = useState(false);
    return (
        <QueryViewCss>
            <div className="Viewa">
                <div>
                    <input value={list.division} className="inputA"></input>
                </div>

            </div>
            <div className="Viewa">
                <div className="type">
                    <input value={list.title} ></input>
                </div>
            </div>
            <div className="Viewb">
                <div >{list.substance}
                </div>
            </div>
            {list.queryImg &&
                <div className="ViewC">
                    <div>        <p>첨부 이미지 :</p> </div>
                    <div>
                        <img src={list.queryImg} onClick={() => { setOpen(true) }} alt=""></img> </div>

                </div>}
            <Reply
                list={list.reply}
                id={list.id}
                setRefresh={setRefresh}
            />
            <ImgModal
                url={list.queryImg}
                open={open}
                setOpen={setOpen}
            ></ImgModal>
        </QueryViewCss >
    );
};
