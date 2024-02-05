import { useEffect, useState } from "react";
import { styled } from "styled-components";
import down from "../../images/bown.svg";
import { UpdateActive } from "../../component/admin/UpdateActive";
import { UpdateReportActive } from "../../component/admin/UpdateReportActive";
import { DeleteReport } from "../../component/admin/DeleteReport";
import { ReportRead } from "../../component/admin/ReportRead";

const ModalStyle = styled.div`
z-index: 9999;
height: auto;
  .modal {
    
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
   display: flex;
    justify-content: center;
    align-items: center;
      .aa{
             width: 500px;
            height: 500px;
  }
  }


`;


export function ImgModal({ open, setOpen, url }) {

  return (
    <ModalStyle onClick={() => { setOpen(!open) }}>
      {open &&
        <div className="modal">
          <img className="aa" src={url} alt="이미지"></img>
        </div>
      }
    </ModalStyle>
  );
}
