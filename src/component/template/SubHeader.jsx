import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 50px;
`;

const ArrowBox = styled.div`
  font-size: 40px;
  color: var(--NAVY);
  margin-left: 100px;
  cursor: pointer;
`;

export const SubHeader = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Container>
        <ArrowBox className="back-button" onClick={goBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </ArrowBox>
      </Container>
    </>
  );
};
