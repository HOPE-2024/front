import { AdminAxiosApi } from "../../api/AdminAxiosApi";
//모든 회원 조회
// export const SelectMemberList = async (setData) => {
//     console.log('모든 회원 조회 axios 실행')
//     try {
//         const res = await AdminAxiosApi.selectMemberList();
//         setData(res.data);
//         console.log(res.data);
//     } catch (error) {
//         console.log(error);
//     }
// };
export const SelectMemberList = async (listType, setData, currentPage, setMaxPage) => {
    try {
        if (listType === 'all') {
            try {
                const res = await AdminAxiosApi.selectMemberPageList(currentPage, 8);
                setData('');
                setData(res.data);
                console.log(res.data);
                const res2 = await AdminAxiosApi.memberPage(currentPage, 8);
                setMaxPage(res2.data);
            } catch (error) {
                console.log(error);
            }
        } if (listType === 'chatting') {
            try {
                const res = await AdminAxiosApi.chatingMember(currentPage, 8);
                setData('');
                setData(res.data);
                console.log(res.data);
                const res2 = await AdminAxiosApi.chatingMemberPage(currentPage, 8);
                setMaxPage(res2.data);
            } catch (error) {
                console.log(error);
            }

        } if (listType === 'stop') {
            const res = await AdminAxiosApi.stopMember(currentPage, 8);
            setData('');
            setData(res.data);
            console.log(res.data);
            const res2 = await AdminAxiosApi.stopMemberPage(currentPage, 8);
            setMaxPage(res2.data);
        }
    } catch (error) {
        console.log(error);
    }


};