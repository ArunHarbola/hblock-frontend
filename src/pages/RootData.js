import React, { useState, useEffect } from 'react';
import api from '../context/transactionApiHospital1';

export default function RootData() {
  const [rootData, setRootData] = useState(null);

  useEffect(() => {
    const fetchRoot = async () => {
      const response = await api.get("/");
      const data = response.data;
      setRootData(data);
    };
    fetchRoot();
  }, []);

  const handleClick = (detail) => {
    console.log(detail);
    // do something with the clicked detail, such as navigate to a new page or display more information
  };

  return (
    <div>
      
      {rootData && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div onClick={() => handleClick(rootData.ORG_NAME)} style={{ cursor: 'pointer', margin: '10px', padding: '10px', backgroundColor: 'lightblue', borderRadius: '5px' }}>
            <h2>Organization Name</h2>
            <p>{rootData.ORG_NAME}</p>
          </div>
          <div onClick={() => handleClick(rootData.ORG_ID)} style={{ cursor: 'pointer', margin: '10px', padding: '10px', backgroundColor: 'lightgreen', borderRadius: '5px' }}>
            <h2>Organization ID</h2>
            <p>{rootData.ORG_ID}</p>
          </div>
          
          {/* <div onClick={() => handleClick(rootData.CHANNEL_NAME)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <h2>CHANNEL_NAME</h2>
            <p>{rootData.CHANNEL_NAME}</p>
          </div> */}
          {/* <div onClick={() => handleClick(rootData.CHAINCODE_NAME)} style={{ cursor: 'pointer', margin: '10px', padding: '10px', backgroundColor: 'yellow', borderRadius: '5px' }}>
            <h2>CHAINCODE_NAME</h2>
            <p>{rootData.CHAINCODE_NAME}</p>
          </div>  */}
        </div>
      )}
    </div>
  );
}
