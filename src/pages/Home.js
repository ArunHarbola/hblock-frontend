import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Nav, NavItem } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import React,{useEffect, useState} from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import Tab2 from './Tab2';
import AppContext from '../context/AppContext';
export default function Home(){
const hospitals = [
  {
    id: 1,
    name: 'Hospital 1',
    location: 'New York',
    capacity: 500,
    specialties: ['cardiology']
  },
  {
    id: 2,
    name: 'Hospital 2',
    location: 'Los Angeles',
    capacity: 750,
    specialties: ['orthopedics']
  },
  {
    id: 3,
    name: 'Hospital 3',
    location: 'Chicago',
    capacity: 1000,
    specialties: ['emergency']
  },
  // add more hospitals as needed
];
const [myVariable, setMyVariable] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  }
  const [peerData,setPeerData] =useState({});
  useEffect( () => {
    const url = 'http://localhost:3000/peer';
    fetch(url)
    .then(res => res.json()) // Parse the response data
    .then(data => {
      setPeerData(data.peer);
      console.log(peerData.id+'hi'); // Update the state with the peerData
      // Log the peerData to the console
    })
  }, []);

return(
    <div>
      <div style={{display:'flex'}}> <FaBars style={{width:'40px',height:'40px',marginLeft:'20px',marginRight:'40px',marginTop:'10px'}}/><h1>HBlock</h1> <FaInfoCircle size={32} style={{width:'40px',height:'40px',marginLeft:'900px',marginRight:'40px',marginTop:'10px'}}/><IoSettingsOutline style={{width:'40px',height:'40px',marginLeft:'20px',marginRight:'40px',marginTop:'10px'}}/></div>
      <div style={{ display:'flex',height:'100px',widht:'100%',marginTop:'2.6%'}}><h2 style={{marginTop:'20px',marginLeft:'50px'
      }}>About Peer</h2> <div style={{marginLeft:'50%'}}><h3>Peer ID: {peerData.id}</h3>
      <h3>Organization: {peerData.organization}</h3></div></div>
      <div>
        <Nav variant="tabs" defaultActiveKey="1">
          <NavItem>
              <Nav.Link eventKey="1" onClick={() => handleTabClick(1)}>Tab 1</Nav.Link>
          </NavItem>
          <NavItem>
              <Nav.Link eventKey="2" onClick={() => handleTabClick(-1)}>Tab 2</Nav.Link>
          </NavItem>
        </Nav>
        <AppContext.Provider value={{ myVariable, setMyVariable }}>
        {activeTab > 0 && <div>{myVariable}</div>}
        {activeTab === -1 && <div><Tab2 hospitals={hospitals} handleTabClick={handleTabClick}/></div>}
        {console.log(myVariable)}
        </AppContext.Provider>
      </div>
    </div>
);
}

