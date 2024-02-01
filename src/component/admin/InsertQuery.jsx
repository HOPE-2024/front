import { AdminAxiosApi } from "../../api/AdminAxiosApi";
//1대1 문의 등록
export const InsertQuery = async (queryDto) => {
    console.log('1대1 문의 등록 실행')
    try {
        const res = await AdminAxiosApi.InsertQuery(queryDto);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};