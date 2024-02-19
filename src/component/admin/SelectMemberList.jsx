import { AdminAxiosApi } from "../../api/AdminAxiosApi";

export const SelectMemberList = async (listType, setData, currentPage, setMaxPage) => {

    try {
        if (listType === 'all') {
            try {
                const res = await AdminAxiosApi.selectMemberPageList(currentPage, 20);
                setData('');
                setData(res.data);
                console.log(res.data);
                const res2 = await AdminAxiosApi.memberPage(currentPage, 20);
                setMaxPage(res2.data);
            } catch (error) {
                console.log(error);
            }
        } if (listType === 'chatting') {
            try {
                const res = await AdminAxiosApi.chatingMember(currentPage, 20);
                setData('');
                setData(res.data);
                console.log(res.data);
                const res2 = await AdminAxiosApi.chatingMemberPage(currentPage, 20);
                setMaxPage(res2.data);
            } catch (error) {
                console.log(error);
            }

        } if (listType === 'stop') {
            const res = await AdminAxiosApi.stopMember(currentPage, 20);
            setData('');
            setData(res.data);
            console.log(res.data);
            const res2 = await AdminAxiosApi.stopMemberPage(currentPage, 20);
            setMaxPage(res2.data);
        }
    } catch (error) {
        console.log(error);
    }


};