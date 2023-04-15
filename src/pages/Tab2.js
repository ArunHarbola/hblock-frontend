import React, { useContext , useEffect , useState} from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import AppContext from '../context/AppContext';
import Form from './Form';
import ReactDOM from 'react-dom';
import api from '../context/transactionApiHospital1';

export default function Tab2 (props){
    const { myVariable, setMyVariable } = useContext(AppContext);
    const [requestId, setRequestId] = useState([]);

  useEffect(() => {
    const fetchId = async () => {
      const response = await api.get("/new-request-id");
      const data = response.data;
      setRequestId(data);
    };
    fetchId();
  }, []);
    const handleClick = (id) => {
        setMyVariable(id);
        props.handleTabClick(id);
        const newWindow = window.open('', '_blank', 'width=600,height=600');
        newWindow.document.body.innerHTML = '<div id="form-container"></div>';
        ReactDOM.render(
            <Form
                newWindow={newWindow}
                initialValues={{
                    description: '',
                    requestedTo: '',
                    isPublic: false,
                    type: '',
                    quantity: '',
                }}
                hospital={props.hospitals.find((hospital) => hospital.id === id)}
                onClose={() => newWindow.close()}
            />,
            newWindow.document.getElementById('form-container')
        );
      };
      const handleGrant= ()=>{

      }
      const handleShut= ()=>{
        
      }
      const handleDecline= ()=>{
        
      }
    const onHandleGrant = () =>{
        const newWindow = window.open('', '_blank', 'width=250,height=250');
        newWindow.document.body.innerHTML = '<div id="form-container"></div>';
        ReactDOM.render(
            <form onSubmit={handleGrant}>
                <label>Do you want to Grant </label>
      <input type="text" name="id" value={requestId?.id} />
      <br/>
      <br/>
      <button type="submit">Yes</button>
    </form>,
            newWindow.document.getElementById('form-container')
        );
    }
    const onHandleShut = () =>{
        const newWindow = window.open('', '_blank', 'width=250,height=250');
        newWindow.document.body.innerHTML = '<div id="form-container"></div>';
        ReactDOM.render(
            <form onSubmit={handleShut}>
                <label>Do you want to Shut Down the transaction  </label>
      <input type="text" name="id" value={requestId?.id} />
      <br/>
      <br/>
      <button type="submit">Yes</button>
    </form>,
            newWindow.document.getElementById('form-container')
        );
    }
    const onHandleDecline = () =>{
        const newWindow = window.open('', '_blank', 'width=250,height=250');
        newWindow.document.body.innerHTML = '<div id="form-container"></div>';
        ReactDOM.render(
            <form onSubmit={handleDecline}>
                <label>Do you want to Decline the transaction </label>
      <input type="text" name="id" value={requestId?.id} />
      <br/>
      <br/>
      <button type="submit">Yes</button>
    </form>,
            newWindow.document.getElementById('form-container')
        );
    }
    return (
        <>
        {/* // <div>
        //     {props.hospitals.map((hospital) => (
        //         <Card
        //             raised={true}
        //             style={{ width: '325px', padding: '20px', margin: '20px', display: 'inline-block' }}
        //             key={hospital.id}
        //             onClick={() => handleClick(hospital.id)}
        //         >
        //             <CardHeader title={hospital.name} />
        //             <CardContent>
        //                 <Typography variant="body1">{hospital.location}</Typography>
        //                 <Typography variant="body1">{hospital.capacity}</Typography>
        //                 <Typography variant="body1">{hospital.specialties}</Typography>
        //             </CardContent>
        //         </Card>
                
        //     ))}
        // </div> */}
        <Card raised={true}
            style={{ width: '325px', padding: '20px', margin: '20px', display: 'inline-block' }}
            key='1'
            onClick={() => handleClick()}>
                    <CardHeader title="Request" />  
                </Card>
        <Card raised={true}
        style={{ width: '325px', padding: '20px', margin: '20px', display: 'inline-block' }}
        key='2'
        onClick={() => onHandleGrant()}>
                <CardHeader title="Grant" />  
            </Card>
            <Card raised={true}
        style={{ width: '325px', padding: '20px', margin: '20px', display: 'inline-block' }}
        key='3'
        onClick={() => onHandleShut()}>
                <CardHeader title="Shut" />  
            </Card>
            <Card raised={true}
        style={{ width: '325px', padding: '20px', margin: '20px', display: 'inline-block' }}
        key='4'
        onClick={() => onHandleDecline()}>
                <CardHeader title="Decline" />  
            </Card>
            </>
        
    );
}
