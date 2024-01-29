import axios from "axios";
import { Common } from "../utils/Common";

export const ChatAxiosApi = {
  // 채팅 내역 전체 조회
  chatList: async () => {
    return await axios.get(Common.KH_DOMAIN + "/chat/chatList");
  },
  // 게시글 채팅방 목록 보기 (postId 있음)
  roomList: async () => {
    return await axios.get(Common.KH_DOMAIN + "/chat/list");
  },
  // 자유 채팅방 목록 보기 (postId 없음)
  freeChatList: async () => {
    return await axios.get(Common.KH_DOMAIN + "/chat/freeList");
  },
  // 채팅방 생성 (postId 없음)
  freeChatCreate: async (name) => {
    const chat = {
      name: name,
    };
    return await axios.post(Common.KH_DOMAIN + "/chat/freeNew", chat);
  },
  // 해당 채팅방의 이전 채팅 내역 가져오기
  recentChatLoad: async (roomId) => {
    return await axios.get(Common.KH_DOMAIN + `/chat/message/${roomId}`);
  },
};
