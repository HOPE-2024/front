import { AdminAxiosApi } from "../../api/AdminAxiosApi";


export const UpdateReportActive = async (id, type) => {
    const ReportDto = { id: id, status: type };

    try {
        const res = await AdminAxiosApi.UpdateReportActive(ReportDto);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
