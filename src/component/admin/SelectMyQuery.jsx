import { AdminAxiosApi } from "../../api/AdminAxiosApi";

//내 문의글 가져오기
export const SelectMyQuery = async (setData) => {
    console.log(' 내 문의글 가져오기 axios 실행')
    try {
        const res = await AdminAxiosApi.selectMyQuery();
        setData(res.data);
        console.log(res.data);

    } catch (error) {
        console.log(error);
    }
};