import createApi from "../context/userApi";
import Cookies from "js-cookie";
import react, { useEffect, useState } from "react";
const url = `${Cookies.get('url')}`;
const token = `${Cookies.get('token')}`;
const api = createApi(url, token);
export default function Fx2() {
    const [requests, setRequests] = react.useState([]);

    useEffect(() => {
        const fetchRequests = async ()=>{
    try {
        let response = await api.get("/transaction/requests");
        response = response.data;

        const open = response.open;

        let publicRequests = [];

        for (let r of open){
            if (r.isPublic==="true" && !r.isShut && !r.isGranted){
                publicRequests.push(r);
            }
        }
        
        setRequests(publicRequests);
        console.log(publicRequests);
    }
    catch (err){
        console.log(err);
    }
}
fetchRequests();
}, []);
return (
    <>
      <p>{JSON.stringify(requests)}</p>
    </>
  );
}