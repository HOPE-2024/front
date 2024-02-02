import axios from "axios";
import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

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
};
