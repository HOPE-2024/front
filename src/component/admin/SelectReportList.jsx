
import { ReportAxiosApi } from "../../api/ReportAxiosApi";





export const SelectReportList = async (listType, setData, currentPage, setMaxPage) => {

    try {
        if (listType === 'all') {
            try {
                const res = await ReportAxiosApi.selectReportPageList(currentPage, 8);
                setData('');
                setData(res.data);
                console.log(res.data);
                const res2 = await ReportAxiosApi.reportPage(currentPage, 8);
                setMaxPage(res2.data);
            } catch (error) {
                console.log(error);
            }
        } if (listType === 'before') {
            try {
                const res = await ReportAxiosApi.selectBeboreReportPageList(currentPage, 8);
                setData('');
                setData(res.data);
                console.log(res.data);
                const res2 = await ReportAxiosApi.beforeReportPage(currentPage, 8);
                setMaxPage(res2.data);
            } catch (error) {
                console.log(error);
            }

        } if (listType === 'after') {
            const res = await ReportAxiosApi.selectafterReportPageList(currentPage, 8);
            setData('');
            setData(res.data);
            console.log(res.data);
            const res2 = await ReportAxiosApi.afterReportPage(currentPage, 8);
            setMaxPage(res2.data);
        }
    } catch (error) {
        console.log(error);
    }


};