import api from "../context/userApi";

const fetchRequests = async ()=>{
    try {
        const response = await api.get("/transaction/requests/get-to");

        const open = response.open;
        const declined = response.declined;
        const granted = response.granted;

        console.log(open, declined, granted);
    }
    catch (err){
        console.log(err);
    }
}