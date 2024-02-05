import { AdminAxiosApi } from "../../api/AdminAxiosApi";
//1대1 문의 등록
export const UpdateQuery = async (queryDto) => {
    console.log('1대1 문의 등록 실행')

    try {
        const res = await AdminAxiosApi.updateQuery(queryDto);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};