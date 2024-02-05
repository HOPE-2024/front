import axios from "axios";
import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

export const MyPageAxiosApi = {
  memberInfo: async (memberId) => {
    return await axios.get(Common.KH_DOMAIN + `/myPage/detail/${memberId}`);
  },
};
