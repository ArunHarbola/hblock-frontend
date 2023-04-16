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
    // <>
    //   <p>{JSON.stringify(requests)}</p>
    // </>
    <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {requests.map((transaction) => (
          <div
            key={transaction.id}
            style={{
              width: "300px",
              margin: "10px",
              padding: "10px",
              border: "1px solid black",
            }}
          >
            <h2>{transaction.description}</h2>
            <p>ID: {transaction.id}</p>
            <p>Quantity : {transaction.quantity}</p>
            <p>requestedBy : {transaction.requestedBy.substring(0, 20) + "..."}</p>
            <p>grantedBy : {transaction.grantedBy.substring(0, 20) + "..."}</p>
            <p>type : {transaction.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}