import { AdminAxiosApi } from "../../api/AdminAxiosApi";

//정지 회원 조회
export const StopMemberList = async (setData, setStatus) => {
    console.log('정지 회원 조회 axios 실행')
    try {
        const res = await AdminAxiosApi.stopMemberList();
        setData(res.data);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    } setStatus('')
};