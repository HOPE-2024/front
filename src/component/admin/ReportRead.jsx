import { AdminAxiosApi } from "../../api/AdminAxiosApi";


export const ReportRead = async (id) => {
    try {
        const res = await AdminAxiosApi.updateReportStatus(id);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
