import React, { useState , useEffect } from "react";
import createApi from "../context/userApi";

const url = `http://34.131.122.182:8080`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJPUkdfTkFNRSI6Ikhvc3BpdGFsMSIsIk9SR19JRCI6Ikhvc3BpdGFsMU1TUDp4NTA5OjovT1U9YWRtaW4vQ049YWRtaW46Oi9DPUVTL0w9QWxpY2FudGUvPUFsaWNhbnRlL089S3VuZyBGdSBTb2Z0d2FyZS9PVT1UZWNoL0NOPWNhIiwiTVNQX0lEIjoiSG9zcGl0YWwxTVNQIiwiaWF0IjoxNjgxNDU5NzAyfQ.Yf7MWhCMN-hv8GIqm1v87p1zX_aLkgo1bf6K2kbSIxI`;
const api = createApi(url, token);

function Form(props) {
  const [formValues, setFormValues] = useState({
    description: "",
    requestedTo: "",
    isPublic: false,
    type: "",
    quantity: 0,
  });
  const [requestId,setRequestId] = useState([]);
  useEffect(()=>{
    const fetchId = async () => {
      const response = await api.get("/new-request-id");
      const data = response.data;
      // console.log(data);
      setRequestId(data);
    };
    fetchId();
  },[]);

  const [validationErrors, setValidationErrors] = useState({
    description: "",
    requestedTo: "",
    type: "",
    quantity: "",
  });

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formValues.description) {
      errors.description = "Description is required";
      isValid = false;
    }

    if (!formValues.requestedTo) {
      errors.requestedTo = "Requested To is required";
      isValid = false;
    }

    if (!formValues.type) {
      errors.type = "Type is required";
      isValid = false;
    }

    if (formValues.quantity < 1) {
      errors.quantity = "Quantity must be greater than 0";
      isValid = false;
    }

    setValidationErrors(errors);

    return isValid;
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (validateForm()) {
      const formArray = Object.keys(formValues).map((key) => {
        return formValues[key];
      });
      
      if (formArray[2]){
        formArray[2] = "true";
      }
      else {
        formArray[2] = "false";
      }
      formArray.unshift(requestId.id);
      
      // send formArray to the backend API

      let response;
      const submitRequest = async ()=>{
        try {
          response = await api.post("/transaction/blood/request", {
            args: formArray
          });

          console.log(response);
          
        }
        catch (err){
          console.log(err);
        }
      }

      submitRequest();
    }
  };
  

  return (
    <>
      <div style={{ backgroundColor: "ivory" }}>
        <h1 style={{ textAlign: "center" }}>Fill The Below Form </h1>
        <div
          style={{ display: "flex", justifyContent: "center", backgroundColor: "ivory" }}
        >
          <form onSubmit={handleSubmit}>
            <label>ID:
              <input type="text" value={requestId.id}/>
            </label>
            <br />
            <br />
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
              />
              <span style={{ color: "red" }}>{validationErrors.description}</span>
            </label>
            <br />
            <br />
            <label>
              Requested To:
              <input
                type="text"
                name="requestedTo"
                value={formValues.requestedTo}
                onChange={handleInputChange}
              />
              <span style={{ color: "red" }}>{validationErrors.requestedTo}</span>
            </label>
            <br />
            <br />
            <label>
              Is Public:
              <input
                type="checkbox"
                name="isPublic"
                checked={formValues.isPublic}
                onChange={handleInputChange}
              />
            
            </label>
            <br />
            <br />
            <label>
              Type:
              <select name="type" value={formValues.type} onChange={handleInputChange}>
                <option value="">--Please choose an option--</option>
                <option value="blood">Blood</option>
                <option value="plasma">Plasma</option>
                <option value="platelets">Platelets</option>
                </select>
                <span style={{ color: "red" }}>{validationErrors.type}</span>
        </label>
        <br />
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formValues.quantity}
            onChange={handleInputChange}
          />
           <span style={{ color: "red" }}>{validationErrors.quantity}</span>
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default Form;

