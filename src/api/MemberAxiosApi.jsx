import axios from "axios";
import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

export const MemberAxiosApi = {
  // 액세스 토큰을 통한 로그인한 회원의 정보 상세 조회
  memberGetOne: async () => {
    try {
      const response = await Instance.get("/member/detail");
      console.log("회원 정보 조회 성공:", response.data);
      return response;
    } catch (error) {
      console.error("회원 정보 조회 에러: ", error);
    }
  },
};
