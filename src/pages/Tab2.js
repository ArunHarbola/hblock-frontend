import React, { useContext } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import AppContext from '../context/AppContext';
export default function Tab2 (props){
    const { myVariable,setMyVariable } = useContext(AppContext);
    const handleClick = (id) => {
        setMyVariable(id);
        props.handleTabClick(id);
      };
    return (
        <div>
        {props.hospitals.map((hospitals)=>(
        <Card raised={true} style={{ width: '325px' ,padding:'20px',margin:'20px',display:'inline-block'}} key={hospitals.id} onClick={()=>{handleClick(hospitals.id)}}>
            <CardHeader title={hospitals.name} />
            <CardContent>
                <Typography variant="body1">
                    {hospitals.location}
                </Typography>
                <Typography variant="body1">
                    {hospitals.capacity}
                </Typography>
                <Typography variant="body1">
                    {hospitals.specialties}
                </Typography>
            </CardContent>
        </Card>
    ))}
    </div>
    )
}