import createApi from "../context/userApi";
import Cookies from "js-cookie";
const url = `${Cookies.get('url')}`;
const token = `${Cookies.get('token')}`;
const api = createApi(url, token);

const fetchRequests = async ()=>{
    try {
        let response = await api.get("/transaction/requests/get-by");
        response = response.data;

        const open = response.open;
        const closed = response.closed;
        const declined = response.declined;
        const granted = response.granted;

        console.log(open, closed, declined, granted);
    }
    catch (err){
        console.log(err);
    }
}