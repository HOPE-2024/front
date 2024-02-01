import axios from "axios";
import moment from "moment";
import "moment/locale/ko"; // 한글 로컬라이제이션
moment.locale("ko"); // 한글 설정 적용

export const KH_SOCKET_URL = "ws://localhost:8111/ws/chat";

export const timeFromNow = (timestamp) => {
  return moment(timestamp).fromNow();
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adds leading 0 if needed
  const day = ("0" + date.getDate()).slice(-2);
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);
  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
};

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
    return localStorage.setItem("accessToken", token);
  },

  // 로컬에 저장된 리프레시 토큰 가져옴
  getRefreshToken: () => {
    return localStorage.getItem("refreshToken");
  },

  // 발행된 리프레시 토큰을 로컬에 저장
  setRefreshToken: (token) => {
    return localStorage.setItem("refreshToken", token);
  },

  // 액세스 토큰 만료됐을 때, 리프레시 토큰을 통해 액세스 토큰과 리프레시 토큰을 모두 재발급
  handleUnauthorized: async () => {
    // 로컬스토리지에서 리프레시 토큰을 가져와 서버에 재발급 요청
    const refreshToken = Common.getRefreshToken();
    try {
      const rsp = await axios.post(
        `${Common.KH_DOMAIN}/refresh/new`,
        refreshToken
      );
      // console.log("handleUnauthorized 응답 데이터 : " + JSON.stringify(rsp));
      // 성공적으로 재발급된 경우 콘솔에 로그 출력
      console.log("새로운 액세스 토큰:", rsp.data.accessToken);
      console.log("새로운 리프레시 토큰:", rsp.data.refreshToken);
      // 서버로부터 받은 새 액세스 & 리프레시 토큰 로컬 스토리지에 덮어쓰기
      Common.setAccessToken(rsp.data.accessToken);
      Common.setRefreshToken(rsp.data.refreshToken);
      alert("액세스 토큰 및 리프레시 토큰이 정상적으로 재발급 되었습니다.");
      return rsp.data.accessToken; // 새로운 액세스 토큰 반환
    } catch (error) {
      console.log("handleUnauthorized 에서 에러가 발생 !! : ", error);
      return false;
    }
  },
};
