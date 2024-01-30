import { AdminAxiosApi } from "../../api/AdminAxiosApi";


export const ReportRead = async (id, view) => {

    try {
        const res = await AdminAxiosApi.updateReportStatus(id, view);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
