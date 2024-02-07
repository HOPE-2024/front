import { useParams } from "react-router-dom";
import { MyPageAxiosApi } from "../../api/MyPageAxiosApi";
import {
  MyPageCon,
  MyPageLineCon,
  Line,
  ProfileCon,
  TextCon,
  EditButton,
} from "../../css/myPage/MyPageCss";
import { ProfileModal } from "../../utils/modal/ProfileModal";
import { useEffect, useState } from "react";
import { MemberAxiosApi } from "../../api/MemberAxiosApi";
import styled from "styled-components";

const Profile = styled.img`
  height: 5vh;
`;

export const MyPage = () => {
  const [memberId, setMemberId] = useState("");
  const { email } = useParams();
  const [member, setMember] = useState("");
  const [isCurrentMember, setIsCurrentMember] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const memberRsp = await MemberAxiosApi.memberGetOne(); // 멤버 데이터 요청
        const memberId = memberRsp.data.memberId;
        setMemberId(memberId);

        const memberProfileRsp = await MyPageAxiosApi.memberInfo(memberId); // 멤버 프로필 데이터 요청

        console.log("멤버 데이터:", memberId);
        console.log("멤버 프로필 데이터:", memberProfileRsp.data);

        if (memberRsp.status === 200) {
          setMember(memberProfileRsp.data);
        }
        setIsCurrentMember(true);
      } catch (error) {
        console.error("멤버 정보 요청 오류:", error);
        // 오류 처리 로직 추가
      }
    };

    fetchData();
  }, []);

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
              memberId={memberId}
              closeModal={closeModal}
              onImageSelect={handleImageSelect}
            />
          )}
          <Profile
            src={`/images/profile/${member.profile}.png`}
            alt="Profile"
          />
          <TextCon>닉네임 : {member.nickName}</TextCon>
        </ProfileCon>
        <Line />
        <TextCon>키 : </TextCon>
        <TextCon>몸무게 : </TextCon>
      </MyPageLineCon>
    </MyPageCon>
  );
};
