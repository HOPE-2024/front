import { useEffect, useState, useRef } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SearchAxiosApi } from "../../api/SearchAxiosApi";
import styled from "styled-components";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import { ReactComponent as HeartSvg } from "../../images/heart.svg";
import { ReactComponent as Heart2Svg } from "../../images/heart2.svg";
import { ReactComponent as HomeSvg } from "../../images/home.svg";
import { MedicineDataAxiosApi } from "../../api/MedicineDataAxiosApi";
import { storage } from "../../api/Firebase";
export const Container = styled.div`
  width: 100vw;
  /* height: 100; */
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap; // 개행문자 인식
`;

export const SubContainer = styled.div`
  width: 70%;
  height: 80%;
  margin-top: 3%;

  .text1 {
    font-size: 30px;
    font-weight: bold;
    color: var(--NAVY);
  }
  .text2 {
    margin: 20px 0;
  }
`;

export const TitleBox = styled.div`
  padding-left: 5%;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
export const DataBox = styled.div`
  padding: 0 5%;
  background-color: white; /* 배경 투명하게 설정 */
  box-shadow: 1px 2px 5px 1px #d5d5d5;
  display: flex;
  flex-direction: column;
  hr {
    color: gray;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 8%;
  }
`;
export const ImageBox = styled.div`
  width: 30%;
  height: 170px;
  position: absolute;
  right: 8%;
  box-shadow: 1px 2px 5px 1px #e3e3e3;

  img {
    width: 100%;
    height: 100%;
  }
  p {
    text-align: right;
    margin: 1%;
    font-size: 14px;
    color: gray;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: 120px;
    margin: 0 0 10% 8%;
  }
`;

export const FireBaseBox = styled.div`
width: 70%;
height: 50px;
margin-top: 180px;
@media (max-width: 768px) {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  }
`;
export const TextBox = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
  .item {
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    font-size: 1em;
  }
  .item1 {
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    font-size: 1.1em;
  }
  .item2 > div {
    font-size: 1.7em;
    font-weight: bold;
    color: var(--NAVY);
    margin-bottom: 30px;
  }

  .item4 {
    margin-bottom: 5%;
  }
  .title {
    width: 80px;
    white-space: nowrap;
  }
  .title2::before {
    content: "•"; /* 가상 요소에 찍는 점 추가 */
    margin-right: 8px; /* 점과 텍스트 간격 조절 */
  }
  .title2 {
    margin: 2% 0;
    font-size: 1.2em;
    font-weight: bold;
    color: var(--DEEPBLUE);
  }
  .item4 > button {
    border: 1px solid gray;
    background-color: white;
    cursor: pointer;
  }
  .contents {
    width: 85%;
    line-height: 150%;
    margin-top: -5px;
  }
  .contents1 {
    width: 85%;
    line-height: 150%;
    margin-top: -5px;
    font-weight: bold;
  }

  &.ver1 {
    width: 100%;
  }
  &.ver2 {
    padding: 7%;
    width: 100%;
  }
  .input1{
height: 30px;
width: 30%;
min-width: 200px;
  }
  .input2{
height: 200px;
width: 100%;
min-width: 200px;
  }
`;
export const TextArea123 = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  height: 100%;
`;

export const MenuTable = styled.div`
  display: flex;
  margin-bottom: 3%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 50px;
    border: 1px solid #cbcbcb;
    cursor: pointer;
    font-size: 16px;
    background-color: white;
    color: gray;
    &.active {
      background-color: var(--SKY);
      color: white;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
export const FavoritesBox = styled.button`
  width: 35px;
  height: 25px;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  cursor: pointer;
  @media (max-width: 768px) {
    right: -6px;
  }
`;
export const HeartSvgBox = styled(HeartSvg)`
  width: 100%;
  height: 100%;
`;
export const Heart2SvgBox = styled(Heart2Svg)`
  width: 100%;
  height: 100%;
`;

export const TopBox = styled.div`
  width: 100%;
  padding: 6%;
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BottomBox = styled.div`
  width: 100%;
`;
export const MedicineWrite = () => {
  const navigate = useNavigate();
  const { medicineId } = useParams();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [name_en, setNameEn] = useState('');
  const [company, setCompany] = useState('');
  const [company_en, setCompanyEn] = useState('');
  const [general, setGeneral] = useState('');
  const [appearance, setAppearance] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredient_en, setIngredientEn] = useState('');
  const [method, setMethod] = useState('');
  const [period, setPeriod] = useState('');
  const [insurance, setInsurance] = useState('');
  const [additive, setAdditive] = useState('');
  const [image, setImage] = useState('');
  const [effect, setEffect] = useState('');
  const [usages, setUsages] = useState('');
  const [precautions, setPrecautions] = useState('');
  const fileInputRef = useRef(null);
  const submit = async () => {

    const medicineData = {
      code: code, // 제품코드
      name: name, // 제품명
      name_en: name_en, // 제품영문명
      company: company, // 제조사명
      company_en: company_en, // 제조사영문명
      general: general, // 일반의약품/전문의약품
      appearance: appearance, // 외형
      ingredient: ingredient, // 성분
      ingredient_en: ingredient_en, // 성분영문명
      method: method, // 보관방법
      period: period, // 유통기한
      insurance: insurance, // 보험코드
      additive: additive, // 첨가물
      image: image, // 사용설명서 이미지
      effect: effect, // 효능효과
      usages: usages, // 용법용량
      precautions: precautions, // 주의사항
    };
    try {
      const res = await MedicineDataAxiosApi.addData(medicineData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }


  }
  const [File, setFile] = useState("");
  const [url, setUrl] = useState("");
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
  return (
    <>
      <Container>
        <SubContainer>
          <TitleBox>
            <p className="text1">의약품 등록</p>
            <p className="text2"><br />
            </p>
          </TitleBox>
          <DataBox>
            <TopBox>
              <TextBox className="ver1">
                <div className="item2">
                  <div className="title">제품 기본정보</div>
                </div>
                <div className="item1">
                  <div className="title">제품명</div>
                  <div className="contents1">
                    <input className="input1" type="text" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">영문명</div>
                  <div className="contents">
                    <input className="input1" type="text" value={name_en} onChange={(e) => { setNameEn(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">제조사</div>
                  <div className="contents">
                    <input className="input1" type="text" value={company} onChange={(e) => { setCompany(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">영문명</div>
                  <div className="contents">
                    <input className="input1" type="text" value={company_en} onChange={(e) => { setCompanyEn(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">성분</div>
                  <div className="contents1">
                    <input className="input1" type="text" value={ingredient} onChange={(e) => { setIngredient(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">영문명</div>
                  <div className="contents">
                    <input className="input1" type="text" value={ingredient_en} onChange={(e) => { setIngredientEn(e.target.value) }}></input>
                  </div>
                </div>

                <div className="item">
                  <div className="title">품번</div>
                  <div className="contents">
                    <input className="input1" type="text" value={code} onChange={(e) => { setCode(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">분류</div>
                  <div className="contents">
                    <input className="input1" type="text" value={general} onChange={(e) => { setGeneral(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">첨가제</div>
                  <div className="contents">
                    <input className="input1" type="text" value={additive} onChange={(e) => { setAdditive(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">외형</div>
                  <div className="contents">
                    <input className="input1" type="text" value={appearance} onChange={(e) => { setAppearance(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">보험번호</div>
                  <div className="contents">
                    <input className="input1" type="text" value={insurance} onChange={(e) => { setInsurance(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">보관방법</div>
                  <div className="contents">
                    <input className="input1" type="text" value={method} onChange={(e) => { setMethod(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item">
                  <div className="title">유통기한</div>
                  <div className="contents">
                    <input className="input1" type="text" value={period} onChange={(e) => { setPeriod(e.target.value) }}></input>
                  </div>
                </div>
              </TextBox>
              <ImageBox>
                <img src={url} alt="이미지" />
                <p>&lt;그림 1&gt;&nbsp;낱알 식별 이미지</p>
              </ImageBox>
              <FireBaseBox>

                <Bottom>
                  <UnderLinedStyle
                    style={{ margin: "25px", fontWeight: "bold" }}
                    onClick={openFileInput}                  >
                    이미지 첨부
                    <input ref={fileInputRef} id="fileInput" type="file" style={{ display: 'none' }} onChange={fileChange}></input>
                  </UnderLinedStyle>
                </Bottom>
              </FireBaseBox>
            </TopBox>
            <hr />
            <BottomBox>
              <TextBox className="ver2">
                <div className="item2">
                  <div className="title">제품 상세정보</div>
                </div>
                {/* <MenuTable>
                  <button
                    onClick={() => { }}
                    className="manual"
                  >
                    전체
                  </button>
                  <button
                    onClick={() => { }}
                    className="manual"
                  >
                    효능 효과
                  </button>
                  <button
                    onClick={() => { }}
                    className="manual"
                  >
                    용법 용량
                  </button>
                  <button
                    onClick={() => { }}
                    className="manual"
                  >
                    주의사항
                  </button>
                  <button
                    onClick={() => { }}
                    className="manual"
                  >
                    설명서
                  </button>
                </MenuTable> */}
                <div className="item4">
                  <div className="title2">효능효과</div>
                  <div className="contents">
                    {/* <input className="input2" type="text" value={effect} onChange={(e) => { setEffect(e.target.value) }}></input> */}
                    <TextArea123
                      id="content"
                      name="content"
                      value={effect}
                      onChange={(e) => { setEffect(e.target.value) }} placeholder="내용"
                    />
                  </div>
                </div>
                <div className="item4" >
                  <div className="title2">용법용량</div>
                  <div className="contents">
                    <input className="input2" type="text" value={usages} onChange={(e) => { setUsages(e.target.value) }}></input>
                  </div>
                </div>
                <div className="item4" >
                  <div className="title2">주의사항</div>
                  <div className="contents">
                    <input className="input2" type="text" value={precautions} onChange={(e) => { setPrecautions(e.target.value) }}></input>
                    {/* {formatPrecautions(data.precautions)} */}
                  </div>
                </div>
                <div className="item4" >
                  <div className="title2">설명서</div>
                  {/* <input className="input2" type="text" value={usages} onChange={(e) => { setUsages(e.target.value) }}></input> */}
                  {/* {data.image === "-" ? (
                    <div className="contents">{data.image}</div>
                  ) : (
                    <button
                      onClick={() => {
                        window.open(data.image);
                      }}
                    >
                      첨부파일
                    </button>
                  )} */}
                </div>
              </TextBox>
            </BottomBox>
          </DataBox>

          <Bottom>
            <UnderLinedStyle
              style={{ margin: "25px", fontWeight: "bold" }}
              onClick={() => navigate(-1)}
            >
              취소
            </UnderLinedStyle>
            <UnderLinedStyle
              style={{ margin: "25px", fontWeight: "bold" }}
              onClick={() => submit()}
            >
              작성 완료
            </UnderLinedStyle>
          </Bottom>
        </SubContainer>
      </Container>
    </>
  );
};
