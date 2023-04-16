import createApi from "../context/userApi";
import react, { useEffect, useState } from "react";
import Cookies from "js-cookie";
const url = `${Cookies.get('url')}`;
const token = `${Cookies.get('token')}`;
const api = createApi(url, token);

export default function Fx3() {
    const [requests, setRequests] = react.useState({open:[], declined:[], granted:[]});

    useEffect(() => {
const fetchRequests = async ()=>{
    try {
        let response = await api.get("/transaction/requests/get-to");
        response = response.data;

        const open = response.open;
        const declined = response.declined;
        const granted = response.granted;

        setRequests({
            open: open,
            declined: declined,
            granted: granted
        })
        console.log(open, declined, granted);
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