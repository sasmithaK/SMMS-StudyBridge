import React, { useEffect, useState } from "react";
import './Style/issues.css'; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminProfileHeader from "./AdminProfileHeader";

function AllUniversities(){
    const navigate = useNavigate();
    const [university, setUniversity] = useState([]);

    useEffect(() => {
        
        axios.get("http://localhost:5000/posts/posts")
            .then(response => {
                setUniversity(response.data.existingPosts);  
            })
            .catch(error => {
                console.error("There was an error fetching the universities!", error);
            });
    }, []);

    const handleEdit = (id) => {
        navigate(`/manage/${id}`);  
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this university?")) {
            
            axios.delete(`http://localhost:5000/posts/posts/delete/${id}`)
                .then(response => {
                    alert("University deleted successfully!");
                    
                    setUniversity(university.filter(issue => issue._id !== id));
                })
                .catch(error => {
                    alert("Error deleting University: " + error.message);
                });
        }
    };

    return(
        <div>
            <AdminProfileHeader></AdminProfileHeader>

            <h1 className="title" style={{marginLeft:0,marginTop:"3%"}}><u>Registerd Universities</u></h1>
            <br />
            <div className="container">
                {university.length === 0 ? (
                    <p>No universities registered yet.</p>
                ) : (
                    university.map((uni) => (
                        <div style={{marginTop:"3%"}} className="issue-card" key={uni._id}>
                            <h2>University Name : {uni.uniName}</h2>
                            <p><strong>Reg No:</strong> {uni.regNo}</p>
                            <p><strong>Rank:</strong> {uni.rank}</p>
                            <p><strong>Location:</strong> {uni.location}</p>
                            <p><strong>contact:</strong> {uni.contact}</p>
                            <p><strong>Description:</strong><br /> {uni.description}</p>

                            <button style={{backgroundColor:"red",marginLeft:"82%"}} className="btn-view-details" onClick={() => handleDelete(uni._id)} >
                                Delete Issue
                            </button>
                        </div>
                    ))
                )}
            </div>

        </div>
    )

}
export default AllUniversities;