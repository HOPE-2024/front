import axios from "axios";
import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

export const AdminAxiosApi = {
  //모든 회원 조회
  selectMemberList: async () => {
    return await Instance.get(Common.KH_DOMAIN + "/admin/list", {});
  },

  //채팅 정지 회원 조회
  chattingMemberList: async () => {
    return await Instance.get(Common.KH_DOMAIN + "/admin/chatting", {});
  },

  //정지 회원 조회
  stopMemberList: async () => {
    return await Instance.get(Common.KH_DOMAIN + "/admin/stopMember", {});
  },

  //이름으로 회원 조회
  selectMember: async (name) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/memberName/?name=${name}`,
      {}
    );
  },
  //id으로 회원 조회
  selectMemberId: async (name) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/memberId/?name=${name}`,
      {}
    );
  },
  //닉네임으로 회원 조회
  selectMemberNick: async (name) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/memberNick/?name=${name}`,
      {}
    );
  },

  //회원 상태 변경
  updateActive: async (memberResDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/active`,
      memberResDto
    );
  },

  //신고 하기
  insertReport: async (reportDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/insertReport`,
      reportDto
    );
  },

  //신고 상태 변경
  UpdateReportActive: async (ReportDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/ReportActive`,
      ReportDto
    );
  },

  //신고 내용 출력
  selectReportList: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/admin/report`, {});
  },
  //신고  처리 전 출력
  selectBeforeReport: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/admin/beforereport`, {});
  },

  //신고  처리 후 출력
  selectAfterReport: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/admin/afterreport`, {});
  },

  //신고 내용 읽음으로 변경
  updateReportStatus: async (id) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/updateReportStatus?id=${id}`,
      {}
    );
  },

  //신고 내역 삭제
  deleteReport: async (id) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/deletereport/?id=${id}`,
      {}
    );
  },

  //이름으로 신고테이블 조회
  selectReport: async (name) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/selectReport/?name=${name}`,
      {}
    );
  },

  //닉네임으로 신고테이블 조회
  selectReportNick: async (name) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/selectReportNick/?name=${name}`,
      {}
    );
  },

  //아이디로 신고테이블 조회
  selectReportId: async (name) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/selectReportId/?name=${name}`,
      {}
    );
  },

  //1대1 문의 등록
  InsertQuery: async (queryDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/insertQuery`,
      queryDto
    );
  },

  //1대1 문의 전체 조회 
  selectQueryList: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/admin/selectQueryList`, {});
  },

  //내 문의 글 조회 
  selectMyQuery: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/admin/selectMyQuery`, {});
  },

  //1대1 문의 조회
  selectQury: async (id) => {

    return await Instance.get(Common.KH_DOMAIN + `/admin/selectQuery/?id=${id}`, {});
  },

  //문의 댓글 등록
  InsertReply: async (replyDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/insertReply`,
      replyDto
    );
  },
  //문의글 삭제
  deleteQuery: async (id) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/deleteQuery/?id=${id}`,
      {}
    );
  },
  //댓글 삭제
  deleteReply: async (id) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/deleteReply/?id=${id}`,
      {}
    );
  },
  //댓글 수정
  UpdateReply: async (replyDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/updateReply`,
      replyDto
    );
  },

  //문의 글 수정
  updateQuery: async (queryDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/admin/updateQuery`,
      queryDto
    );
  },

  //신고 목록 페이지 네이션으로 출력
  selectReportPageList: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/list/page?page=${page}&size=${size}`,
      {}
    );
  },

  //신고 목록 페이지 수 확인
  reportPage: async (page, size) => {
    return await axios.get(
      Common.KH_DOMAIN + `/admin/list/count?page=${page}&size=${size}`
    );
  },

  //처리전 신고 페이지네이션으로 출력
  selectBeboreReportPageList: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/beforelist/page?page=${page}&size=${size}`,
      {}
    );
  },

  //처리전 신고 페이지 수 확인
  beforeReportPage: async (page, size) => {
    return await axios.get(
      Common.KH_DOMAIN + `/admin/beforelist/count?page=${page}&size=${size}`
    );
  },

  //처리 후 신고 페이지네이션으로 출력
  selectafterReportPageList: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/afterlist/page?page=${page}&size=${size}`,
      {}
    );
  },

  //처리 후 신고 페이지 수 확인
  afterReportPage: async (page, size) => {
    return await axios.get(
      Common.KH_DOMAIN + `/admin/afterlist/count?page=${page}&size=${size}`
    );
  },

  //회원 페이지 네이션으로 출력
  selectMemberPageList: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/member/page?page=${page}&size=${size}`,
      {}
    );
  },

  //회원 페이지 수 확인
  memberPage: async (page, size) => {
    return await axios.get(
      Common.KH_DOMAIN + `/admin/member/count?page=${page}&size=${size}`
    );
  },

  //채팅 정지 회원 페이지네이션으로 출력
  chatingMember: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/chating/page?page=${page}&size=${size}`,
      {}
    );
  },

  //채팅 정지 회원 페이지 수 확인
  chatingMemberPage: async (page, size) => {
    return await axios.get(
      Common.KH_DOMAIN + `/admin/chating/count?page=${page}&size=${size}`
    );
  },

  //정지 회원 페이지네이션으로 출력
  stopMember: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/stop/page?page=${page}&size=${size}`,
      {}
    );
  },

  //정지 회원  페이지 수 확인
  stopMemberPage: async (page, size) => {
    return await axios.get(
      Common.KH_DOMAIN + `/admin/stop/count?page=${page}&size=${size}`
    );
  },

  //자주하는 질문 가져오기
  oftenQuery: async () => {
    return await axios.get(Common.KH_DOMAIN + `/admin/oftenQuery`, {});
  },
};
