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
  // 토큰 없이 회원 상세 조회
  memberGetDetail: async (memberId) => {
    console.log("기존 회원 가입 여부 확인 id: ", memberId);
    const data = {
      memberId: memberId,
    };
    return await axios.get(
      `${Common.KH_DOMAIN}/email/idcheck?memberId=${memberId}`,
      data
    );
  },
  // 카카오로그인
  kakaoLogin: async (data) => {
    try {
      const rsp = await axios.post(Common.KH_DOMAIN + "/member/kakaoLogin", {
        kakaoData: data,
      });
      console.log("카카오로그인 성공: ", data);
      return rsp;
    } catch (error) {
      console.error("카카오 로그인 실패: ", error);
    }
  },

  // 네이버 토큰
  getNaverToken: async (code) => {
    const data = {
      grant_type: "authorization_code",
      client_id: process.env.REACT_APP_NAVER_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_NAVER_REDIRECT_URI,
      code: code,
    };
    return await axios.post("https://nid.naver.com/oauth2.0/token", data, {
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
  },

  // 네이버 회원 정보 가져오기
  getNaverInfo: async (token) => {
    return await Instance.post("/member/navermember");
  },
};
