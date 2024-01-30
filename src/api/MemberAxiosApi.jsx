import axios from "axios";
import { Common } from "../utils/Common";

export const MemberAxiosApi = {
  // 액세스 토큰을 통한 로그인한 회원의 정보 상세 조회
  memberGetOne: async () => {
    const accessToken = await localStorage.getItem("accessToken");
    await console.log("액세스 토큰" + accessToken);
    return await axios.get(Common.KH_DOMAIN + `/member/detail`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
};
