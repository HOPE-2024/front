import axios from "axios";
import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

export const AuthAxiosApi = {
  // 회원가입
  memberJoin: async (id, password, name, nickName, email, phoneNumber) => {
    try {
      const data = {
        memberId: id,
        password: password,
        name: name,
        nickName: nickName,
        email: email,
        phone: phoneNumber,
      };
      return await axios.post(Common.KH_DOMAIN + "/auth/signup", data);
    } catch (error) {
      console.log("회원가입 에러 : ", error);
    }
  },
  // 중복 체크
  checkUnique: async (type, data) => {
    console.log("중복 체크 !! : ", data);
    const dataMap = {
      type: type,
      data: data,
    };
    return await axios.post(Common.KH_DOMAIN + "/auth/isUnique", dataMap);
  },
  // 로그인
  login: async (id, password) => {
    console.log("로그인 시도 : ", id);
    const data = {
      memberId: id,
      password: password,
    };
    try {
      const response = await Instance.post("/auth/login", data);
      console.log(
        "로그인 성공. 액세스 토큰:",
        response.data.accessToken,
        "리프레시 토큰:",
        response.data.refreshToken,
        "권한 정보",
        response.data.authority
      );
      return response;
    } catch (error) {
      console.error("로그인 실패: ", error);
    }
  },
};
