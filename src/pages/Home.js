import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Nav, NavItem } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import React,{useState} from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import Tab2 from './Tab2';
export default function Home(){
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  }
return(
    <div>
      <div style={{display:'flex'}}> <FaBars style={{width:'40px',height:'40px',marginLeft:'20px',marginRight:'40px',marginTop:'10px'}}/><h1>HBlock</h1> <FaInfoCircle size={32} style={{width:'40px',height:'40px',marginLeft:'900px',marginRight:'40px',marginTop:'10px'}}/><IoSettingsOutline style={{width:'40px',height:'40px',marginLeft:'20px',marginRight:'40px',marginTop:'10px'}}/></div>
      <div>
        <Nav variant="tabs" defaultActiveKey="1">
          <NavItem>
              <Nav.Link eventKey="1" onClick={() => handleTabClick(1)}>Tab 1</Nav.Link>
          </NavItem>
          <NavItem>
              <Nav.Link eventKey="2" onClick={() => handleTabClick(2)}>Tab 2</Nav.Link>
          </NavItem>
        </Nav>
        {activeTab === 1 && <div>Tab 1 content</div>}
        {activeTab === 2 && <div><Tab2/></div>}
      </div>
    </div>
);
}