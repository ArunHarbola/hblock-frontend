import api from "../context/userApi";

const fetchRequests = async ()=>{
    try {
        const response = await api.get("/transaction/requests/get-to");

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