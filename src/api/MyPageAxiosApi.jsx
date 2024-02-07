import axios from "axios";
import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

export const MyPageAxiosApi = {
  memberInfo: async (memberId) => {
    console.log("멤버 아이디 보내기", memberId);
    return await axios.get(Common.KH_DOMAIN + `/myPage/detail/${memberId}`);
  },

  memberUpdate: async (memberId, profile) => {
    console.log("프로필 사진 이름 제대로 들어가나? ", profile, memberId);
    const member = {
      memberId: memberId,
      profile: profile,
    };
    return await axios.put(Common.KH_DOMAIN + `/myPage/modify`, member);
  },
};
