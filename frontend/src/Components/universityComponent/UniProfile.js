import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function UniProfile() {
    const [universities, setUniversities] = useState([]);
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the universities data from the server
        axios.get("http://localhost:5000/posts/posts")
            .then(response => {
                setUniversities(response.data.existingPosts);

                // Get the username from local storage
                const userName = localStorage.getItem('userName');

                // Filter universities based on the username
                const matchedUniversities = response.data.existingPosts.filter(uni => {
                    return uni.userName === userName; // Ensure 'userName' field matches
                });
                setFilteredUniversities(matchedUniversities);
            })
            .catch(error => {
                console.error("There was an error fetching the universities!", error);
            });
    }, []);

      // Delete function
      const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/posts/posts/delete/${id}`)
            .then(() => {
                // Filter out the deleted university from the state
                setFilteredUniversities(prev => prev.filter(uni => uni._id !== id));
                alert("University deleted successfully!");
                navigate("/"); // Redirect to the home page
            })
            .catch(error => {
                console.error("There was an error deleting the university!", error);
            });
    };

     // Logout function
     const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem('userName');
        localStorage.removeItem('otherUserData'); // Clear any other relevant user data if needed
        // Redirect to the home page
        navigate("/");
    };

    return (
        <div>
            <div style={{justifyContent:"center",alignItems:"center",backgroundColor:"#000000e2",color:"white"}}>
            <center><h1 >Welcome {filteredUniversities.length > 0 ? filteredUniversities[0].uniName : "Name"} University Dashboard !</h1></center>
            <br />
            </div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"36%"}} onClick={() => navigate("/profile")}>Profile</li>
                    &ensp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"10%"}} >Course</li>
                    &ensp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"10%"}}>Report</li>
                    &ensp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"10%"}} onClick={() => navigate("/")}>Home</li>

                    &emsp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"15%"}} onClick={handleLogout}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</li>
                    
                </ul>
            </nav>

            <div className="gallery">
                {filteredUniversities.map(uni => (
                     <div style={{marginTop:"3%",width:"34%"}} className="content" key={uni._id}>
                       <h2 style={{fontWeight:"bold",marginTop:"5%"}}>{uni.uniName}</h2>
                       <img style={{width:"80%",height:"110%"}} className="card-img" src={uni.image} alt="University Image" />
                       <br />
                       <p><strong>Uni Rank:</strong> {uni.rank}</p>
                       <p><strong>Location:</strong> {uni.location}</p> {/* Fixed to show location */}
                       <p><strong>Contact:</strong> {uni.contact}</p>
                       <p><strong>About</strong><br /> {uni.description}</p>
                       <p><strong>UserName</strong> {uni.userName}</p>
                       <p><strong>Password</strong> {uni.password}</p>
       
                       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <button type="button" onClick={() => navigate(`/updateUni/${uni._id}`)}  className="btn1" style={{ flex: 1, marginRight: '5px' ,borderBottomRightRadius:0}}>Update</button>
                            <button type="button" onClick={() => handleDelete(uni._id)}  className="btn1" style={{ flex: 1 , backgroundColor:"red",borderBottomLeftRadius:0,fontWeight:"500"}}>Delete</button>
                        </div>
                       
                   </div>
               ))}
           </div>
        </div>
    );
}

export default UniProfile;
