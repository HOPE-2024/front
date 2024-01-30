import axios from "axios";
import { Common } from "../utils/Common";

export const MemberAxiosApi = {
  // 액세스 토큰을 통한 로그인한 회원의 정보 상세 조회
  memberGetOne: async () => {
    const accessToken = localStorage.getItem("accessToken");
    return await axios.get(
      Common.KH_DOMAIN + `/member/detail`,
      Common.tokenHeader
    );
  },
};
