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
      Common.KH_DOMAIN + `/admin/member/?name=${name}`,
      {}
    );
  },

  //회원 정지
  updateActive: async (memberResDto) => {
    return await axios.post(Common.KH_DOMAIN + `/admin/active`, memberResDto);
  },

  //신고 내용 출력
  selectReportList: async () => {
    return await axios.get(Common.KH_DOMAIN + `/admin/report`, {});
  },
  //신고 내용 읽음으로 변경
  updateReportStatus: async (id) => {
    return await axios.post(Common.KH_DOMAIN + `/admin/updateReportStatus?id=${id}`, {});
  },



  //신고 내역 삭제
  deleteReport: async (id) => {
    alert(id)
    return await axios.post(Common.KH_DOMAIN + `/admin/deletereport/?id=${id}`, {});
  },






};
