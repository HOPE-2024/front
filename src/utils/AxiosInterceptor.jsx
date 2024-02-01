import axios from "axios";
import { Common } from "./Common";

//axios를 사용하여 HTTP 요청을 보내는 동안 인증 토큰 관리를 자동화하는 코드

export const Instance = axios.create({
  // axios 인스턴스 생성. baseURL은 모든 요청에 자동으로 추가되는 URL의 기본 경로를 설정하는 옵션
  baseURL: Common.KH_DOMAIN,
});

// 요청 인터셉터 추가하기 : HTTP 요청을 서버로 보내기 전에 호출. 모든 요청에 토큰이 자동으로 포함
Instance.interceptors.request.use(
  // 요청전에 수행할 작업을 정의, 요청 헤더에 인증 토큰을 추가
  (config) => {
    const accesstoken = Common.getAccessToken();
    config.headers.Authorization = `Bearer ${accesstoken}`; // 헤더
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기 : 서버로부터 응답을 받은 후 호출. 이곳에서 HTTP 상태코드가 401인지 확인
Instance.interceptors.response.use(
  // 응답을 받은 후 호출
  (response) => {
    return response;
  },
  async (error) => {
    // HTTP 상태가 401인지 확인 하고 handleUnauthorized() 함수를 사용하여 토큰 재발급
    if (error.response && error.response.status === 401) {
      try {
        const newToken = await Common.handleUnauthorized();
        if (newToken) {
          error.config.headers.Authorization = `Bearer ${Common.getAccessToken()}`; // 헤더
          return Instance.request(error.config);
        }
      } catch (error) {
        alert("토큰 재발급 중 문제가 발생했습니다.");
        return Promise.reject(error);
      }
    }
    alert("서버 응답 에러: " + error.message);
    return Promise.reject(error);
  }
);
