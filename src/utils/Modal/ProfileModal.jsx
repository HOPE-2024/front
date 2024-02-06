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

const ProfileItem = styled.img`
  height: 5vh;
`;

export const ProfileModal = ({ onImageSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageSelect = (imageName) => {
    setSelectedImage(imageName);
    onImageSelect(imageName);
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
    <div>
      <ProfileItem
        src={`/images/profile/${selectedImage}.png`}
        alt="Profile"
        onClick={openModal}
      />
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
    </div>
  );
};
