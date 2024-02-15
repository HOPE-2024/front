import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  SubContainer,
  RadioBox,
  RadioContainer,
  RadioBtn,
} from "../../css/setting/WithdrawCss";
import Modal from "../../utils/Modal";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";

export const Withdraw = () => {
  const navigate = useNavigate();
  const [radio, setRadio] = useState("");
  const [modalOpen, setModalOpen] = useState(false); // 모달 오픈
  const [modalText, setModelText] = useState("정말 탈퇴 하시겠습니까?"); // 모달에 넣을 내용

  // 라디오 버튼 눌렀을 때 값 저장
  const onClickRadioBtn = (e) => {
    setRadio(e);
    console.log("radio : " + e);
  };

  // 탈퇴하기 버튼 눌렀을 때,
  const onClickWithdrawalBtn = () => {
    // 만약 라디오 버튼을 선택하지 않았다면
    if (radio === "") {
      alert("탈퇴 이유를 반드시 선택해주세요.");
    } else {
      // 탈퇴 이유를 한가지 선택했다면
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const confirmModal = () => {
    if (setModalOpen(true)) {
      alert("탈퇴되었습니다.");
      navigate("/");
    } else {
      alert("탈퇴 처리중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <Container>
        <SubContainer>
          <p className="title">회원 탈퇴</p>
        </SubContainer>
        <SubContainer>
          <p className="subTitle">
            HOPE를 이용해주신 시간에 감사드립니다. <br />
            고객님이 느끼셨던 점을 저희에게 공유해주시면 주시면 더 나은 서비스
            개선에 더욱 힘쓰겠습니다.
          </p>
        </SubContainer>
        <SubContainer>
          <RadioBox>
            <RadioContainer>
              <RadioBtn
                type="radio"
                name="탈퇴이유"
                onClick={() =>
                  onClickRadioBtn("기록 삭제 목적 (개인정보, 게시글 등)")
                }
              />
              기록 삭제 목적 (개인정보, 게시글 등)
            </RadioContainer>
            <RadioContainer>
              <RadioBtn
                type="radio"
                name="탈퇴이유"
                onClick={() => onClickRadioBtn("이용이 불편하고 장애가 많아요")}
              />
              이용이 불편하고 장애가 많아요
            </RadioContainer>
            <RadioContainer>
              <RadioBtn
                type="radio"
                name="탈퇴이유"
                onClick={() => onClickRadioBtn("다른 사이트가 더 좋아요")}
              />
              다른 사이트가 더 좋아요 🥲
            </RadioContainer>
            <RadioContainer>
              <RadioBtn
                type="radio"
                name="탈퇴이유"
                onClick={() => onClickRadioBtn("비매너 사용자를 만났어요")}
              />
              비매너 사용자를 만났어요 🤬
            </RadioContainer>
            <RadioContainer>
              <RadioBtn
                type="radio"
                name="탈퇴이유"
                onClick={() => onClickRadioBtn("사용 빈도가 낮아서")}
              />
              자주 방문하지 않아요 (사용 빈도 ↓)
            </RadioContainer>
            <RadioContainer>
              <RadioBtn
                type="radio"
                name="탈퇴이유"
                onClick={() => onClickRadioBtn("콘텐츠 불만")}
              />
              콘텐츠 불만
            </RadioContainer>
            <RadioContainer>
              <RadioBtn
                type="radio"
                name="탈퇴이유"
                onClick={() => onClickRadioBtn("기타")}
              />
              기타
            </RadioContainer>
          </RadioBox>
        </SubContainer>
        <SubContainer>
          <p className="lastText">
            <br />
            탈퇴 전 유의사항
            <br />
            - 계정을 탈퇴하면 회원님의 모든 콘텐츠와 활동 기록이 삭제됩니다.
            <br />
            - 삭제된 정보는 재가입시에도 복구할 수 없으니 신중하게 결정해주세요.
            <br />- 탈퇴 후 7일간 재가입이 불가능 합니다.
          </p>
        </SubContainer>
        <SubContainer>
          <div className="btn">
            <UnderLinedStyle onClick={() => onClickWithdrawalBtn()}>
              탈퇴 신청
            </UnderLinedStyle>
          </div>
        </SubContainer>
        <Modal
          open={modalOpen}
          close={closeModal}
          confirm={confirmModal}
          type={true}
          header="알림"
        >
          {modalText}
        </Modal>
      </Container>
    </>
  );
};
