import { AdminAxiosApi } from "../../api/AdminAxiosApi";

//이름으로 회원 조회
export const SelectMember = async (name, setData, setInputValue, setStatus) => {
    console.log('이름으로 회원 조회 axios 실행')
    try {
        const res = await AdminAxiosApi.selectMember(name);
        setData(res.data);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
    setInputValue('')
    setStatus('')
};
