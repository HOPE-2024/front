import React, { useState, useEffect } from "react";
import { Content, Left, Right } from "../../css/template/FooterStyle";
import { YesModal } from "../../utils/modal/YesModal";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 상태 변경을 추적하기 위한 useEffect
  useEffect(() => {
    console.log("footer modla : " + isModalOpen); // 상태가 변경될 때마다 로그를 찍음
  }, [isModalOpen]); // isModalOpen 상태가 변경될 때마다 실행됨

  const handleLinkClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Content>
        <Left>
          <span onClick={handleLinkClick}>이용 약관 및 개인정보 처리방침</span>
        </Left>
        <Right>
          <span>ⓒ HOPE</span>
        </Right>
      </Content>

      {isModalOpen && (
        <YesModal
          width="60%"
          height="65%"
          modalOpen={isModalOpen}
          setModalOpen={setIsModalOpen}
          checkMessage={
            '본 이용 약관은 HOPE (이하 "당사")가 제공하는 모든 서비스 (이하 "서비스")에 적용됩니다. 서비스를 이용함으로써 사용자는 본 약관에 동의하는 것으로 간주됩니다.당사의 서비스는 의료, 약학, 기대 수명, 안면 연령 추정 등에 관련된 정보를 제공합니다. 이 서비스는 오락 및 정보 제공 목적으로만 사용되어야 하며, 전문 의학적 조언이나 진단을 대체하지 않습니다.\n\n당사의 서비스는 일반적인 정보 제공을 목적으로 하며, 어떠한 의학적 조언도 제공하지 않습니다. 서비스에 제공된 정보는 의료 전문가의 진단, 치료 권고 또는 전문적인 의학적 조언을 대체할 수 없습니다.\n\n당사 웹사이트와 서비스에 포함된 모든 내용은 저작권 및 기타 지적 재산권 법에 의해 보호됩니다.\n\n당사는 서비스 향상을 위해 필요한 최소한의 개인정보만을 수집합니다. 이에는 사용자가 서비스를 이용하는 과정에서 제공하는 정보 (예: 연령, 성별 등)가 포함될 수 있습니다.\n\n당사는 사용자의 개인정보를 안전하게 보호하고 관리하는 데 최선을 다합니다. 개인정보는 법적 요구 사항에 따라 보관되며, 무단 접근, 공개, 변조 또는 파괴로부터 보호됩니다.\n\n당사는 사용자의 명시적 동의 없이 개인정보를 제3자와 공유하거나 공개하지 않습니다. 법적 요구 사항이나 법 집행 기관의 요청에 따라 예외적으로 정보를 공개할 수 있습니다.\n\n사용자는 언제든지 자신의 개인정보에 접근하거나 수정, 삭제를 요청할 수 있습니다. 또한, 개인정보 처리에 대한 동의를 철회할 수 있습니다.'
          }
        />
      )}
    </>
  );
};
