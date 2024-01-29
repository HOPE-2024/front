import { AdminAxiosApi } from "../../api/AdminAxiosApi";


export const DeleteReport = async (id) => {
    try {
        const res = await AdminAxiosApi.deleteReport(id);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}