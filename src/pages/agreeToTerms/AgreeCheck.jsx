import React, { useState, useEffect, useCallback } from "react";
import { SubHeader } from "../../component/template/SubHeader";
import {
  Container,
  CheckBoxContainer,
  FirstBox,
  HeaderContainer,
  LogoSvg,
  SecondBox,
  Title,
  ReadMore,
  CheckInput,
  TextLabel,
  ButtonContainer,
} from "../../css/member/AgreeCheckCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { YesModal } from "../../utils/modal/YesModal";
import { useNavigate } from "react-router-dom";
import { Button } from "../../utils/Button";

export const AgreeCheck = () => {
  const navigate = useNavigate();
  const [allCheck, setAllCheck] = useState(false);
  const [useTermCheck, setUseTermCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  // 약관 내용 보기 모달
  const [useTermModalOpen, setUseTermModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [marketingModalOpen, setMarketingModalOpen] = useState(false);

  // 전체 동의 체크박스를 클릭했을 때 모든 항목의 체크 상태 변경
  const hadleAllCheck = () => {
    const newValue = !allCheck;
    setAllCheck(newValue);
    setUseTermCheck(newValue);
    setPrivacyCheck(newValue);
    setMarketingCheck(newValue);
  };

  // 이용약관 동의 체크 상태 변경
  const handleUseTermCheck = () => {
    if (useTermCheck === false) {
      setUseTermCheck(true);
    } else {
      setUseTermCheck(false);
    }
  };

  // 개인정보 수집 동의 체크 상태 변경
  const handlePrivacyCheck = () => {
    if (privacyCheck === false) {
      setPrivacyCheck(true);
    } else {
      setPrivacyCheck(false);
    }
  };

  // 광고성 마케팅 (선택) 체크 상태 변경
  const handleMarketingCheck = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  // 이용약관, 개인정보 수집, 마케팅 3가지 모두 선택되면 전체 자동 체크
  // useCallback : 함수가 필요한 시점(의존값 변경)에만 새로 생성, 다른 시점에는 기존 함수 재사용.
  // 이를 통해 useEffect내에서 매 랜더링마다 함수가 새로 생성되는것을 방지 -> 성능 최적화 효과
  const updateAllCheck = useCallback(() => {
    if (useTermCheck && privacyCheck && marketingCheck) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [useTermCheck, privacyCheck, marketingCheck, setAllCheck]);

  useEffect(() => {
    updateAllCheck();
  }, [useTermCheck, privacyCheck, marketingCheck, updateAllCheck]);

  // 필수 약관 체크 안하면 알림창 뜨기
  const handleNextButtonClick = () => {
    if (useTermCheck && privacyCheck) {
      nextPage();
    } else {
      alert("필수 약관에 동의해 주세요.");
    }
  };

  // 약관 체크 후 다음 페이지로 이동
  const nextPage = () => {
    navigate("/signup");
  };

  // 각 약관에 대한 모달 오픈
  const openModal = (modalType) => {
    switch (modalType) {
      case "usetermCheck":
        setUseTermModalOpen(true);
        break;
      case "privacyCheck":
        setPrivacyModalOpen(true);
        break;
      case "marketingCheck":
        setMarketingModalOpen(true);
        break;
      default:
        break;
    }
  };

  // 각 약관에 대한 모달 닫기
  const closeModal = (modalType) => {
    switch (modalType) {
      case "usetermCheck":
        setUseTermModalOpen(false);
        break;
      case "privacyCheck":
        setPrivacyModalOpen(false);
        break;
      case "marketingCheck":
        setMarketingModalOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Container>
        <HeaderContainer>
          <SubHeader />
        </HeaderContainer>
        <FirstBox>
          <LogoSvg />
          <Title>환영합니다 !</Title>
        </FirstBox>
        <SecondBox>
          <CheckBoxContainer>
            <CheckInput
              type="checkBox"
              id="allCheck"
              checked={allCheck}
              onChange={hadleAllCheck}
            />
            <TextLabel>약관 전체 동의(전체)</TextLabel>
            <ReadMore>
              <FontAwesomeIcon icon={faChevronRight} />
            </ReadMore>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckInput
              type="checkBox"
              id="usetermCheck"
              checked={useTermCheck}
              onChange={handleUseTermCheck}
            />
            <TextLabel>이용약관 동의(필수)</TextLabel>
            <ReadMore>
              <FontAwesomeIcon icon={faChevronRight} />
            </ReadMore>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckInput
              type="checkBox"
              id="privacyCheck"
              checked={privacyCheck}
              onChange={handlePrivacyCheck}
            />
            <TextLabel>개인정보 수집 및 이용 동의(필수)</TextLabel>
            <ReadMore>
              <FontAwesomeIcon icon={faChevronRight} />
            </ReadMore>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckInput
              type="checkBox"
              id="marketingCheck"
              checked={marketingCheck}
              onChange={handleMarketingCheck}
            />
            <TextLabel>E-mail 및 SMS 광고성 정보 수신 동의 (선택)</TextLabel>
            <ReadMore>
              <FontAwesomeIcon icon={faChevronRight} />
            </ReadMore>
          </CheckBoxContainer>
        </SecondBox>
        <ButtonContainer>
          <Button
            width="350px"
            height="45px"
            fontsize="1.2em"
            clickEvt={handleNextButtonClick}
          >
            다 음
          </Button>
        </ButtonContainer>
      </Container>
      {/* 각 약관에 대한 모달 */}
      <YesModal
        isOpen={useTermModalOpen}
        closeModal={() => closeModal("useTerm")}
      >
        {/* 이용약관 내용 */}
      </YesModal>
      <YesModal
        isOpen={privacyModalOpen}
        closeModal={() => closeModal("privacy")}
      >
        {/* 개인정보 수집 및 이용 내용 */}
      </YesModal>
      <YesModal
        isOpen={marketingModalOpen}
        closeModal={() => closeModal("marketing")}
      >
        {/* 광고성 정보 수신 동의 내용 */}
      </YesModal>
    </>
  );
};
