import axios from "axios";
import { Common } from "../utils/Common";

export const MyPageAxiosApi = {
  userGetOne: async (email) => {
    console.log("이메일 들어옴? :", email);
    return await axios.get(Common.KH_DOMAIN + `/members/detail/${email}`);
  },
};
