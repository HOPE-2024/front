
import { QueryViewCss } from "../../css/admin/QueryViewCss";
import { Reply } from "../../component/admin/Reply";
import { useState } from "react";
import { ImgModal } from "../../utils/modal/ImgModal";
import * as DOMPurify from 'dompurify';
import styled from "styled-components";

const SubstanceCss = styled.div`
    .ql-align-center {
  text-align: center;
}

/* 기타 정렬에 대한 스타일도 동일하게 적용할 수 있습니다. */
.ql-align-left {
  text-align: left;
}

.ql-align-right {
  text-align: right;
}
`;
export const QueryView = ({ list, setRefresh }) => {
    const [open, setOpen] = useState(false);

    const Substance = ({ value }) => {
        const processedDesc = DOMPurify.sanitize(value);
        return <div dangerouslySetInnerHTML={{ __html: processedDesc }} />;
    }

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
                <SubstanceCss>
                    <Substance value={(list.substance)}
                        placeholder="내용"></Substance>
                </SubstanceCss>
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
