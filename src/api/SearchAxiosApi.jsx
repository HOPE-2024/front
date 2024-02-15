import axios from "axios";
import { Common } from "../utils/Common";

export const SearchAxiosApi = {
  // 다중 필터에 따른 의약품 검색
  multiSearch: async (keyword, fields, page) => {
    return await axios.get(
      Common.KH_DOMAIN +
        `/elastic/medicine/multi-search/?keyword=${keyword}&fields=${fields}&page=${page}`
    );
  },

  // 의약품 전체 조회
  allList: async () => {
    return await axios.get(Common.KH_DOMAIN + `/elastic/medicine/all`);
  },

  // documentId에 따른 의약품 검색(상세보기)
  searchId: async (documentId) => {
    return await axios.get(
      Common.KH_DOMAIN + `/elastic/medicine/search-id/?documentId=${documentId}`
    );
  },

  // 즐겨찾기 추가
  likesAdd: async (memberId, documentId) => {
    const data = {
      memberId: memberId,
      documentId: documentId,
    };
    return await axios.post(Common.KH_DOMAIN + `/medicine/likes/add`, data);
  },

  // 즐겨찾기 삭제
  likesDelete: async (memberId, documentId) => {
    return await axios.delete(
      Common.KH_DOMAIN +
        `/medicine/likes/delete?memberId=${memberId}&documentId=${documentId}`
    );
  },

  // 한 회원의 특정 의약품 즐겨찾기 여부 조회
  getLikes: async (memberId, documentId) => {
    console.log(memberId, documentId);
    const data = {
      memberId: memberId,
      documentId: documentId,
    };
    return await axios.post(
      Common.KH_DOMAIN + `/medicine/likes/getLikes`,
      data
    );
  },
};
