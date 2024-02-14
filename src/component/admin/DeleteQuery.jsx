import { QueryAxiosApi } from "../../api/QueryAxiosApi";

export const DeleteQuery = async (id) => {
    console.log('문의글 삭제 실행')
    try {
        const res = await QueryAxiosApi.deleteQuery(id);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }

};