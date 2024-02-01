import { useState } from "react";
import styled from "styled-components"
import { Button } from "../../utils/Button"
import { storage } from "../../api/Firebase";
import { InputBox, QueryCss } from "../../css/admin/QueryCss";
import { InsertQuery } from "../../component/admin/IsertQuery";


export const Query = () => {

  const [substance, setSubstance] = useState('')
  const [division, setDivision] = useState('선택해 주세요 ∨');
  const [File, setFile] = useState("");
  const [url, setUrl] = useState("");
  const data = [
    "약품",
    "사이트 이용",
    "기대 수명",
    "기타"
  ];

  const submit = () => {
    const queryDto = {
      division: division,
      substance: substance,
      queryImg: url
    };
    InsertQuery(queryDto);
  }
  const fileChage = async (e) => {
    await setFile(e.target.files[0]);
    fileuploade()
  };
  const fileuploade = async () => {
    try {
      if (File && File.name) {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(File.name);
        // 파일을 업로드하고 기다립니다.
        await fileRef.put(File);
        console.log("File uploaded successfully!");
        // 다운로드 URL을 가져오고 기다립니다.
        const url = await fileRef.getDownloadURL();
        console.log("저장경로 확인 : " + url);
        // 상태를 업데이트합니다.
        await setUrl(url);
      } else {
        console.error("File or its name is undefined");
      }
    } catch (error) {
      // 에러를 처리합니다.
      console.error("Upload failed", error);
    }
  };
  return (
    <QueryCss>
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
          <InputBox
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
        <Button children={"취소"}></Button>
      </div>
    </QueryCss>
  );
};
