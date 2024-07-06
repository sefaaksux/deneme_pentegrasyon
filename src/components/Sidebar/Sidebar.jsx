import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faKey,faTruck,faBriefcase } from '@fortawesome/free-solid-svg-icons';

import "./Sidebar.css" 

const Sidebar = (props) => {
    return (
        
            <div className="sidebar">
                <ul>                 
                    <li>
                        <span>Temel İşlemleri</span>
                        <hr />
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faBusinessTime} />Bayi İşlemleri
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <span>Kullanıcı İşlemleri</span>
                        <hr />
                        <button className="sidebar-button">
                        <FontAwesomeIcon icon={faTruck} />Kullanıcı
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        
                        <button className="sidebar-button">
                        <FontAwesomeIcon icon={faBriefcase} />Kullanıcı
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <span>Kullanıcı İşlemleri</span>
                        <hr />
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faBriefcase} /> Kullanıcı
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> Lisanslar
                        </button>
                    </li>
                    <li>
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faKey} /> sdafdsafas
                        </button>
                    </li>
                </ul>
            </div>
        
    )
}

export default Sidebar;
