import { useEffect, useRef, useState } from "react";

import { Button } from "../../utils/Button";
import { storage } from "../../api/Firebase";
import { InputBox, QueryViewCss } from "../../css/admin/QueryViewCss";
import { InsertQuery } from "../../component/admin/InsertQuery";
import { UpdateQuery } from "../../component/admin/UpdateQuery";
import { useParams } from "react-router-dom";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";
import { Reply } from "../../component/admin/Reply";
import { ImgModal } from "../../utils/modal/ImgModal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export const QueryView = ({ list }) => {


    return (
        <QueryViewCss>
            <div className="Viewa">
                <div className="type">
                    <input value={list.division} className="c"></input>
                </div>
            </div>
            <div className="Viewb">
                <div >{list.substance} </div>
            </div>
            <Reply
                list={list.reply}
                id={list.id}
            />

        </QueryViewCss >
    );
};
