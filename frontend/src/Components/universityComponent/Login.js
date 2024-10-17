import React from "react";
import './Style/login.css'; 
import { useNavigate } from "react-router-dom";
import backgroundImage from './back.jpg';

function Login(){

    const navigate = useNavigate();

    const styles = {
        backgroundWrapper: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          },
          pWrapper: {
            textAlign: "center",  // Centers the p element within its container
          },
          p: {
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "10px 20px",
            display: "inline-block", // Ensures the size adjusts to content
          }
    }

    return(
        <div>
            <div style={styles.backgroundWrapper}>
            <div className="loginText">
            <h1 style={{fontWeight:"600"}}><center>Login</center></h1>
            </div>
            <center>
            <button className="loginBtn" onClick={() => navigate('/StdLogin')}>As a Student</button><br /><br />
            <button className="loginBtn"  onClick={() => navigate('/uniLog')}>As an University</button><br /><br />
            <button className="loginBtn" onClick={() => navigate('/adminProfile')}>As a Admin</button><br /><br />
            </center>
            <b>
                <div style={styles.pWrapper}>
                    <p style={styles.p}>
                        Create a university profile:  
                        <a href="#" onClick={() => navigate('/add')} style={{ color:"#113fd5", textDecoration:"none" }}> Register Here</a>
                    </p>
                </div>
            </b>
        </div>
        </div>
    )

}

export default Login;
