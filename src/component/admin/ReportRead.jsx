import { ReportAxiosApi } from "../../api/ReportAxiosApi";


export const ReportRead = async (id, view) => {

    try {
        const res = await ReportAxiosApi.updateReportStatus(id, view);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
