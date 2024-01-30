import { AdminAxiosApi } from "../../api/AdminAxiosApi";

//이름으로 회원 조회
export const SelectMember = async (name, setData, type, list) => {
    console.log('이름으로 회원 조회 axios 실행')
    var res = null;
    try {
        if (list === 'report') {
            if (type === '이름') {
                res = await AdminAxiosApi.selectReport(name);
                console.log("report");
                console.log("이름");
            }
            if (type === '닉네임') {
                res = await AdminAxiosApi.selectReportNick(name);
                console.log("report");
                console.log("닉네임");
            }
            if (type === '아이디') {
                res = await AdminAxiosApi.selectReportId(name);
                console.log("report");
                console.log("아이디");
            }
        }
        if (list === 'member') {
            if (type === '이름') {
                res = await AdminAxiosApi.selectMember(name);
                console.log("member");
                console.log("이름");
            }
            if (type === '닉네임') {
                res = await AdminAxiosApi.selectMemberNick(name);
                console.log("member");
                console.log("닉네임");
            }
            if (type === '아이디') {
                res = await AdminAxiosApi.selectMemberId(name);
                console.log("member");
                console.log("아이디");
            }
        }

        setData(res.data);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
    // setInputValue('')
    // setStatus('')
};
