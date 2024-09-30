import React, { useEffect, useState } from "react";
import './Style/add.css';  
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUniversity() {
    const { id } = useParams(); 
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

    
    useEffect(() => {
        axios.get(`http://localhost:5000/posts/posts/${id}`)
            .then(response => {
                const university = response.data; 
                setUniName(university.uniName);
                setRegNo(university.regNo);
                setLocation(university.location);
                setContact(university.contact);
                setRank(university.rank);
                setWebUrl(university.webUrl);
                setDescription(university.description);
                setImage(university.image);
                setUserName(university.userName);
                setPassword(university.password);
            })
            .catch(err => {
                console.error("Error fetching university data:", err);
            });
    }, [id]);

    const sendData = (e) => {
        e.preventDefault();
        
        const updatedUniversity = { uniName, regNo, location, contact, rank, webUrl, description, image, userName, password };

        
        axios.put(`http://localhost:5000/posts/posts/update/${id}`, updatedUniversity)
            .then(() => {
                alert("University details updated successfully!");
                clearForm();
                navigate("/uniProfile"); 
            })
            .catch((err) => {
                alert("Error: " + err.message);
            });
    };

    return (
        <div>
            <div className="header-row">
                <h1 className="title" style={{marginTop:"2%",marginBottom:"2%"}}><u>Update Your University Details</u></h1>
            </div>
            <br /><br />
            <div className="container">
                <form onSubmit={sendData} className="form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="uniName">University Name :</label>
                            <input id="uniName" placeholder="Enter uni name" className="form-control" value={uniName} onChange={(e) => { setUniName(e.target.value);}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="regNo">University Reg No :</label>
                            <input id="regNo" placeholder="Enter uni reg" className="form-control" value={regNo} onChange={(e) => { setRegNo(e.target.value);}} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="location">University Location :</label>
                            <input id="location" placeholder="Enter location" className="form-control" value={location} onChange={(e) => { setLocation(e.target.value);}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Contact Information :</label>
                            <input id="description" placeholder="Enter contact info" className="form-control" value={contact} onChange={(e) => { setContact(e.target.value);}} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="rank">World Ranking :</label>
                            <input id="rank" placeholder="Enter world rank" className="form-control" value={rank} onChange={(e) => { setRank(e.target.value);}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="webUrl">Web URL :</label>
                            <input id="webUrl" placeholder="Enter web" className="form-control" value={webUrl} onChange={(e) => { setWebUrl(e.target.value);}} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="description">Description :</label>
                            <textarea id="description" placeholder="Enter additional" className="form-control" value={description} onChange={(e) => { setDescription(e.target.value);}} cols={200}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Add Image :</label>
                            <input id="image" placeholder="Upload image" className="form-control" value={image} onChange={(e) => { setImage(e.target.value);}} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="userName">User Name :</label>
                            <input id="userName" placeholder="Enter user name" className="form-control" value={userName} onChange={(e) => { setUserName(e.target.value);}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password :</label>
                            <input id="password" placeholder="Enter password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value);}} />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <button style={{backgroundColor:"#113fd5",color:"white",width:"205%",marginTop:"4%"}} type="submit" className="btn btn-submit">Update</button>
                    </div>
                    <p style={{ textAlign: "center" }}>No need to changes : <a href="#" onClick={() => navigate("/uniProfile")} style={{ color:"#113fd5",textDecoration:"underline"}}>Back</a></p>
                </form>
            </div>
            <br /> <br /> <br />
        </div>
    );
}

export default UpdateUniversity;
