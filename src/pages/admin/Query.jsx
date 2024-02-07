import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../utils/Button";
import { storage } from "../../api/Firebase";
import { InputBox, QueryCss, Select } from "../../css/admin/QueryCss";
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
  const [substance, setSubstance] = useState("");
  const [division, setDivision] = useState();
  const [title, setTitle] = useState();
  const [list, setList] = useState([]);
  const [File, setFile] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("view");
  const data = ["약품", "사이트 이용", "기대 수명", "기타"];
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    selectQuery();
  }, [mode]);
  useEffect(() => {
    if (id === "write") {
      setDivision("선택해 주세요 ∨");
    } else {
      setDivision(list.division);
    }
    if (mode === "view") {
      setNewData(list.di);
    }
    if (mode === "edit") {
      setTitle(list.title);
    }
    setSubstance(list.substance);
    setUrl(list.img);
  }, [mode]);
  const selectQuery = async () => {
    console.log("문의글 가져오는 axios 실행");
    try {
      const res = await AdminAxiosApi.selectQury(id);
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const submit = () => {
    const queryDto = {
      division: division,
      title: title,
      substance: substance,
      queryImg: url,
    };
    InsertQuery(queryDto);
    navigate("/querylist");
  };
  const submit2 = () => {
    navigate(-1);
  };
  const submit3 = async () => {
    const queryDto = {
      id: id,
      title: title,
      division: division,
      substance: substance,
      queryImg: url,
    };
    await UpdateQuery(queryDto);
    setMode("view");
  };

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
  const [searchOption, setSearchOption] = useState("전체"); // 검색필터
  // option이 바뀔 때 실행되는 함수
  const handleOptionChange = (e) => {
    // 바뀐 옵션 값을 searchOption에 저장
    setSearchOption(e.target.value);
    setDivision(e.target.value);
  };

  return (
    <QueryCss>
      {id === "write" ? (
        <>
          <div className="content1">
            <p>1:1 문의하기</p>
          </div>
          <div className="content2">
            <div className="text">
              <p>문의 유형 :</p>
            </div>
            <Select value={searchOption} onChange={handleOptionChange}>
              {data.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
          <div className="content2">
            <div className="text">
              <p>제 목 :</p>
            </div>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
          <div className="content3">
            <div className="text">
              <p>문의 내용 :</p>
            </div>
            <div className="textBox">
              <InputBox
                value={list.substance}
                onChange={(e) => {
                  setSubstance(e.target.value);
                }}
              />
              {/* <img src={url} alt="1"></img> */}
            </div>
          </div>
          <div className="content4">
            <div className="text">
              <p>이미지 첨부 :</p>
            </div>
            <div className="filebox">
              <input type="file" src="파일 첨부" onChange={fileChage}></input>
            </div>
          </div>
          <div className="content5">
            <Button children={"확인"} clickEvt={submit}></Button>
            <Button children={"취소"} clickEvt={submit2}></Button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="content1">
            <p>1:1 문의하기</p>
          </div>
          <div className="content2">
            <div className="text">
              <p>문의 유형 :</p>
            </div>
            {mode === "view" && (
              <div className="type">
                <input value={list.division}></input>
              </div>
            )}
            {mode === "edit" && (
              <>
                <Select value={searchOption} onChange={handleOptionChange}>
                  {data.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </>
            )}
          </div>
          <div className="content2">
            <div className="text">
              <p>제 목 :</p>
            </div>
            {mode === "view" && (
              <>
                <input value={list.title}></input>
              </>
            )}
            {mode === "edit" && (
              <>
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle((prevTitle) => e.target.value);
                  }}
                ></input>
              </>
            )}
          </div>
          <div className="content3">
            <div className="text">
              <p>문의 내용 :</p>
            </div>
            {mode === "view" && (
              <>
                <div className="textBox">
                  <InputBox value={list.substance} />
                </div>
              </>
            )}
            {mode === "edit" && (
              <>
                <div className="textBox">
                  <InputBox
                    value={substance}
                    onChange={(e) => {
                      setSubstance((prevSubstance) => e.target.value);
                    }}
                  />
                </div>
              </>
            )}
          </div>
          <div className="content4">
            <div className="text">
              <p>이미지 첨부 :</p>
            </div>
            <div className="filebox">
              {mode === "view" && (
                <>
                  <img
                    className="img1"
                    src={list.queryImg}
                    onClick={() => {
                      setOpen(true);
                    }}
                    alt="이미지"
                  ></img>
                  <ImgModal
                    url={list.queryImg}
                    open={open}
                    setOpen={setOpen}
                  ></ImgModal>
                </>
              )}

              {mode === "edit" && (
                <>
                  <img
                    className="img1"
                    src={url}
                    onClick={() => {
                      setOpen(true);
                    }}
                    alt="이미지"
                  ></img>
                  <input
                    type="file"
                    src="파일 첨부"
                    onChange={fileChage}
                  ></input>
                </>
              )}
            </div>
          </div>
          <div className="content5">
            <Reply
              list={list.reply}
              id={list.id}
              refresh={selectQuery}
              mode={mode}
              setMode={setMode}
              submit3={submit3}
            />
          </div>
        </>
      )}
    </QueryCss>
  );
};
