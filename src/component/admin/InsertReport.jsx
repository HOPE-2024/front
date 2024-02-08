import { AdminAxiosApi } from "../../api/AdminAxiosApi";


export const InsertReport = async (reportDto) => {

    try {
        const res = await AdminAxiosApi.insertReport(reportDto);
        if (res.status === 200) {
            alert("회원 신고가 완료되었습니다.")
        }
        console.log(res.data);

    } catch (error) {
        console.log(error);
    }
}
