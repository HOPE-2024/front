import { AdminAxiosApi } from "../../api/AdminAxiosApi";
//모든 회원 조회
export const SelectMemberList = async (setData) => {
    console.log('모든 회원 조회 axios 실행')
    try {
        const res = await AdminAxiosApi.selectMemberList();
        setData(res.data);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};