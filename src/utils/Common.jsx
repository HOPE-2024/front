import axios from "axios";

export const KH_SOCKET_URL = "ws://localhost:8111/ws/chat";

// 새로고침
export const Reload = (navigate) => {
  navigate(0);
};

export const Common = {
  KH_DOMAIN: "http://localhost:8111",

  // 로컬에 저장된 토큰 정보 가져옴
  getAccessToken: () => {
    return localStorage.getItem("accessToken");
  },

  // 발행된 토큰을 로컬에 저장
  setAccessToken: (token) => {
    return localStorage.getItem("accesToken", token);
  },

  // 로컬에 저장된 리프레시 토큰 가져옴
  getRefreshToken: () => {
    return localStorage.getItem("refreshToken");
  },

  // 발행된 리프레시 토큰을 로컬에 저장
  setRefreshToken: (token) => {
    return localStorage.getItem("refreshToken", token);
  },

  // 해더
  tokenHeader: () => {
    const accessToken = Common.getAccessToken();
    return {
      headers: {
        "Content-Type": "application/json",
        Autorization: "Bearer" + accessToken,
      },
    };
  },

  // 액세스 토큰 만료됐을 때, 리프레시 토큰을 통해 액세스 토큰과 리프레시 토큰을 모두 재발급
  handleUnauthorized: async () => {
    const accessToken = Common.getAccessToken();
    const refreshToken = Common.getRefreshToken();

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const rsp = await axios.post(
        `${Common.KH_DOMAIN}/refresh/new`,
        refreshToken,
        config
      );
      console.log("리프레시 토큰 응답 !! : " + JSON.stringify(rsp));

      Common.setAccessToken(rsp.data.accessToken);
      Common.setRefreshToken(rsp.data.refreshToken);
      alert(
        "리프레시 토큰을 통해 액세스 토큰 및 리프레시 토큰이 재발급 되었습니다."
      );
      return rsp.data.accessToken;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
