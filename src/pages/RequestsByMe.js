import api from "../context/userApi";

const fetchRequests = async ()=>{
    try {
        const response = await api.get("/transaction/requests/get-by");

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