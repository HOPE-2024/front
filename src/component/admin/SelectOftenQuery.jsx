import { QueryAxiosApi } from "../../api/QueryAxiosApi";

//자주하는 질문 가져오기
export const SelectOftenQuery = async (setData) => {
    console.log(' //자주하는 질문 가져오기 axios 실행')
    try {
        const res = await QueryAxiosApi.oftenQuery();
        setData(res.data);
        console.log(res.data);

    } catch (error) {
        console.log(error);
    }
};