
import react, { useEffect, useState } from "react";
import createApi from "../context/userApi";
import Cookies from "js-cookie";

const url = Cookies.get("url");
const token = Cookies.get("token");
const api = createApi(url, token);

export default function Fx() {
  const [requests, setRequests] = react.useState({open:[], closed:[], declined:[], granted:[]});
  
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        let response = await api.get("/transaction/requests/get-by");
        response = response.data;

        const open = response.open;
        const closed = response.closed;
        const declined = response.declined;
        const granted = response.granted;

        setRequests({
            open: open,
            closed: closed,
            declined: declined,
            granted: granted
        })
        console.log(open, closed, declined, granted);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRequests(); // Call the function to fetch data
  }, []);

  return (
    // <>
    //   <p>{JSON.stringify(requests)}</p>
    // </>
    <div>

    <div>
        <h2 style={{margin: "10px"}}>Open Requests</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {requests.open.map((transaction) => (
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

    <div>
    <h2 style={{margin: "10px"}}>Closed Requests</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {requests.closed.map((transaction) => (
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

    <div>
    <h2 style={{margin: "10px"}}>Declined Requests</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {requests.declined.map((transaction) => (
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

    <div>
    <h2 style={{margin: "10px"}}>Granted Requests</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {requests.granted.map((transaction) => (
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



    </div>

  );
}