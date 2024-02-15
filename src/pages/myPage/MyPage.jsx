import { LineButton } from "../../component/common/LineButton";
import { MyPageAxiosApi } from "../../api/MyPageAxiosApi";
import {
  MyPageCon,
  MyPageLineCon,
  Line,
  ProfileCon,
  TextCon,
  TextInfoCon,
  EditLogo,
  EditButton,
  Input,
  InfoCon,
  EditBtnCon,
  NickModalBox,
  ProfileBox,
  EditConstainer,
} from "../../css/myPage/MyPageCss";
import { ProfileModal } from "../../utils/modal/ProfileModal";
import { useEffect, useState } from "react";
import { MemberAxiosApi } from "../../api/MemberAxiosApi";
import styled from "styled-components";
import Edit from "../../images/chat/Edit.png";

const Profile = styled.img`
  height: 13em;
  margin-bottom: 3em;
`;

export const MyPage = () => {
  const [member, setMember] = useState("");
  const [memberId, setMemberId] = useState("");
  const [memberInfo, setMemberInfo] = useState("");
  const [memberProfile, setMemberProfile] = useState("");
  const [isCurrentMember, setIsCurrentMember] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
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
        setMember(memberProfileRsp.memberInfo);
        setMemberInfo(memberProfileRsp.memberInfo);
        setMemberProfile(memberProfileRsp.memberProfile);

        setIsCurrentMember(true);
      } catch (error) {
        console.error("멤버 정보 요청 오류:", error);
        // 오류 처리 로직 추가
      }
    };

    fetchData();

    const loginUserEmail = localStorage.getItem("memberId");
    if (loginUserEmail === memberId) {
      setIsCurrentMember(true);
    }
  }, [memberId]);

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
      const rsp = await MyPageAxiosApi.memberUpdate(memberId, editNickName);
      if (rsp.status === 200) {
        // setNickName(editNickName);
        const rsp = await MyPageAxiosApi.memberUpdateInfo(
          memberId,
          editBirthDate,
          editHeight,
          editWeight
        );
        if (rsp.status === 200) {
          setEditMode(false);
          const rsp = await MyPageAxiosApi.memberInfoAll(memberId);
          console.log("마지막업데이트 되기를", rsp);
          if (rsp.status === 200) {
            setMember(rsp.memberInfo.memberId);
            setMemberInfo(rsp.memberInfo);
            setMemberProfile(rsp.memberProfile);
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
          <ProfileBox>
            <Profile
              src={`/images/profile/${memberInfo.profile}.png`}
              alt="Profile"
            />
          </ProfileBox>
          <NickModalBox>
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
            <InfoCon>
              <TextCon>닉네임</TextCon>
              {!editMode ? (
                <TextInfoCon>{memberInfo.nickName}</TextInfoCon>
              ) : (
                <Input
                  type="text"
                  name="Nickname"
                  placeholder="닉네임을 입력하세요."
                  value={editNickName}
                  onChange={handleChange}
                />
              )}
            </InfoCon>
          </NickModalBox>
        </ProfileCon>
        <Line />
        <EditConstainer>
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
          <InfoCon>
            <TextCon>생년월일</TextCon>
            {editMode ? (
              <Input
                type="date"
                value={editBirthDate}
                onChange={handleBirthDateChange}
              />
            ) : (
              <TextInfoCon>{memberProfile.birthDate}</TextInfoCon>
            )}
          </InfoCon>
          <InfoCon>
            <TextCon>키</TextCon>
            {editMode ? (
              <Input
                type="number"
                value={editHeight}
                onChange={handleHeightChange}
              />
            ) : (
              <TextInfoCon>{memberProfile.height}</TextInfoCon>
            )}
          </InfoCon>
          <InfoCon>
            <TextCon>몸무게</TextCon>
            {editMode ? (
              <Input
                type="number"
                value={editWeight}
                onChange={handleWeightChange}
              />
            ) : (
              <TextInfoCon>{memberProfile.weight}</TextInfoCon>
            )}
          </InfoCon>
          {editMode && (
            <EditBtnCon>
              <LineButton onClick={handleSubmit}>수정</LineButton>
              <LineButton onClick={() => setEditMode(false)}>취소</LineButton>
            </EditBtnCon>
          )}
        </EditConstainer>
      </MyPageLineCon>
    </MyPageCon>
  );
};
