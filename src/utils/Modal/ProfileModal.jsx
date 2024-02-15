import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MyPageAxiosApi } from "../../api/MyPageAxiosApi";

const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  padding-top: 60px;
`;

const ModalContent = styled.div`
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const EditBtnCon = styled.div`
  padding-bottom: 5vh;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #353535;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ProfileContainer = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
`;

const EditButton = styled.button`
  font-size: 1em;
  height: 2em;
  border-radius: 4px;
  color: white;
  background-color: var(--NAVY);
  border: 1px solid white;
  cursor: pointer;
`;

const ImageListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageItem = styled.img`
  width: 10vh;
  margin: 1vh;
  cursor: pointer;

  &:hover {
    border: 2px solid #333;
  }
`;

export const ProfileModal = ({ memberId, onImageSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleImageSelect = async (imageName) => {
    setSelectedImage(imageName);
    onImageSelect(imageName, memberId);
    console.log("모달 데이터 확인", memberId);
    // 선택된 프로필 이미지 이름을 서버로 전송하여 업데이트
    try {
      await MyPageAxiosApi.memberProfileUpdate(memberId, imageName);
    } catch (error) {
      console.error("Error updating profile:", error);
      // 에러 처리 로직 추가
    }
    closeModal();
  };

  useEffect(() => {
    console.log("isModalOpen ProfileModal.jsx", isModalOpen);
  }, [isModalOpen]);

  const imageList = [
    "Ellipse1",
    "Ellipse2",
    "Ellipse3",
    "Ellipse4",
    "Ellipse5",
    "Ellipse6",
    "Ellipse7",
    "Ellipse18",
    "Ellipse19",
    "Ellipse20",
    "Ellipse21",
    "Ellipse22",
    "Ellipse23",
    "Ellipse24",
    "Ellipse25",
    "Ellipse26",
    "Ellipse27",
    "Ellipse28",
    "Ellipse29",
    "Ellipse30",
    "Ellipse31",
    "Ellipse32",
    "Ellipse33",
    "Ellipse36",
    "Ellipse39",
    "Ellipse40",
    "Ellipse41",
  ];

  return (
    <ProfileContainer>
      <EditBtnCon>
        <EditButton onClick={openModal}>프로필 수정</EditButton>
      </EditBtnCon>
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h3>프로필 사진 선택</h3>
            <ImageListContainer>
              {imageList.map((imageName) => (
                <ImageItem
                  key={imageName}
                  src={"/images/profile/" + imageName + ".png"}
                  alt={imageName}
                  onClick={() => handleImageSelect(imageName)}
                />
              ))}
            </ImageListContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </ProfileContainer>
  );
};
