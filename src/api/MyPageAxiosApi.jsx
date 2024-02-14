import axios from "axios";
import { Common } from "../utils/Common";

export const MyPageAxiosApi = {
  memberInfo: async (memberId) => {
    return await axios.get(Common.KH_DOMAIN + `/myPage/detail/${memberId}`);
  },

  memberInfoAll: async (memberId) => {
    try {
      const memberInfoResponse = await axios.get(
        Common.KH_DOMAIN + `/myPage/detail/${memberId}`
      );

      const memberProfileResponse = await axios.get(
        Common.KH_DOMAIN + `/member-info/${memberId}`
      );

      return {
        memberInfo: memberInfoResponse.data,
        memberProfile: memberProfileResponse.data,
      };
    } catch (error) {
      throw error; // 오류를 호출자에게 전파
    }
  },

  memberInfoGet: async (memberId) => {
    return await axios.get(Common.KH_DOMAIN + `/member-info/${memberId}`);
  },

  memberUpdate: async (memberId, nickName) => {
    const member = {
      memberId: memberId,
      nickName: nickName,
    };
    return await axios.put(Common.KH_DOMAIN + `/myPage/modify`, member);
  },

  memberUpdateInfo: async (memberId, birthDate, height, weight) => {
    console.log(
      "memberUpdateInfo 프로필 수정 정보 들어가나? ",
      memberId,
      birthDate,
      height,
      weight
    );
    const data = {
      memberId: memberId,
      birthDate: birthDate,
      height: height,
      weight: weight,
    };
    return await axios.put(
      Common.KH_DOMAIN + `/member-info/modify/${memberId}`,
      data
    );
  },

  memberProfileUpdate: async (memberId, profile) => {
    console.log("프로필 사진 이름 제대로 들어가나? ", memberId, profile);
    const member = {
      memberId: memberId,
      profile: profile,
    };
    return await axios.put(Common.KH_DOMAIN + `/myPage/modify`, member);
  },
};
