import { useParams } from "react-router-dom";
import { MyPageAxiosApi } from "../../api/MyPageAxiosApi";
import {
  MyPageCon,
  MyPageLineCon,
  Line,
  ProfileCon,
  EditButton,
} from "../../css/myPage/MyPageCss";
import { ProfileModal } from "../../utils/modal/ProfileModal";
import { useEffect, useState } from "react";
import { MemberAxiosApi } from "../../api/MemberAxiosApi";

export const MyPage = () => {
  const { email } = useParams();
  const [member, setMember] = useState("");
  const [isCurrentMember, setIsCurrentMember] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const memberInfo = async () => {
      const rsp = await MemberAxiosApi.memberGetOne();
      console.log("멤버 데이터 : ", rsp.data);
      if (rsp.status === 200) {
        setMember(rsp.data);
      }
      setIsCurrentMember(true);
    };
    memberInfo();
  }, [email]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageSelect = (imageName) => {
    setSelectedImage(imageName);
  };

  //수정하기
  const handleSubmit = async (e) => {
    const rsp = await MyPageAxiosApi.memberUpdate(member.email, selectedImage);
  };

  return (
    <MyPageCon>
      <MyPageLineCon>
        <ProfileCon>
          {isCurrentMember && (
            <EditButton onClick={openModal}>수 정</EditButton>
          )}
          {isModalOpen && (
            <ProfileModal
              memberId={member.id}
              closeModal={closeModal}
              onImageSelect={handleImageSelect}
            />
          )}
          <>프로필 : {}</>
          <>닉네임 : {member.nickName}</>
        </ProfileCon>
        <Line />
        <>키 : </>
        <>몸무게 : </>
      </MyPageLineCon>
    </MyPageCon>
  );
};
