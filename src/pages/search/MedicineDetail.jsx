import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SearchAxiosApi } from "../../api/SearchAxiosApi";
import styled from "styled-components";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import { ReactComponent as HeartSvg } from "../../images/heart.svg";
import { ReactComponent as Heart2Svg } from "../../images/heart2.svg";

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
  margin-top: 15%;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
export const DataBox = styled.div`
  padding: 5% 3% 5% 5%;
  background-color: white; /* 배경 투명하게 설정 */
  box-shadow: 1px 2px 5px 1px #d5d5d5;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8%;
  }
`;
export const ImageBox = styled.div`
  width: 25%;
  height: 100px;
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
  padding: 0 20px;
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
    font-weight: bold;
  }
  .title {
    width: 80px;
    white-space: nowrap;
  }
  .contents {
    width: 80%;
  }
`;
export const FavoritesBox = styled.button`
  width: 35px;
  height: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const HeartSvgBox = styled(HeartSvg)`
  width: 100%;
  height: 100%;
`;
export const Heart2SvgBox = styled(Heart2Svg)`
  width: 100%;
  height: 100%;
`;
export const MedicineDetail = () => {
  const navigate = useNavigate();
  const { medicineId } = useParams();
  const [data, setData] = useState();
  const [favorites, setFavorites] = useState(false); // 즐겨찾기

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
  // DOMPurify를 사용하여 HTML 안전하게 렌더링
  // const sanitizedHTML = DOMPurify.sanitize(data.precautions);

  if (!data) {
    return <></>;
  }
  return (
    <>
      {/* <TextBox dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></TextBox> */}
      <Container>
        <SubContainer>
          <DataBox>
            <ImageBox>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/hopeimage2.appspot.com/o/img_noimage.jpg?alt=media&token=883ba6ad-bc2e-4ec1-a7ff-5853bb377dcd"
                alt="이미지"
              />
            </ImageBox>
            <TextBox>
              <div className="item1">
                <div className="title">의약품명</div>
                <div className="contents">{data.name}</div>
              </div>
              <div className="item">
                <div className="title">영문명</div>
                <div className="contents">{data.name_en}</div>
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
                <div className="title">성분</div>
                <div className="contents">{data.ingredient}</div>
              </div>
              <div className="item">
                <div className="title">영문명</div>
                <div className="contents">{data.ingredient_en}</div>
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
              <div className="item">
                <div className="title">효능효과</div>
                <div className="contents">{data.effect}</div>
              </div>
              <div className="item">
                <div className="title">용법용랑</div>
                <div className="contents">{data.usages}</div>
              </div>
              <div className="item">
                <div className="title">주의사항</div>
                <div className="contents">{data.precautions}</div>
              </div>
              <div className="item">
                <div className="title">설명서</div>
                <div className="contents">{data.image}</div>
              </div>
            </TextBox>
            <FavoritesBox onClick={() => onClickFavorites()}>
              {favorites ? <HeartSvgBox /> : <Heart2SvgBox />}
            </FavoritesBox>
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
