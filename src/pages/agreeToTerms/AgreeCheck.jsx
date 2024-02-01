import React, { useState, useEffect } from "react";
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
  // 팝업 처리
  const [madalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

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
  const updateAllCheck = () => {
    if (useTermCheck && privacyCheck && marketingCheck) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  };

  useEffect(() => {
    updateAllCheck();
  }, [useTermCheck, privacyCheck, marketingCheck]);

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
    </>
  );
};
