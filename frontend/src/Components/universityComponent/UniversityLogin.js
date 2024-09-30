import React, { useState } from "react";
import './Style/login.css'; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UniversityLogin() {
    const [error, setError] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/posts/login", {
                userName,
                password,
            });

            if (response.data.success) {
                // Store the userName in local storage
                localStorage.setItem('userName', userName);
                // Redirect to the profile page or another page
                navigate("/uniProfile");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
            alert("Login failed. Please try again.");
        }
    };

    return (

        <div> 
        <div className="header-row">
                <img style={{width:"6%"}} src="../Images/syslogo.png" alt="Logo" className="header-image" />
                <h1 className="title"><u>Login To Your University Account</u></h1>
        </div>

        <div className="login-container">
            
            <form onSubmit={handleLogin} className="login-form">
                <h1>Login To University</h1>
                <br />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div><br />
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div><br />
                <div className="input-group">
                    <button type="submit" className="login-button">Login</button>
                </div>
                {error && <p className="error-message">{error}</p>}
                <p>
                    Don't have an account? <a href="#" onClick={() => navigate("/add")}>Register Now</a><br />
                    <a href="#" onClick={() => navigate("/")} style={{color:"black",textDecoration:"underline"}}>Back to home</a>
                </p>
            </form>
        </div>
        </div>
    );
}

export default UniversityLogin;
