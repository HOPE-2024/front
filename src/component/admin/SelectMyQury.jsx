import { QueryAxiosApi } from "../../api/QueryAxiosApi";

//내 문의글 가져오기
export const SelectMyQury = async (setData) => {
    console.log(' 내 문의글 가져오기 axios 실행')
    try {
        const res = await QueryAxiosApi.selectMyQuery();
        setData(res.data);
        console.log(res.data);

    } catch (error) {
        console.log(error);
    }
};