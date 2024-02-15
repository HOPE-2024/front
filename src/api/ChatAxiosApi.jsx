import axios from "axios";
import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

export const ChatAxiosApi = {
  // 채팅 내역 전체 조회
  chatList: async () => {
    return await axios.get(Common.KH_DOMAIN + "/chat/chatList");
  },

  // 자유 채팅방 목록 보기 (postId 없음)
  chatListNow: async () => {
    return await axios.get(Common.KH_DOMAIN + "/chat/freeList");
  },

  // 해당 채팅방 정보 보기
  chatDetail: async (roomId) => {
    console.log("엑시오스에서 룸 아이디 보내기", roomId);
    return await axios.get(Common.KH_DOMAIN + `/chat/room/${roomId}`);
  },

  // 채팅방 생성 (postId 없음)
  freeChatCreate: async (name, category) => {
    console.log("채팅방 만들러 서버간다", name, category);
    const chat = {
      name: name,
      category: category,
    };
    return await axios.post(Common.KH_DOMAIN + "/chat/new", chat);
  },

  // 해당 채팅방의 이전 채팅 내역 가져오기
  recentChatLoad: async (roomId) => {
    return await axios.get(Common.KH_DOMAIN + `/chat/message/${roomId}`);
  },

  // 채팅방 삭제
  roomDelete: async (roomId) => {
    return await axios.delete(Common.KH_DOMAIN + `/chat/dellRoom/${roomId}`);
  },

  // 채팅방 활성화 / 비활성화
  stateRoom: async (roomId, active) => {
    const data = {
      roomId: roomId,
      active: active,
    };
    return await axios.put(Common.KH_DOMAIN + `/chat/stateRoom`, data);
  },

  // 전체 채팅 내역 페이지네이션 조회
  chatPageAllList: async (page, size) => {
    return await axios.get(
      Common.KH_DOMAIN + `/chat/all/page?page=${page}&size=${size}`
    );
  },

  // 전체 채팅 내역 페이지 수 조회
  chatAllPage: async (page, size) => {
    return await axios.get(
      Common.KH_DOMAIN + `/chat/all/count?page=${page}&size=${size}`
    );
  },

  // ============

  // 카테고리로 채팅방 조회
  chatListCategory: async (category) => {
    return await Instance.get(Common.KH_DOMAIN + `/chat/chatList/${category}`);
  },
};
