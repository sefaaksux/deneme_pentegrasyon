import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faKey } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props) => {
    return (
        <div>  
            <div className="sidebar">
                <ul>                 
                    <li>
                        <span>Temel İşlemleri</span>
                        <hr />
                        <button className="sidebar-button">
                            <FontAwesomeIcon icon={faBusinessTime} /> Şirketler
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
                            <FontAwesomeIcon icon={faKey} /> Kullanıcı
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
                            <FontAwesomeIcon icon={faKey} /> Kullanıcı
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
                            <FontAwesomeIcon icon={faKey} /> Kullanıcı
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
                </ul>
            </div>
        </div>     
    )
}

export default Sidebar;
