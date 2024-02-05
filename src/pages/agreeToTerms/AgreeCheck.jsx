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
  const [allTermModalOpen, setAllTermModalOpen] = useState(false);
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

  // AgreeCheck 컴포넌트에서 회원가입 페이지로 이동하는 함수
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

  // 약관 전체 동의 자세히보기 모달
  const handleAllTermClick = () => {
    setAllTermModalOpen(true);
  };
  // 이용약관 동의 자세히보기 모달
  const handleUseTermClick = () => {
    setUseTermModalOpen(true);
  };
  // 개인정보 수집 동의 자세히보기 모달
  const handlePrivacyClick = () => {
    setPrivacyModalOpen(true);
  };
  // 광고성 마케팅 동의 자세히보기 모달
  const handleMarketingClick = () => {
    setMarketingModalOpen(true);
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
            <ReadMore onClick={handleAllTermClick}>
              <FontAwesomeIcon icon={faChevronRight} />
            </ReadMore>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckInput
              type="checkBox"
              id="useTermCheck"
              checked={useTermCheck}
              onChange={handleUseTermCheck}
            />
            <TextLabel>이용약관 동의(필수)</TextLabel>
            <ReadMore onClick={handleUseTermClick}>
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
            <ReadMore onClick={handlePrivacyClick}>
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
            <ReadMore onClick={handleMarketingClick}>
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
      {/* 전체 선택 시*/}
      {allTermModalOpen && (
        <YesModal
          modalOpen={allTermModalOpen}
          setModalOpen={setAllTermModalOpen}
          checkMessage={` 전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며, 개별적으로 동의를 선택 하실 수 있습니다. 선택 항목에 대한 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.`}
        />
      )}
      {/* 이용약관 선택 시*/}
      {useTermModalOpen && (
        <YesModal
          width="80%"
          height="100%"
          modalOpen={useTermModalOpen}
          setModalOpen={setUseTermModalOpen}
          checkMessage={` 
            제 1조 (약관의 적용)
            1. 본 이용 약관은 HOPE (이하 "당사")가 제공하는 모든 서비스 (이하 "서비스")에 
            적용됩니다.
            2. 서비스를 이용함으로써 사용자는 본 약관에 동의하는 것으로 간주됩니다.
            
            제 2조 (서비스의 목적)
            1. 당사의 서비스는 의료, 약학, 기대 수명, 안면 연령 추정 등에 관련된 정보를 
            제공합니다.
            2. 이 서비스는 오락 및 정보 제공 목적으로만 사용되어야 하며, 전문 의학적 
            조언이나 진단을 대체하지 않습니다.
            
            제 3조 (정보 제공의 한계)
            1. 당사의 서비스는 일반적인 정보 제공을 목적으로 하며, 어떠한 의학적 조언도 
            제공하지 않습니다.
            2. 서비스에 제공된 정보는 의료 전문가의 진단, 치료 권고 또는 전문적인 의학적 
            조언을 대체할 수 없습니다.
           
            제 4조 (지적 재산권)
            1. 당사 웹사이트와 서비스에 포함된 모든 내용은 저작권 및 기타 지적 재산권 
            법에 의해 보호됩니다.
            
            제 5조 (서비스 이용)
            1. 사용자는 서비스를 약관에 따라 이용할 수 있습니다.
            2. 서비스 이용 시에는 관련 법령 및 약관에 준수해야 합니다.
            3. 사용자는 서비스 이용 중 다른 사용자의 권리를 침해하지 않아야 합니다.
            4. 서비스 이용 중 발생하는 일체의 책임은 사용자에게 있습니다.
           
            제 6조 (서비스 제공의 중지 및 변경, 중단)
            1. 당사는 기술적인 이유나 서비스 운영상의 필요성에 따라 서비스 제공을 
            일시적으로 중지할 수 있습니다.
            2. 당사는 사전 공지 후 서비스 제공을 중지할 수 있으며, 이로 인해 발생하는 
            손해에 대해서는 책임을 지지 않습니다.
            3. 당사는 서비스의 내용을 변경하거나 중단할 수 있습니다.
            4. 서비스 변경 또는 중단에 따라 발생하는 손해에 대해서는 당사는 책임을 
            지지 않습니다.
            
            제 7조 (면책 조항)
            1. 당사는 천재지변, 전쟁, 기간통신사업자의 서비스 중단 등 부득이한 사유로 인해 
            서비스 제공에 장애가 발생하는 경우 책임을 지지 않습니다.
            2. 당사는 사용자의 귀책사유로 인해 발생하는 손해에 대해서도 책임을 
            지지 않습니다.`}
        />
      )}
      {/* 개인정보 수집 선택 시*/}
      {privacyModalOpen && (
        <YesModal
          width="80%"
          height="98%"
          modalOpen={privacyModalOpen}
          setModalOpen={setPrivacyModalOpen}
          checkMessage={` 
          제 1조 (개인정보 수집)
          1. 당사는 서비스 향상을 위해 필요한 최소한의 개인정보만을 수집합니다.
          2. 이에는 사용자가 서비스를 이용하는 과정에서 제공하는 정보 
          (예: 연령, 성별 등)가 포함될 수 있습니다.
          
          제 2조 (개인정보 보호)
          1. 당사는 사용자의 개인정보를 안전하게 보호하고 관리하는 데 최선을 다합니다.
          2. 개인정보는 법적 요구 사항에 따라 보관되며, 무단 접근, 공개, 변조 또는 
          파괴로부터 보호됩니다.
          
          제 3조 (개인정보의 공유)
          1. 당사는 사용자의 명시적 동의 없이 개인정보를 제3자와 공유하거나 
          공개하지 않습니다.
          2. 법적 요구 사항이나 법 집행 기관의 요청에 따라 예외적으로 정보를 
          공개할 수 있습니다.
          
          제 4조 (개인정보 접근 및 수정)
          1. 사용자는 언제든지 자신의 개인정보에 접근하거나 수정, 삭제를 요청
          할 수 있습니다.
          2. 또한, 개인정보 처리에 대한 동의를 철회할 수 있습니다.
          
          제 5조 (개인정보의 보유 및 이용기간)
          1. 당사는 개인정보를 보관하는 기간은 개인정보의 수집 및 이용목적이 달성되는 
          시점까지로 합니다.
          2. 법령에 따라 보관할 필요가 있는 경우에는 해당 법령에서 정한 기간 동안 
          개인정보를 보관합니다.
          
          제 6조 (개인정보의 파기)
          1. 개인정보 보유기간이 종료된 경우, 당사는 해당 개인정보를 지체 없이 파기합니다.
          2. 파기된 개인정보는 복구 및 복원할 수 없는 방법으로 파기됩니다.
         
          제 7조 (개인정보 보호책임자)
          1. 당사는 개인정보 처리에 관한 업무를 총괄해서 책임지는 개인정보 보호책임자를 
          지정합니다.
          2. 개인정보 보호책임자의 연락처는 당사 웹사이트에서 확인할 수 있습니다.
          
          제 8조 (개인정보 보호 관련 권익침해 신고)
          1. 사용자는 개인정보 보호와 관련하여 권익침해 신고를 할 수 있습니다.
          2. 권익침해 신고에 대한 처리 결과는 신속하게 통지해드립니다.`}
        />
      )}
      {/* 광고성 마케팅 선택 시*/}
      {marketingModalOpen && (
        <YesModal
          height="35%"
          modalOpen={marketingModalOpen}
          setModalOpen={setMarketingModalOpen}
          checkMessage={` 
          [선택] 광고성 정보 수신 동의

          당사인 HOPE는 회원님이 수집 및 이용에 동의한 개인정보를 활용하여 
          다양한 전자적 전송 매체를 통해 개인 맞춤형 정보를 전송할 수 있습니다.
          본 동의는 선택사항이며, 동의하지 않으셔도 됩니다. 
          
          그러나 동의하지 않을 경우에는 이벤트 및 프로모션 안내, 유용한 정보를 
          받아보실 수 없습니다.
          
          개인정보 보호 및 권리에 관한 사항에 대한 자세한 정보는 
          개인정보 처리방침을 참조하십시오.`}
        />
      )}
    </>
  );
};
