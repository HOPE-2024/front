


import { AdminAxiosApi } from "../../api/AdminAxiosApi";

//채팅 정지 회원 조회
export const ChattingMemberList = async (setData, setStatus) => {
  console.log('채팅 정지 회원 조회 axios 실행')
  try {
    const res = await AdminAxiosApi.chattingMemberList();
    setData(res.data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
  setStatus('')
};