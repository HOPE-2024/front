import { AdminAxiosApi } from "../../api/AdminAxiosApi";





export const SelectReportList = async (listType, setData) => {
    try {
        if (listType === 'all') {
            const res = await AdminAxiosApi.selectReportList();
            console.log(res.data);
            setData(res.data);

        } if (listType === 'before') {
            const res = await AdminAxiosApi.selectBeforeReport();
            console.log(res.data);
            setData(res.data);
        } if (listType === 'after') {
            const res = await AdminAxiosApi.selectAfterReport();
            console.log(res.data);
            setData(res.data);
        }
    } catch (error) {
        console.log(error);
    }


};