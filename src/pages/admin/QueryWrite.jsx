import { useRef, useState } from "react";
import { Button } from "../../utils/Button";
import { storage } from "../../api/Firebase";
import { InputBox, QueryCss, Select } from "../../css/admin/QueryCss";
import { InsertQuery } from "../../component/admin/InsertQuery";
import { useNavigate } from "react-router-dom";
import { Quill1 } from "./Quill1";

export const QueryWrite = () => {
  const navigate = useNavigate();
  const [substance, setSubstance] = useState("");
  const [division, setDivision] = useState();
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [File, setFile] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("edit");
  const data = ["문의 종류를 선택해주세요.", "약품", "사이트 이용", "기대 수명", "기타"];
  const [newData, setNewData] = useState([]);

  // useRef를 사용하여 파일 입력(input) 요소의 참조 생성
  const fileInputRef = useRef(null);

  const submit = async () => {
    alert(1)
    const queryDto = {
      division: division,
      title: title,
      substance: substance,
      queryImg: url,
    };
    await InsertQuery(queryDto);
    navigate(-1);
  };
  // 파일 첨부 버튼을 클릭했을 때 파일 선택 창을 열도록 함
  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 파일 입력 요소 클릭
    }
  };
  const fileChange = async (e) => {
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

  // option이 바뀔 때 실행되는 함수
  const handleOptionChange = (e) => {
    // 바뀐 옵션 값을 searchOption에 저장
    setDivision(e.target.value);
  };



  return (
    <QueryCss>

      <div className="content1">
        <p>1:1 문의하기</p>
      </div>
      <div className="content2 a">
        <Select value={division} onChange={handleOptionChange}>
          {data.map((option, index) => (
            <option key={index} value={option} style={{ display: option !== "문의 종류를 선택해주세요." ? 'block' : 'none' }}>
              {option}
            </option>
          ))}
        </Select>
      </div>
      <div className="content2 b">
        <input type="text" placeholder="제목을 입력해 주세요"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);

          }}
        ></input>
      </div>
      <div className="content3">
        <div className="textBox">
          <Quill1 substance={substance} setSubstance={setSubstance}></Quill1>
        </div>
      </div>
      {/* <div className="content4">
        <div className="filebox">
          {url ? <>     <img src={url} alt=""></img></> : <>   <button onClick={openFileInput}>파일 첨부</button>
         
            <input ref={fileInputRef} id="fileInput" type="file" style={{ display: 'none' }} onChange={fileChange}></input>
          </>}

        </div>
      </div> */}
      <div className="content5">
        <Button children={"확인"} clickEvt={submit}></Button>
        <Button children={"취소"} clickEvt={() => { navigate(-1) }}></Button>
      </div>


    </QueryCss >
  );
};
