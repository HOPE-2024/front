import React, { useState } from "react";

export const ProfileModal = () => {
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
  };

  return <></>;
};
