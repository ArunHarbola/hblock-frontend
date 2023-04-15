import { useState, useEffect } from "react";
import api from '../context/transactionApiHospital1';

export default function ForRequest() {
  const [requestId, setRequestId] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchId = async () => {
      const response = await api.get("/new-request-id");
      const data = response.data;
      setRequestId(data);
    };
    fetchId();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.post("/submit-form", { id: requestId.id, name });
    // Handle the response as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="hidden" name="id" value={requestId?.id} />
      <button type="submit">Submit</button>
    </form>
  );
}
