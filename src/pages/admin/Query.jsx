import { useEffect, useState } from "react";
import styled from "styled-components"
import { Button } from "../../utils/Button"
import { storage } from "../../api/Firebase";
import { InputBox, QueryCss } from "../../css/admin/QueryCss";
import { InsertQuery } from "../../component/admin/InsertQuery";
import { UpdateQuery } from "../../component/admin/UpdateQuery";
import { useParams } from "react-router-dom";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";
import { Reply } from "../../component/admin/Reply";
import { ImgModal } from "../../utils/modal/ImgModal";
import { useNavigate } from "react-router-dom";
export const Query = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [substance, setSubstance] = useState('')
  const [division, setDivision] = useState();
  const [list, setList] = useState([]);
  const [File, setFile] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('view');
  const data = [
    "약품",
    "사이트 이용",
    "기대 수명",
    "기타"
  ];
  useEffect(() => {
    selectQuery()
  }, [mode])
  useEffect(() => {
    if (id === 'write') {
      setDivision('선택해 주세요 ∨')
    } else {
      setDivision(list.division)
    }
    setSubstance(list.substance)
    setUrl(list.img)
  }, [mode])
  const selectQuery = async () => {
    console.log('문의글 가져오는 axios 실행')
    try {
      const res = await AdminAxiosApi.selectQury(id);
      setList(res.data);

    } catch (error) {
      console.log(error);
    }
  }
  const submit = () => {
    const queryDto = {
      division: division,
      substance: substance,
      queryImg: url
    };
    InsertQuery(queryDto);
  }
  const submit2 = () => {
    navigate(-1)
  }
  const submit3 = async () => {

    const queryDto = {
      id: id,
      division: division,
      substance: substance,
      queryImg: url
    };
    await UpdateQuery(queryDto);
    setMode('view')
  }

  const fileChage = async (e) => {
    setFile(e.target.files[0]);
    await handleFileUpload(e);
  };
  //파이어베이스 이미지 주소 받기
  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(selectedFile.name);
      await fileRef.put(selectedFile);
      console.log("File uploaded successfully!");
      const url = await fileRef.getDownloadURL();
      console.log("저장경로 확인 : " + url);
      setUrl(url);
    } catch (error) {
      console.error("Upload failed", error);
    }
  };
  return (
    <QueryCss>
      {id === 'write' ? <>
        <div className="content1">
          <p>1:1 문의하기</p>
        </div>
        <div className="content2">
          <div className="text">
            <p>문의 유형 :</p>
          </div>

          <div className="type">
            <p>{division}</p>
            <ul>

              {data.map((pick, index) => (
                <li key={index} onClick={() => { setDivision(pick) }}>
                  <p>{pick}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="content3">
          <div className="text">
            <p>문의 내용 :</p>
          </div>
          <div className="textBox">
            <InputBox value={list.substance}
              onChange={(e) => { setSubstance(e.target.value) }} />
            {/* <img src={url} alt="1"></img> */}
          </div>
        </div>
        <div className="content4">
          <div className="text">
            <p>이미지 첨부 :</p>
          </div>
          <div className="filebox">
            <input type="file" src="파일 첨부"
              onChange={fileChage}
            ></input>
          </div>
        </div>
        <div className="content5">
          <Button children={"확인"} clickEvt={submit}></Button>
          <Button children={"취소"} clickEvt={submit2}></Button>
        </div>

      </> : <>     <div className="content1">
        <p>1:1 문의하기</p>
      </div>
        <div className="content2">
          <div className="text">
            <p>문의 유형    :</p>
          </div>

          <div className="type">
            {mode === 'view' && <>
              <div className="textBox">
                <p>{list.division}</p>
              </div>
            </>}
            {mode === 'edit' && <>
              <p>{division}</p>
              <ul>
                {data.map((pick, index) => (
                  <li key={index} onClick={() => { setDivision(pick) }}>
                    <p>{pick}</p>
                  </li>
                ))}
              </ul>
            </>}

          </div>
        </div>
        <div className="content3">
          <div className="text">
            <p>문의 내용 :</p>
          </div>
          {mode === 'view' && <>
            <div className="textBox">
              <InputBox value={list.substance} />
            </div>
          </>}
          {mode === 'edit' && <>
            <div className="textBox">
              <InputBox value={substance} onChange={(e) => { setSubstance((prevSubstance) => e.target.value); }} />
            </div>
          </>}
        </div>
        <div className="content4">
          <div className="text">
            <p>이미지 첨부 :</p>
          </div>
          <div className="filebox">
            {mode === 'view' && <>
              <img className="img1" src={list.queryImg} onClick={() => { setOpen(true) }} alt="이미지"></img>
              <ImgModal url={list.queryImg} open={open} setOpen={setOpen}></ImgModal>
            </>}

            {mode === 'edit' && <>
              <img className="img1" src={url} onClick={() => { setOpen(true) }} alt="이미지"></img>
              <input type="file" src="파일 첨부"
                onChange={fileChage}

              ></input>
            </>}
          </div>

        </div>
        <div className="content5">
          <Reply list={list.reply} id={list.id} refresh={selectQuery} mode={mode} setMode={setMode} submit3={submit3} />
        </div></>}

    </QueryCss>
  );
};

