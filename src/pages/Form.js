import React, { useState } from "react";

function Form(props) {
  const [formValues, setFormValues] = useState({
    description: "",
    requestedTo: "",
    isPublic: false,
    type: "",
    quantity: 0,
  });

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
      
      // send formArray to the backend API
      fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formArray)
      })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          props.newWindow.close();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Form submission failed");
        props.newWindow.close();
      });
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

