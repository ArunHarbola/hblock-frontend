import createApi from "../context/userApi";
import Cookies from "js-cookie";
const url = `${Cookies.get('url')}`;
const token = `${Cookies.get('token')}`;
const api = createApi(url, token);

const fetchRequests = async ()=>{
    try {
        let response = await api.get("/transaction/requests/get-to");
        response = response.data;

        const open = response.open;

        let publicRequests = [];

        for (let r of open){
            if (r.isPublic==="true" && !r.isShut && !r.isDeclined){
                publicRequests.push(r);
            }
        }
        console.log(publicRequests);
    }
    catch (err){
        console.log(err);
    }
}