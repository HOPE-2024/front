import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SearchAxiosApi } from "../../api/SearchAxiosApi";
import styled from "styled-components";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import { ReactComponent as HeartSvg } from "../../images/heart.svg";
import { ReactComponent as Heart2Svg } from "../../images/heart2.svg";
import { ReactComponent as HomeSvg } from "../../images/home.svg";

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
  padding: 5%;
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
  width: 25%;
  height: 120px;
  box-shadow: 1px 2px 5px 1px #e3e3e3;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 120px;
    margin-bottom: 10%;
  }
`;
export const TextBox = styled.div`
  padding: 0 40px;
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
  .item > button {
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

  &.ver2 {
    width: 100%;
    padding: 7%;
  }

  &.ver1 {
    margin-bottom: 5%;
  }
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
      color: black;
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
    top: 140px;
    right: -7px;
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
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BottomBox = styled.div`
  width: 100%;
`;
export const MedicineDetail = () => {
  const navigate = useNavigate();
  const { medicineId } = useParams();
  const [data, setData] = useState();
  const [favorites, setFavorites] = useState(false); // 즐겨찾기
  const [activeBtn, setActiveBtn] = useState("all"); // 클릭된 버튼 구분
  const effectRef = useRef(null);
  const usagesRef = useRef(null);
  const precautionsRef = useRef(null);
  const manualRef = useRef(null);

  // params로 얻은 id로 의약품 상세 조회
  useEffect(() => {
    const medicineData = async () => {
      const rsp = await SearchAxiosApi.searchId(medicineId, "id");
      // 해당 의약품에 대한 즐겨찾기 정보 조회하여 favorites에 저장
      if (rsp) {
        console.log("상세 조회 성공 : ", rsp.data.hits.hits[0]);
        setData(rsp.data.hits.hits[0].sourceAsMap);
      }
    };
    medicineData();
  }, []);

  // 즐겨찾기
  const onClickFavorites = async () => {
    console.log(localStorage.getItem("memberId"), medicineId);
    // 현재 즐겨찾기 상태에 따른 조건문
    if (favorites) {
      // 즐겨찾기 이미 추가한 상태라면, 삭제하기
      const rsp = await SearchAxiosApi.likesDelete(
        localStorage.getItem("memberId"),
        medicineId
      );
      if (rsp) {
        alert("즐겨찾기가 삭제되었습니다.");
        setFavorites(false);
      } else {
        alert(
          "즐겨찾기 삭제가 정상적으로 처리되지 않았습니다. 관리자에게 문의해주세요."
        );
      }
    } else {
      // 즐겨찾기 추가하지 않은 상태라면, 추가하기
      const rsp = await SearchAxiosApi.likesAdd(
        localStorage.getItem("memberId"),
        medicineId
      );
      if (rsp) {
        // 정상적으로 추가 됐다면 꽉찬 하트로 변경
        alert("즐겨찾기가 추가되었습니다.");
        setFavorites(true);
      } else {
        alert(
          "즐겨찾기 추가가 정상적으로 처리되지 않았습니다. 관리자에게 문의해주세요."
        );
      }
    }
  };

  const handleScrollTo = (ref, elementId) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveBtn(elementId);
  };

  if (!data) {
    return <></>;
  }
  return (
    <>
      <Container>
        <SubContainer>
          <TitleBox>
            <p className="text1">의약품 상세정보</p>
            <p className="text2">
              <HomeSvg />
              &nbsp;&nbsp;&gt;&nbsp; 의약품검색 &nbsp;&gt;&nbsp; 의약품 상세정보
            </p>
          </TitleBox>

          <DataBox>
            <TopBox>
              <ImageBox>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hopeimage2.appspot.com/o/img_noimage.jpg?alt=media&token=883ba6ad-bc2e-4ec1-a7ff-5853bb377dcd"
                  alt="이미지"
                />
              </ImageBox>
              <TextBox className="ver1">
                <div className="item2">
                  <div className="title">제품 기본정보</div>
                </div>
                <div className="item1">
                  <div className="title">제품명</div>
                  <div className="contents1">{data.name}</div>
                </div>
                <div className="item">
                  <div className="title">영문명</div>
                  <div className="contents">{data.name_en}</div>
                </div>
                <div className="item">
                  <div className="title">성분</div>
                  <div className="contents1">{data.ingredient}</div>
                </div>
                <div className="item">
                  <div className="title">영문명</div>
                  <div className="contents">{data.ingredient_en}</div>
                </div>
                <div className="item">
                  <div className="title">제조사</div>
                  <div className="contents">{data.company}</div>
                </div>
                <div className="item">
                  <div className="title">영문명</div>
                  <div className="contents">{data.company_en}</div>
                </div>
                <div className="item">
                  <div className="title">품번</div>
                  <div className="contents">{data.code}</div>
                </div>
                <div className="item">
                  <div className="title">분류</div>
                  <div className="contents">{data.general}</div>
                </div>
                <div className="item">
                  <div className="title">첨가제</div>
                  <div className="contents">{data.additive}</div>
                </div>
                <div className="item">
                  <div className="title">외형</div>
                  <div className="contents">{data.appearance}</div>
                </div>
                <div className="item">
                  <div className="title">보험번호</div>
                  <div className="contents">{data.insurance}</div>
                </div>
                <div className="item">
                  <div className="title">보관방법</div>
                  <div className="contents">{data.method}</div>
                </div>
                <div className="item">
                  <div className="title">유통기한</div>
                  <div className="contents">{data.period}</div>
                </div>
              </TextBox>
              <FavoritesBox onClick={() => onClickFavorites()}>
                {favorites ? <HeartSvgBox /> : <Heart2SvgBox />}
              </FavoritesBox>
            </TopBox>
            <hr />
            <BottomBox>
              <TextBox className="ver2">
                <div className="item2">
                  <div className="title">제품 상세정보</div>
                </div>
                <MenuTable>
                  <button
                    onClick={() => handleScrollTo(effectRef, "all")}
                    className={activeBtn === "all" ? "active" : ""}
                  >
                    전체
                  </button>
                  <button
                    onClick={() => handleScrollTo(effectRef, "effect")}
                    className={activeBtn === "effect" ? "active" : ""}
                  >
                    효능 효과
                  </button>
                  <button
                    onClick={() => handleScrollTo(usagesRef, "usages")}
                    className={activeBtn === "usages" ? "active" : ""}
                  >
                    용법 용량
                  </button>
                  <button
                    onClick={() =>
                      handleScrollTo(precautionsRef, "precautions")
                    }
                    className={activeBtn === "precautions" ? "active" : ""}
                  >
                    주의사항
                  </button>
                  <button
                    onClick={() => handleScrollTo(manualRef, "manual")}
                    className={activeBtn === "manual" ? "active" : ""}
                  >
                    설명서
                  </button>
                </MenuTable>
                <div className="item4" ref={effectRef}>
                  <div className="title2">효능효과</div>
                  <div className="contents">{data.effect}</div>
                </div>
                <div className="item4" ref={usagesRef}>
                  <div className="title2">용법용량</div>
                  <div className="contents">{data.usages}</div>
                </div>
                <div className="item4" ref={precautionsRef}>
                  <div className="title2">주의사항</div>
                  <div className="contents">{data.precautions}</div>
                </div>
                <div className="item" ref={manualRef}>
                  <div className="title">설명서</div>
                  {data.image === "-" ? (
                    <div className="contents">{data.image}</div>
                  ) : (
                    <button
                      onClick={() => {
                        window.open(data.image);
                      }}
                    >
                      첨부파일
                    </button>
                  )}
                </div>
              </TextBox>
            </BottomBox>
          </DataBox>

          <Bottom>
            <UnderLinedStyle
              style={{ margin: "25px", fontWeight: "bold" }}
              onClick={() => navigate(-1)}
            >
              이전
            </UnderLinedStyle>
          </Bottom>
        </SubContainer>
      </Container>
    </>
  );
};
