import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from './back.jpg';

function UniProfile() {
    const [universities, setUniversities] = useState([]);
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the universities data from the server
        axios.get("http://localhost:8000/posts/posts")
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
        axios.delete(`http://localhost:8000/posts/posts/delete/${id}`)
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
        <div style={styles.backgroundWrapper}>
        <div style={styles.container}>
            <div style={styles.header}>
                <h1>Welcome {filteredUniversities.length > 0 ? filteredUniversities[0].uniName : "Name"} University Dashboard!</h1>
                <button onClick={handleLogout} style={styles.logoutButton}>Logout</button> {/* Logout button added to header */}
            </div>

            <nav className="navbar">
                <ul className="nav-list" style={styles.navList}>
                    <li onClick={() => navigate("/uniProfile")}>Profile</li>
                    <li onClick={() => navigate("/applyStudents")}>Students</li>
                    <li onClick={() => navigate("/add-course")}>+Courses</li>
                    <li>Report</li>
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("//university-portfolio/:universityId")}>Course</li>
                </ul>
            </nav>

            <div className="gallery" style={styles.gallery}>
                {filteredUniversities.map(uni => (
                    <div style={styles.card} key={uni._id}>
                        <h2 style={styles.uniName}>{uni.uniName}</h2>
                        <img style={styles.cardImg} src={uni.image} alt="University" />
                        <p><strong>Uni Rank:</strong> {uni.rank}</p>
                        <p><strong>Location:</strong> {uni.location}</p>
                        <p><strong>Contact:</strong> {uni.contact}</p>
                        <p><strong>About:</strong><br /> {uni.description}</p>
                        <p><strong>UserName:</strong> {uni.userName}</p>
                        <p><strong>Password:</strong> {uni.password}</p>

                        <div style={styles.buttonContainer}>
                            <button onClick={() => navigate(`/updateUni/${uni._id}`)} style={styles.updateButton}>Update</button>
                            <button onClick={() => handleDelete(uni._id)} style={styles.deleteButton}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%', // Full width
        padding: 0,
        margin: 0,
        backgroundColor: '#f0f0f0', // Optional background
    },
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
    header: {
        justifyContent: "space-between", // Align items with space between
        alignItems: "center",
        backgroundColor: "#000000e2",
        color: "white",
        width: '100%',
        textAlign: 'center',
        padding: '1rem 0',
        position: 'relative', // Make header position relative for absolute positioning of logout
    },
    logoutButton: {
        position: 'absolute', // Position logout button at the top right
        right: '20px',
        top: '20px',
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer',
    },
    navList: {
        display: 'flex',
        justifyContent: 'center',
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        fontSize: '14px', // Adjusted font size for navigation items
    },
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        padding: '20px',
    },
    card: {
        margin: "10px",
        width: "30%", // Adjust width for responsiveness
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        padding: '10px',
    },
    uniName: {
        fontWeight: "bold",
        marginTop: "5%",
        textAlign: 'center',
    },
    cardImg: {
        width: "100%", // Full width of the card
        height: 'auto', // Maintain aspect ratio
        borderRadius: '8px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    updateButton: {
        flex: 1,
        marginRight: '5px',
        backgroundColor: '#113fd5',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
    },
    deleteButton: {
        flex: 1,
        backgroundColor: "red",
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        fontWeight: "500",
    },
};

export default UniProfile;
