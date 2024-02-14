import { AdminAxiosApi } from "../../api/AdminAxiosApi";



export const UpdateActive = async (id, type) => {
    const memberResDto = { id: id, active: type };
    try {
        const res = await AdminAxiosApi.updateActive(memberResDto);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
