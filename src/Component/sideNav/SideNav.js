import React, { Component } from 'react'
import './Sidenav.css'
import {Link} from 'react-router-dom';
 class SideNav extends Component {

    
  render() {
    
    return (
      <div>
                <div className="side-nav">
                    <div className="logo">
                        <Link to="/">
                            <span><i className="fab fa-angrycreative" /></span>
                            <span>LOGO</span>
                        </Link>
                
                     </div>
            <nav>
                <ul >
                <li >
                    <Link to="/Liste">
                    <span><i className="fas fa-address-book" /></span>
                    <span>Liste</span>
                    </Link>
                </li>
                <li >
                    <Link to="/Profil">
                    <span><i className="fab fa-angellist" /></span>
                    <span>Profil</span>
                    </Link>
                </li>
                <li >
                    <a href="#">
                    <span><i className="fab fa-apple" /></span>
                    <span>Morbi leo risus</span>
                    </a>
                </li>
                <li >
                    <a href="#">
                    <span><i className="fab fa-app-store" /></span>
                    <span>Porta ac consectetur</span>
                    </a>
                </li>
                <li >
                    <a href="#">
                    <span><i className="fas fa-anchor" /></span>
                    <span>Vestibulum at eros</span>
                    </a>
                </li>
                </ul>
            </nav>
            </div>

      </div>
    )
  }
}
export default SideNav;
