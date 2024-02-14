import { QueryAxiosApi } from "../../api/QueryAxiosApi";

//질문 한개 가져오기
export const SelectQuery = async (id, setList) => {
    console.log("질문 한개 가져오는 axios 실행");
    try {
        const res = await QueryAxiosApi.selectQuery(id);
        setList(res.data);

    } catch (error) {
        console.log(error);
    }
};