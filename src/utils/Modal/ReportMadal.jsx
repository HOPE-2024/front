import { useEffect, useState } from "react";
import { styled } from "styled-components";
import down from "../../images/bown.svg";
import { UpdateActive } from "../../component/admin/UpdateActive";
import { InsertReport } from "../../component/admin/InsertReport";
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
  }
  .modalContent {
    width: 400px;
    max-width: 450px;
    height: auto;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    align-items: center;
    .title {
      width: 100%;
      height: 40px;
      background: #3c84f8;
      p {
        color: white;
        font-size: 1.2em;
        margin: 0;
        margin-left: 10px;
        line-height: 40px;
      }
    }
    .content1 {
      width: 340px;
      margin: 0 auto;
      margin-top: 25px;
      border: 2px solid #0a48ac;
    }
    .item1 {
      font-size: 1.1em;
      height: 170px;
    }
    .item2 {
      min-height: 100px;
      height: auto;
      font-size: 1.1em;
    }
    .item3 {
      width: 80%;
      margin: 0 auto;
      margin-top: 20px;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      padding-bottom: 20px;
      button {
        width: 100px;
        height: 45px;
        background: #3c84f8;
        color: white;
      }
    }
  }
`;

const ButtonVar = styled.div`
  display: block;
  height: auto;
  margin: 0 auto;
  min-height: 30px;

  .content1 {
    width: 100%;
    display: flex;
    margin-top: 0px;
    img {
      width: 20px;
      margin-top: 5px;
      margin-left: 10px;
    }
    p {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: -30px;
    }
  }
  &:hover {
    color: red;
    ul {
      display: block;
    }
  }
  ul {
    width: 100%;
    display: none;
  }
  li {
    height: 30px;
    line-height: 30px;
    border: 1px solid #3c84f8;
    width: 340px;
    margin: 0 auto;
    .content2 {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 5px;
`;
const CustomRadio = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #3c84f8;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;

  &:checked {
    background-color: #3c84f8;
    border-color: #3c84f8;
  }

  &:checked::before {
    content: "✔";
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    color: white;
  }
`;
const AA = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0;
`;
export const ReportMadal = ({ open, setOpen, list, member, type }) => {
  //신고 이유 저장
  const [what, setWhat] = useState("");
  const [why, setWhy] = useState("");
  const [view, setView] = useState("");
  const [status, setStatus] = useState("상태 변경 없음");

  //확인 클릭시
  const submit = async () => {
    //회원 상태 변경을 했을 경우에만 업데이트
    if (status !== "상태 변경 없음") {
      //회원 상태 변경
      await UpdateActive(list.reported.id, status);
      const isValueIncluded = data.includes(status);
      if (isValueIncluded) {
        //신고 글 상태 변경
        await UpdateReportActive(list.id, status);
      }
      setOpen(null);
    } else (
      setOpen(false)
    )
  };
  const ReportSubmit = async () => {
    const reportDto = {
      reporter: { nickName: member },
      check: what,
      reason: why
    }
    await InsertReport(reportDto);
    setWhat('')
    setWhy('')
    setOpen(false)
  }

  //취소 클릭시
  const cancel = () => {
    DeleteReport(list.id);
    setOpen(null);
  };
  const [isOpen, setIsOpen] = useState(false);
  const data = ["일반 회원", "7일 정지", "30일 정지", "회원 정지"];
  useEffect(() => {
    if (list && list.reported && list.reported !== ' ' && list.reported !== null) {
      ReportRead(list.id);
      setWhat(list.check)
      setWhy(list.reason)
      setView(list.reported.nickName + "(" + list.reported.active + ")");
    }
  }, [list]);
  return (
    <ModalStyle>
      {open && (
        <div className="modal">
          <div className="modalContent">
            <div className="title">
              <p>신고하기</p>
            </div>
            {type === '채팅' ?
              <ButtonVar
                onMouseOver={() => setIsOpen(true)}
                onMouseOut={() => setIsOpen(false)}
              >
                <div className="content1">
                  <p style={{ height: "30px", marginLeft: "0" }}>{member}</p>{" "}
                </div>
              </ButtonVar>
              :
              <ButtonVar
                onMouseOver={() => setIsOpen(true)}
                onMouseOut={() => setIsOpen(false)}
              >
                <div className="content1">
                  <img src={down} alt="" />
                  <p>{view}</p>{" "}
                </div>
                <ul>
                  {isOpen &&
                    data.map((pick, index) => (
                      <li
                        onClick={(e) => {
                          setIsOpen(false);
                          setView(pick);
                          setStatus(pick);
                        }}
                      >
                        <div className="content2">{pick}</div>
                      </li>
                    ))}
                </ul>
              </ButtonVar>}

            <div className="content1 item1">
              <RadioLabel>
                <CustomRadio
                  type="radio"
                  name="Declaration"
                  value={"욕설"}
                  checked={what === "욕설"}
                  onChange={(e) => setWhat(e.target.value)}
                />
                욕설
              </RadioLabel>
              <RadioLabel>
                <CustomRadio
                  type="radio"
                  name="Declaration"
                  value={"혐오발언"}
                  checked={what === "혐오발언"}
                  onChange={(e) => setWhat(e.target.value)}
                />
                혐오발언
              </RadioLabel>
              <RadioLabel>
                <CustomRadio
                  type="radio"
                  name="Declaration"
                  value={"광고/스팸"}
                  checked={what === "광고/스팸"}
                  onChange={(e) => setWhat(e.target.value)}
                />
                광고/스팸
              </RadioLabel>
              <RadioLabel>
                <CustomRadio
                  type="radio"
                  name="Declaration"
                  value={"부적절한 아이디"}
                  checked={what === "부적절한 아이디"}
                  onChange={(e) => setWhat(e.target.value)}
                />
                부적절한 아이디
              </RadioLabel>
              <RadioLabel>
                <CustomRadio
                  type="radio"
                  name="Declaration"
                  value={"허위,과장 정보 제공"}
                  checked={what === "허위,과장 정보 제공"}
                  onChange={(e) => setWhat(e.target.value)}
                />
                허위,과장 정보 제공
              </RadioLabel>
            </div>
            <div className="content1 item2">

              <AA id="content"
                name="content"
                value={why}
                onChange={(e) => { setWhy(e.target.value) }}
                placeholder="신고 내용"></AA>
            </div>
            <div className=" item3">
              {type !== '채팅' ?
                <>   <button
                  onClick={() => {
                    submit();
                  }}
                >
                  확 인
                </button>
                  <button
                    onClick={() => {
                      cancel();
                    }}
                  >
                    삭 제
                  </button></> :
                <>   <button
                  onClick={() => {
                    ReportSubmit();
                  }}
                >
                  확 인
                </button>
                  <button
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    닫 기
                  </button></>

              }



            </div>
          </div>
        </div>
      )}
    </ModalStyle>
  );
}
