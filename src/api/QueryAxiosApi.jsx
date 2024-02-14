import axios from "axios";
import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

export const QueryAxiosApi = {
  //1대1 문의 등록
  insertQuery: async (queryDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/query/insertQuery`,
      queryDto
    );
  },

  //1대1 문의 전체 조회 
  selectQueryList: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/query/selectQueryList`, {});
  },

  //내 문의 글 조회 
  selectMyQuery: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/query/selectMyQuery`, {});
  },

  //1대1 문의 조회
  selectQuery: async (id) => {

    return await Instance.get(Common.KH_DOMAIN + `/query/selectQuery/?id=${id}`, {});
  },

  //문의 댓글 등록
  insertReply: async (replyDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/query/insertReply`,
      replyDto
    );
  },
  //문의글 삭제
  deleteQuery: async (id) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/query/deleteQuery/?id=${id}`,
      {}
    );
  },
  //댓글 삭제
  deleteReply: async (id) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/query/deleteReply/?id=${id}`,
      {}
    );
  },
  //댓글 수정
  UpdateReply: async (replyDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/query/updateReply`,
      replyDto
    );
  },

  //문의 글 수정
  updateQuery: async (queryDto) => {
    return await Instance.post(
      Common.KH_DOMAIN + `/query/updateQuery`,
      queryDto
    );
  },

  //자주하는 질문 가져오기
  oftenQuery: async () => {
    return await Instance.get(Common.KH_DOMAIN + `/query/oftenQuery`, {});
  },
};
