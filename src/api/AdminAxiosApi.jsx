import axios from "axios";
import { Common } from "../utils/Common";

export const AdminAxiosApi = {
  //모든 회원 조회
  selectMemberList: async () => {
    return await axios.get(Common.KH_DOMAIN + "/admin/list", {});
  },

  //채팅 정지 회원 조회
  chattingMemberList: async () => {
    return await axios.get(Common.KH_DOMAIN + "/admin/chatting", {});
  },

  //정지 회원 조회
  stopMemberList: async () => {
    return await axios.get(Common.KH_DOMAIN + "/admin/stopMember", {});
  },

  //이름으로 회원 조회
  selectMember: async (name) => {
    return await axios.post(
      Common.KH_DOMAIN + `/admin/memberName/?name=${name}`,
      {}
    );
  },
  //id으로 회원 조회
  selectMemberId: async (name) => {
    return await axios.post(
      Common.KH_DOMAIN + `/admin/memberId/?name=${name}`,
      {}
    );
  },
  //닉네임으로 회원 조회
  selectMemberNick: async (name) => {
    return await axios.post(
      Common.KH_DOMAIN + `/admin/memberNick/?name=${name}`,
      {}
    );
  },

  //회원 상태 변경
  updateActive: async (memberResDto) => {
    return await axios.post(Common.KH_DOMAIN + `/admin/active`, memberResDto);
  },

  //신고 상태 변경
  UpdateReportActive: async (ReportDto) => {
    return await axios.post(Common.KH_DOMAIN + `/admin/ReportActive`, ReportDto);
  },

  //신고 내용 출력
  selectReportList: async () => {
    return await axios.get(Common.KH_DOMAIN + `/admin/report`, {});
  },
  //신고  처리 전 출력
  selectBeforeReport: async () => {
    return await axios.get(Common.KH_DOMAIN + `/admin/beforereport`, {});
  },

  //신고  처리 후 출력
  selectAfterReport: async () => {
    return await axios.get(Common.KH_DOMAIN + `/admin/afterreport`, {});
  },




  //신고 내용 읽음으로 변경
  updateReportStatus: async (id) => {
    return await axios.post(Common.KH_DOMAIN + `/admin/updateReportStatus?id=${id}`, {});
  },



  //신고 내역 삭제
  deleteReport: async (id) => {
    return await axios.post(Common.KH_DOMAIN + `/admin/deletereport/?id=${id}`, {});
  },



  //이름으로 신고테이블 조회
  selectReport: async (name) => {
    return await axios.post(
      Common.KH_DOMAIN + `/admin/selectReport/?name=${name}`,
      {}
    );
  },

  //닉네임으로 신고테이블 조회
  selectReportNick: async (name) => {
    return await axios.post(
      Common.KH_DOMAIN + `/admin/selectReportNick/?name=${name}`,
      {}
    );
  },

  //아이디로 신고테이블 조회
  selectReportId: async (name) => {
    return await axios.post(
      Common.KH_DOMAIN + `/admin/selectReportId/?name=${name}`,
      {}
    );
  },

  //1대1 문의 등록
  InsertQuery: async (queryDto) => {
    return await axios.post(
      Common.KH_DOMAIN + `/admin/insertQuery`,
      queryDto
    );
  },

  //1대1 문의 전체 조회 
  selectQuryList: async () => {
    return await axios.get(Common.KH_DOMAIN + `/admin/selectQuryList`, {});
  },
  //1대1 문의 조회 
  selectQury: async (id) => {
    return await axios.get(Common.KH_DOMAIN + `/admin/selectQury/?id=${id}`, {});
  },







};
