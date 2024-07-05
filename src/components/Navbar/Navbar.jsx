import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBell } from '@fortawesome/free-solid-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

import "./Navbar.css" 

const Navbar = (props) => {
    return (

        <div>  
            <nav className="navbar">
            <div className="nav-logo">
                    <a href="#"> <img src="images/PentLogo.png" alt="Pentegrasyon Logo"></img> </a> 
            </div>
            <div className="nav-item">
                    <p>🍎 Samba Cafe: Tum Şubeler</p>
                    <ul>    
                         <li>
                            <a href="#"><FontAwesomeIcon icon={faCircleHalfStroke} /></a>
                        </li>

                        <li>
                            <a href="#">Bildirimler</a>
                        </li>
                       
                        <li>
                            <a href="#">Ayarlar</a>
                        </li>

                        
                    </ul>
            </div>
            </nav>
            
        </div>
        
        
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Default Title"
}

export default Navbar;
