import React, { Component } from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import telechargement from'../../telechargement.jpg';
import { Dropdown ,Image,Button} from 'react-bootstrap';
import  Nav  from 'react-bootstrap/Nav';

  
  const Header=props=>(
   
    <div className="header">
              <div className="nav_end">
             
              <Nav className="justify-content-end info_profile" activeKey="/home">
                <Nav.Item>
                
                  <Nav.Link eventKey="link-3" >
                  <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                  <Image src={telechargement} width="40" height="40" roundedCircle  />
                  </Dropdown.Toggle>
                
                  <Dropdown.Menu className="profil_info">
                  <Dropdown.Item ><Link to="/Profil">Profil</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                  </Nav.Link>
                </Nav.Item>
                </Nav>
              
              </div>
    </div>


  )



export default Header;
