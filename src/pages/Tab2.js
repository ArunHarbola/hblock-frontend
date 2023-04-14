import React, { useContext } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import AppContext from '../context/AppContext';
import Form from './Form';
import ReactDOM from 'react-dom';

export default function Tab2 (props){
    const { myVariable, setMyVariable } = useContext(AppContext);
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

    return (
        <div>
            {props.hospitals.map((hospital) => (
                <Card
                    raised={true}
                    style={{ width: '325px', padding: '20px', margin: '20px', display: 'inline-block' }}
                    key={hospital.id}
                    onClick={() => handleClick(hospital.id)}
                >
                    <CardHeader title={hospital.name} />
                    <CardContent>
                        <Typography variant="body1">{hospital.location}</Typography>
                        <Typography variant="body1">{hospital.capacity}</Typography>
                        <Typography variant="body1">{hospital.specialties}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
