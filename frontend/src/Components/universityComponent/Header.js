import React from "react";
import './Style/add.css'; 
import { useNavigate } from "react-router-dom";
import proPic from './proPic.png';
import syslogo from './syslogo.png';

function Header() {
    const navigate = useNavigate();

    return (
        <div>
            {/* Top Navigation Bar */}
            <nav className="navbar">
                <ul className="nav-list">
                    <img style={{width: "3%"}} src={syslogo} alt="sign" className="header-image" />
                    &emsp;&ensp;
                    <li style={{backgroundColor: "#113fd5"}} onClick={() => navigate("/")}>Home</li>
                    &ensp;
                    <li style={{backgroundColor: "#113fd5"}} onClick={() => navigate("/unihome")}>Universities</li>
                    &ensp;
                    <li style={{backgroundColor: "#113fd5"}} onClick={() => navigate("/course-page")}>Course</li>
                    &ensp;
                    <li style={{backgroundColor: "#113fd5"}} onClick={() => navigate("/workregister")}>Application</li>
                    &ensp;
                    <img onClick={() => navigate("/login")} src={proPic} alt="Profile" className="header-image" />
                </ul>
            </nav>
        </div>
    );
}

export default Header;
