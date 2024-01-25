import axios from "axios";
import { KH_DOMAIN } from "../utils/Common";

export const AdminAxiosApi = {
  //모든 회원 조회
  selectMemberList: async () => {
    return await axios.get(KH_DOMAIN + "/admin/list", {});
  },


  //채팅 정지 회원 조회
  chattingMemberList: async () => {
    return await axios.get(KH_DOMAIN + "/admin/chatting", {});
  },


  //정지 회원 조회
  stopMemberList: async () => {
    return await axios.get(KH_DOMAIN + "/admin/stop", {});
  },

};





