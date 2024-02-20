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

  //회원 페이지 네이션으로 출력
  selectMemberPageList: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/member/page?page=${page}&size=${size}`,
      {}
    );
  },

  //회원 페이지 수 확인
  memberPage: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/member/count?page=${page}&size=${size}`
    );
  },

  //채팅 정지 회원 페이지네이션으로 출력
  chatingMember: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/chatting/page?page=${page}&size=${size}`,
      {}
    );
  },

  //채팅 정지 회원 페이지 수 확인
  chatingMemberPage: async (page, size) => {
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/chatting/count?page=${page}&size=${size}`,
      {}
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
    return await Instance.get(
      Common.KH_DOMAIN + `/admin/stop/count?page=${page}&size=${size}`
    );
  },
};
