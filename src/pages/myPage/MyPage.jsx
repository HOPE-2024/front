import { useParams } from "react-router-dom";
import { MyPageAxiosApi } from "../../api/MyPageAxiosApi";
import {
  MyPageCon,
  MyPageLineCon,
  Line,
  ProfileCon,
  TextCon,
  EditLogo,
  EditButton,
  Input,
  EditBtnCon,
  EditConstainer,
} from "../../css/myPage/MyPageCss";
import { ProfileModal } from "../../utils/modal/ProfileModal";
import { useEffect, useState } from "react";
import { MemberAxiosApi } from "../../api/MemberAxiosApi";
import styled from "styled-components";
import Edit from "../../images/chat/Edit.png";

const Profile = styled.img`
  height: 20%;
`;

export const MyPage = () => {
  const { email } = useParams();
  const [memberId, setMemberId] = useState("");
  const [member, setMember] = useState("");
  const [memberAll, setMemberAll] = useState("");
  const [isCurrentMember, setIsCurrentMember] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [nickName, setNickName] = useState("");
  const [editNickName, setEditNickName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState([]);
  const [editBirthDate, setEditBirthDate] = useState("");
  const [editHeight, setEditHeight] = useState("");
  const [editWeight, setEditWeight] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const memberRsp = await MemberAxiosApi.memberGetOne(); // 멤버 데이터 요청
        const memberId = memberRsp.data.memberId;
        setMemberId(memberId);

        const memberProfileRsp = await MyPageAxiosApi.memberInfoAll(memberId); // 멤버 프로필 데이터 요청
        console.log("멤버 데이터:", memberId);
        console.log("멤버 프로필 데이터:", memberProfileRsp);

        const { memberInfo, memberProfile } = memberProfileRsp;
        setMemberAll(memberProfileRsp);
        console.log("멤버 정보:", memberInfo);
        console.log("멤버 프로필:", memberProfile);

        setIsCurrentMember(true);
      } catch (error) {
        console.error("멤버 정보 요청 오류:", error);
        // 오류 처리 로직 추가
      }
    };

    fetchData();

    // const loginUserEmail = localStorage.getItem("memberId");
    // if (loginUserEmail === memberId) {
    //   setIsCurrentMember(true);
    // }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleImageSelect = (imageName) => {
    setSelectedImage(imageName);
  };

  const handleChange = (e) => {
    setEditNickName(e.target.value);
  };

  const handleBirthDateChange = (e) => {
    setEditBirthDate(e.target.value);
  };

  const handleHeightChange = (e) => {
    setEditHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setEditWeight(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nickNameRsp = await MyPageAxiosApi.memberUpdate(
        member.memberId,
        editNickName
      );
      if (nickNameRsp.status === 200) {
        setNickName(editNickName);
        const infoRsp = await MyPageAxiosApi.memberUpdateInfo(
          memberId,
          editBirthDate,
          editHeight,
          editWeight
        );
        if (infoRsp.status === 200) {
          setEditMode(false);
          const updatedMemberRsp = await MyPageAxiosApi.memberInfoGet(memberId);
          console.log("업데이트 된 멤버인포 정보 : ", updatedMemberRsp);
          if (updatedMemberRsp.status === 200) {
            setMember(updatedMemberRsp.data);
          }
        }
      }
    } catch (error) {
      console.error("Error updating member info:", error);
      // 오류 처리 로직 추가
    }
  };

  return (
    <MyPageCon>
      <MyPageLineCon>
        <ProfileCon>
          {!editMode && (
            <EditLogo
              onClick={() => {
                setEditMode(true);
                setIsOpen(!isOpen);
                openModal(true);
              }}
              src={Edit}
              alt="edit"
            />
          )}
          <Profile
            src={`/images/profile/${memberAll.memberInfo.profile}.png`}
            alt="Profile"
          />
          {!editMode ? (
            <></>
          ) : (
            isModalOpen && (
              <ProfileModal
                memberId={memberId}
                onClick={openModal}
                onImageSelect={handleImageSelect}
              />
            )
          )}
          {!editMode ? (
            <TextCon>{memberAll.memberInfo.nickName}</TextCon>
          ) : (
            <Input
              type="text"
              name="Nickname"
              placeholder="닉네임을 입력하세요."
              value={editNickName}
              onChange={handleChange}
            />
          )}
        </ProfileCon>
        <Line />
        <EditConstainer>
          <TextCon>생년월일 : </TextCon>
          {editMode ? (
            <Input
              type="date"
              value={editBirthDate}
              onChange={handleBirthDateChange}
            />
          ) : (
            <TextCon>{memberAll.memberProfile.birthDate}</TextCon>
          )}
          <TextCon>키 : </TextCon>
          {editMode ? (
            <Input
              type="number"
              value={editHeight}
              onChange={handleHeightChange}
            />
          ) : (
            <TextCon>{memberAll.memberProfile.height}</TextCon>
          )}
          <TextCon>몸무게 : </TextCon>
          {editMode ? (
            <Input
              type="number"
              value={editWeight}
              onChange={handleWeightChange}
            />
          ) : (
            <TextCon>{memberAll.memberProfile.weight}</TextCon>
          )}
          {editMode && (
            <EditBtnCon>
              <EditButton onClick={handleSubmit}>수정</EditButton>
              <EditButton onClick={() => setEditMode(false)}>취소</EditButton>
            </EditBtnCon>
          )}
        </EditConstainer>
      </MyPageLineCon>
    </MyPageCon>
  );
};
