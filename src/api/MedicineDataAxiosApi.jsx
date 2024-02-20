import axios from "axios";
import { Common } from "../utils/Common";

export const MedicineDataAxiosApi = {
  // 의약품 추가
  addData: async (props) => {
    return await axios.post(
      Common.KH_DOMAIN + "/elastic/medicine/add",
      props
    );
  },

  // 의약품 삭제
  deleteData: async (documentId) => {
    return await axios.delete(
      Common.KH_DOMAIN + `/elastic/medicine/delete?documentId=${documentId}`
    );
  },

  // 검색어 저장
  addSearchLog: async (keyword) => {
    return await axios.post(
      Common.KH_DOMAIN + `/elastic/medicine/add-search-log?keyword=${keyword}`
    );
  },

  // 검색어 빈도 집계
  getSearchLog: async () => {
    return await axios.get(
      Common.KH_DOMAIN + "/elastic/medicine/get-search-log"
    );
  },
};
