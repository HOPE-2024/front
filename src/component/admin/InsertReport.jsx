import { ReportAxiosApi } from "../../api/ReportAxiosApi";


export const InsertReport = async (reportDto) => {

    try {
        console.log("reportDto");
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log(reportDto);
        console.log("reportDto");
        const res = await ReportAxiosApi.insertReport(reportDto);
        if (res.status === 200) {
            alert("회원 신고가 완료되었습니다.")
        }
        console.log(res.data);

    } catch (error) {
        console.log(error);
    }
}
