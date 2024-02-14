import axios from "axios";
import { Common } from "../utils/Common";

export const EmailAxiosApi = {
  // 아이디 찾기: 이메일로 인증번호 발송
  emailSand: async (email) => {
    console.log("서버로 이메일 전송 완료!", email);
    const data = {
      email: email,
    };
    return await axios.post(
      `${Common.KH_DOMAIN}/email/code?email=${email}`,
      data
    );
  },
  // 아이디 찾기: 인증번호 입력 후 아이디 찾기
  findIdByEmail: async (email) => {
    console.log("인증 완료 후 이메일 전송 !", email);
    const data = {
      email: email,
    };
    return await axios.post(
      `${Common.KH_DOMAIN}/email/findidbyemail?email=${email}`,
      data
    );
  },
  // 비밀번호 재설정
  passwordReset: async (dataset) => {
    console.log("정보 변경 요청 아이디와 비번 : ", dataset);
    const data = {
      memberId: dataset.memberId,
      password: dataset.password,
    };
    try {
      const rsp = await axios.post(Common.KH_DOMAIN + "/email/resetpw", data);
      console.log("비밀번호 api 재설정 결과 : ", rsp.data);
      return rsp.data;
    } catch (error) {
      console.log("비밀번호 재설정 오류 !! :", error);
      throw error;
    }
  },
};
