import { AdminAxiosApi } from "../../api/AdminAxiosApi";





export const SelectReportList = async (listType, setData, currentPage, setMaxPage) => {
    try {
        if (listType === 'all') {
            try {
                const res = await AdminAxiosApi.selectReportPageList(currentPage, 8);
                setData('');
                setData(res.data);
                console.log(res.data);
                const res2 = await AdminAxiosApi.reportPage(currentPage, 8);
                setMaxPage(res2.data);
            } catch (error) {
                console.log(error);
            }
        } if (listType === 'before') {
            try {
                const res = await AdminAxiosApi.selectBeboreReportPageList(currentPage, 8);
                setData('');
                setData(res.data);
                console.log(res.data);
                const res2 = await AdminAxiosApi.beforeReportPage(currentPage, 8);
                setMaxPage(res2.data);
            } catch (error) {
                console.log(error);
            }
            // const res = await AdminAxiosApi.selectBeforeReport();
            // console.log(res.data);
            // setData(res.data);
        } if (listType === 'after') {
            const res = await AdminAxiosApi.selectafterReportPageList(currentPage, 8);
            setData('');
            setData(res.data);
            console.log(res.data);
            const res2 = await AdminAxiosApi.afterReportPage(currentPage, 8);
            setMaxPage(res2.data);


            // const res = await AdminAxiosApi.selectAfterReport();
            // console.log(res.data);
            // setData(res.data);
        }
    } catch (error) {
        console.log(error);
    }


};