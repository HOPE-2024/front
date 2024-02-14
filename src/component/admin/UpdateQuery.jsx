
import { ReportAxiosApi } from "../../api/ReportAxiosApi";
//1대1 문의 등록
export const UpdateQuery = async (queryDto) => {
    console.log('1대1 문의 등록 실행')

    try {
        const res = await ReportAxiosApi.updateQuery(queryDto);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};