import React from "react";
import './Style/login.css'; 
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();

    return(
        <div>
            <div className="loginText">
            <h1 style={{fontWeight:"600"}}><center>LogIn</center></h1>
            </div>
            <center>
            <button className="loginBtn">As a Student</button><br /><br />
            <button className="loginBtn"  onClick={() => navigate('/uniLog')}>As an University</button><br /><br />
            <button className="loginBtn" onClick={() => navigate('/adminProfile')}>As a Admin</button><br /><br />
            </center>
            <b><p style={{ textAlign: "center" }}>Create a university profile <a href="#" onClick={() => navigate('/add')} style={{ color:"#113fd5",textDecoration:"underline"}}>Register Here</a></p></b>
        </div>
    )

}
export default Login;