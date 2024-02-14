import { ReportAxiosApi } from "../../api/ReportAxiosApi";


export const UpdateReportActive = async (id, type) => {
    const ReportDto = { id: id, status: type };

    try {
        const res = await ReportAxiosApi.updateReportActive(ReportDto);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
