import axios from "axios";
import { KH_DOMAIN } from "../utils/Common";

export const MemberAxiosApi = {
  // 회원가입
  memberJoin: async (id, password, name, nickName, email) => {
    const member = {
      id,
      password,
      name,
      nickName,
      email,
    };
    return await axios.post(KH_DOMAIN + "", member);
  },
  // 회원 조회
  //   memberCheck:
};
