import React from "react";
import './Style/add.css'; 
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div>
            {/* Top Navigation Bar */}
            <nav className="navbar">
                <ul className="nav-list">
                    <img style={{width: "6%"}} src="../Images/syslogo.png" alt="" className="header-image" />
                    &emsp;&ensp;
                    <li style={{backgroundColor: "#113fd5"}} onClick={() => navigate("/")}>Home</li>
                    &ensp;
                    <li style={{backgroundColor: "#113fd5"}} onClick={() => navigate("/universities")}>Universities</li>
                    &ensp;
                    <li style={{backgroundColor: "#113fd5"}} onClick={() => navigate("/Cportfolio")}>Course</li>
                    &ensp;
                    <li style={{backgroundColor: "#113fd5"}} onClick={() => navigate("/workregister")}>Application</li>
                    &ensp;
                    <li style={{backgroundColor: "#113fd5"}} onClick={() => navigate("/questionlist")}>Exams</li>
                    &ensp;
                    <img onClick={() => navigate("/login")} src="../Images/proPic.png" alt="" className="header-image" />
                </ul>
            </nav>
        </div>
    );
}

export default Header;
