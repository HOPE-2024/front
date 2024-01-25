import axios from "axios";
import { KH_DOMAIN } from "../utils/Common";

export const MemberAxiosApi = {
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
      return await axios.post(KH_DOMAIN + "/auth/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log("회원가입 에러 : ", error);
    }
  },
  // 로그인
  login: async (id, password) => {
    console.log("로그인 시도 : ", id);
    const data = {
      id: id,
      password: password,
    };
    return await axios.post();
  },
};
