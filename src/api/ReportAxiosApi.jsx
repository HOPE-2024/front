import axios from "axios";
import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

export const ReportAxiosApi = {
  //신고 하기
  insertReport: async (reportDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/report/insertReport`,
      reportDto
    );
  },

  //신고 상태 변경
  updateReportActive: async (ReportDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/report/ReportActive`,
      ReportDto
    );
  },
  //신고 내용 출력
  selectReportList: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/report/report`, {});
  },
  //신고  처리 전 출력
  selectBeforeReport: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/report/beforereport`, {});
  },

  //신고  처리 후 출력
  selectAfterReport: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/report/afterreport`, {});
  },
  //신고 내용 읽음으로 변경
  updateReportStatus: async (id) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/report/updateReportStatus?id=${id}`,
      {}
    );
  },

  //신고 내역 삭제
  deleteReport: async (id) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/report/deletereport/?id=${id}`,
      {}
    );
  },


  //이름으로 신고테이블 조회
  selectReport: async (name) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/report/selectReport/?name=${name}`,
      {}
    );
  },

  //닉네임으로 신고테이블 조회
  selectReportNick: async (name) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/report/selectReportNick/?name=${name}`,
      {}
    );
  },

  //아이디로 신고테이블 조회
  selectReportId: async (name) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/report/selectReportId/?name=${name}`,
      {}
    );
  },

  //신고 목록 페이지 네이션으로 출력
  selectReportPageList: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/report/listA/page?page=${page}&size=${size}`,
      {}
    );
  },

  //신고 목록 페이지 수 확인
  reportPage: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/report/listA/count?page=${page}&size=${size}`,
      {}
    );
  },

  //처리전 신고 페이지네이션으로 출력
  selectBeboreReportPageList: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/report/beforelist/page?page=${page}&size=${size}`,
      {}
    );
  },

  //처리전 신고 페이지 수 확인
  beforeReportPage: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/report/beforelist/count?page=${page}&size=${size}`
    );
  },

  //처리 후 신고 페이지네이션으로 출력
  selectafterReportPageList: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/report/afterlist/page?page=${page}&size=${size}`,
      {}
    );
  },

  //처리 후 신고 페이지 수 확인
  afterReportPage: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/report/afterlist/count?page=${page}&size=${size}`
    );
  },
};
