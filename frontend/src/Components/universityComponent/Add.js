import React, { useState } from "react";
import './Style/add.css';  
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
    const navigate = useNavigate();

    const [uniName, setUniName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [location, setLocation] = useState("");
    const [contact, setContact] = useState("");
    const [rank, setRank] = useState("");
    const [webUrl, setWebUrl] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});

    const clearForm = () => {
        setUniName("");
        setRegNo("");
        setLocation("");
        setContact("");
        setRank("");
        setWebUrl("");
        setDescription("");
        setImage("");
        setUserName("");
        setPassword("");
    };

    const validateForm = () => {
        const newErrors = {};
        const contactRegex = /^[0-9]{10}$/;
        const rankRegex = /^[0-9]+$/; 
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

        // Check required fields
        if (!uniName) newErrors.uniName = "University Name is required.";
        if (!regNo) newErrors.regNo = "University Reg No is required.";
        if (!location) newErrors.location = "University Location is required.";
        if (!contact) newErrors.contact = "Contact Information is required.";
        if (!rank) newErrors.rank = "World Ranking is required.";
        if (!webUrl) newErrors.webUrl = "Web URL is required.";
        if (!description) newErrors.description = "Description is required.";
        if (!image) newErrors.image = "Image is required.";
        if (!userName) newErrors.userName = "User Name is required.";
        if (!password) newErrors.password = "Password is required.";

        // Validate contact
        if (contact && !contactRegex.test(contact)) {
            newErrors.contact = "Contact must be a 10-digit number.";
        }

        // Validate rank
        if (rank && !rankRegex.test(rank)) {
            newErrors.rank = "Rank must be a number.";
        }

        // Validate password
        if (password && !passwordRegex.test(password)) {
            newErrors.password = "Password must be at least 8 characters long and contain both letters and numbers.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const sendData = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return; 
        }

        const newUniversity = { uniName, regNo, location, contact, rank, webUrl, description, image, userName, password };

        axios.post("http://localhost:5000/posts/post/save", newUniversity)
            .then(() => {
                alert("University registered successfully!");
                clearForm();
            })
            .catch((err) => {
                alert("Error: " + err.message);
            });
    };

    return (
        <div>
            <div className="header-row">
                <img style={{width:"6%"}} src="../Images/syslogo.png" alt="Logo" className="header-image" />
                <h1 className="title"><u>Register Your University</u></h1>
            </div>
            <br />
            <div className="container">
                <form onSubmit={sendData} className="form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="uniName">University Name :</label>
                            <input id="uniName" placeholder="Enter uni name" className="form-control" value={uniName} onChange={(e) => { setUniName(e.target.value);}} />
                            {errors.uniName && <span style={{color: "red",fontSize:"14px"}}>{errors.uniName}</span>} 
                        </div>

                        <div className="form-group">
                            <label htmlFor="regNo">University Reg No :</label>
                            <input id="regNo" placeholder="Enter uni reg" className="form-control" value={regNo} onChange={(e) => { setRegNo(e.target.value);}} />
                            {errors.regNo && <span style={{color: "red",fontSize:"14px"}}>{errors.regNo}</span>} 
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="location">University Location :</label>
                            <input id="location" placeholder="Enter location" className="form-control" value={location} onChange={(e) => { setLocation(e.target.value);}} />
                            {errors.location && <span style={{color: "red",fontSize:"14px"}}>{errors.location}</span>} 
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact Information :</label>
                            <input id="contact" placeholder="Enter contact info" className="form-control" value={contact} onChange={(e) => { setContact(e.target.value);}} />
                            {errors.contact && <span style={{color: "red",fontSize:"14px"}}>{errors.contact}</span>} 
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="rank">World Ranking :</label>
                            <input id="rank" placeholder="Enter world rank" className="form-control" value={rank} onChange={(e) => { setRank(e.target.value);}} />
                            {errors.rank && <span style={{color: "red",fontSize:"14px"}}>{errors.rank}</span>} 
                        </div>
                        <div className="form-group">
                            <label htmlFor="webUrl">Web URL :</label>
                            <input id="webUrl" placeholder="Enter web" className="form-control" value={webUrl} onChange={(e) => { setWebUrl(e.target.value);}} />
                            {errors.webUrl && <span style={{color: "red",fontSize:"14px"}}>{errors.webUrl}</span>} 
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="description">Description :</label>
                            <textarea id="description" placeholder="Enter additional" className="form-control" value={description} onChange={(e) => { setDescription(e.target.value);}} cols={200}></textarea>
                            {errors.description && <span style={{color: "red",fontSize:"14px"}}>{errors.description}</span>} 
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Add Image :</label>
                            <input id="image" placeholder="Upload image" className="form-control" value={image} onChange={(e) => { setImage(e.target.value);}} />
                            {errors.image && <span style={{color: "red",fontSize:"14px"}}>{errors.image}</span>} 
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="userName">User Name :</label>
                            <input id="userName" placeholder="Enter user name" className="form-control" value={userName} onChange={(e) => { setUserName(e.target.value);}} />
                            {errors.userName && <span style={{color: "red",fontSize:"14px"}}>{errors.userName}</span>} 
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password :</label>
                            <input id="password" placeholder="Enter password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value);}} />
                            {errors.password && <span style={{color: "red",fontSize:"14px"}}>{errors.password}</span>} 
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <button style={{backgroundColor:"#113fd5",color:"white",width:"205%",marginTop:"4%"}} type="submit" className="btn btn-submit">Submit</button>
                    </div>
                    <p style={{ textAlign: "center" }}>Have an account? <a href="#" onClick={() => navigate("/login")}>Login Here</a><br />
                    <a href="#" onClick={() => navigate("/")} style={{color:"black",textDecoration:"underline"}}>Back to home</a>
                    </p>
                </form>
            </div>
            <br /> <br /> <br />
        </div>
    );
}

export default Add;
