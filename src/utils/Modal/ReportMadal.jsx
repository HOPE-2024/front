import { useEffect, useState } from "react";
import { styled } from "styled-components";
import down from "../../images/bown.svg";
import { UpdateActive } from "../../component/admin/UpdateActive";
import { DeleteReport } from "../../component/admin/DeleteReport";
import { ReportRead } from "../../component/admin/ReportRead";
const AA = styled.textarea`
 width: 100%;

  padding: 0;
  border:1px solid #3C84F8;
`;
const ModalStyle = styled.div`
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
  .modalContent{
    width: 400px;
    max-width: 450px;
    min-height: 500px;
    height: auto;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;    
  
    .title{
      width: 100%;
      height: 40px;
      background: #3C84F8;
      p{
        color: white;
        font-size: 1.2em;
        margin: 0;
        margin-left: 10px;
        line-height: 40px;
      }
    } 
    .content1{
      width: 340px;
      margin:  0 auto;
      margin-top: 25px;
      border:2px solid #0a48ac;
   
    } 
    .item1{
      font-size   :1.1em ;
      height: 170px;       

      }
   
    }
    .item2{
      height: 100px;
      border: none;

    }
  
    .item3{
      width: 80%;
      margin: 0 auto;
      margin-top: 20px;
      padding-bottom: 20px;
      height: auto;
      display: flex;
        flex-direction: row;
        justify-content: space-around;
      button{
        width: 100px;
        height: 45px;
      background: #3C84F8;
      }
    }
  
  .openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.8s;
  }

  section {
   
  }

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
  border: 2px solid #86878a;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;

  &:checked {
    background-color: #3C84F8;
    border-color: #3C84F8;
  }

  &:checked::before {
    content: '✔';
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    color: white;
  }
`;

const ButtonVar = styled.div`
display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
  min-height: 30px;
.content1{
  width: 100%;
  display: flex;
  margin-top: 0px;
  flex-direction: row;
  img{
    width: 20px;
    margin-top: 5px;
    margin-left: 10px;
  }
  p{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -30px;
  }

}
  &:hover {
    color: red;
    ul{
 
      display: block;
    }
  }
  ul{
    width: 100%;
    display: none;
    margin-top:5px;
  }
  li{
    height: 30px;
    line-height: 30px;
    border: 1px solid #3C84F8;
    width: 340px;
    margin: 0 auto;
    .content2{
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

export function ReportMadal({ open, setOpen, list }) {
  //신고 이유 저장
  const [what, setWhat] = useState('');
  const [why, setWhy] = useState('');
  const [view, setView] = useState('');
  const [status, setStaus] = useState('상태 변경 없음');

  //확인 클릭시
  const submit = async () => {
    if (status !== '상태 변경 없음') {
      await UpdateActive(list.reported.id, view);
    }
    setOpen(null)
  }
  //취소 클릭시
  const cancel = () => {
    DeleteReport(list.id)
    setOpen(null);
  }
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    "일반 회원",
    "7일 정지",
    "30일 정지",
    "회원 정지"
  ];

  useEffect(() => {

    if (list.reported) {
      ReportRead(list.id)
      setView(list.reported.nickName);
    }
  }, [list]
  )
  return (
    <ModalStyle>
      {open &&
        <div className="modal">
          <div className="modalContent">
            <div className="title">
              <p>신고하기</p>
            </div>

            <ButtonVar
              onMouseOver={() => setIsOpen(true)}
              onMouseOut={() => setIsOpen(false)}
            >
              <div className="content1"> <img src={down} alt="" />
                <p>{view}
                </p> </div>
              {isOpen && data.map((pick, index) => (
                <ul>
                  <li onClick={(e) => { setIsOpen(false); setView(pick); setStaus(pick) }}><div className="content2">{pick}</div></li>
                </ul>
              ))}
            </ButtonVar>
            <div className="content1 item1">
              <RadioLabel>
                <CustomRadio
                  type="radio"
                  name="Declaration"
                  value={'욕설'}
                  checked={list.check === "욕설"}
                  onChange={(e) => setWhy(e.target.value)}
                />
                욕설
              </RadioLabel>
              <RadioLabel>
                <CustomRadio
                  type="radio"
                  name="Declaration"
                  value={"혐오발언"}
                  checked={list.check === "혐오발언"}
                  onChange={(e) => setWhy(e.target.value)}
                />
                혐오발언
              </RadioLabel>
              <RadioLabel>
                <CustomRadio
                  type="radio"
                  name="Declaration"
                  value={"광고/스팸"}
                  checked={list.check === "광고/스팸"}
                  onChange={(e) => setWhy(e.target.value)}
                />
                광고/스팸
              </RadioLabel>
              <RadioLabel>
                <CustomRadio
                  type="radio"
                  name="Declaration"
                  value={"부적절한 아이디"}
                  checked={list.check === "부적절한 아이디"}
                  onChange={(e) => setWhy(e.target.value)}
                />
                부적절한 아이디
              </RadioLabel>
              <RadioLabel>
                <CustomRadio
                  type="radio"
                  name="Declaration"
                  value={"허위,과장 정보 제공"}
                  checked={list.check === "허위,과장 정보 제공"}
                  onChange={(e) => setWhy(e.target.value)}
                />
                허위,과장 정보 제공
              </RadioLabel>

            </div>
            <div className="content1 item2">
              <AA id="content"
                name="content"
                value={list.reason}
                onChange={(e) => { setWhat(e.target.value) }}
                placeholder="신고 내용"></AA>
            </div>
            <div className=" item3">

              <button onClick={() => { submit() }}>확 인</button>
              <button onClick={() => { cancel() }}>삭 제</button>
            </div>

          </div>
        </div>
      }
    </ModalStyle>
  );
}
