import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const StdProfile = () => {
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false); // For toggling edit mode
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        age: '',
        type: '',
        degree: ''
    });

    useEffect(() => {
        const email = Cookies.get('email')?.trim(); // Trim whitespace
        if (email) {
            axios.get(`http://localhost:5000/api/students/id/${email}`)
                .then((response) => {
                    const studentId = response.data.id;
                    // Fetch student details using the ID
                    return axios.get(`http://localhost:5000/api/students/${studentId}`);
                })
                .then((response) => {
                    setUserData(response.data);
                    setFormData({
                        name: response.data.name,
                        email: response.data.email,
                        mobile: response.data.mobile,
                        password: '', // Leave password empty unless updated
                        age: response.data.age,
                        type: response.data.type,
                        degree: response.data.degree
                    });
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                    setMessage('Error fetching user data.');
                });
        } else {
            setMessage('No user is logged in.');
        }
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle profile update
    const handleUpdate = async () => {
        if (userData) {
            try {
                const response = await axios.put(`http://localhost:5000/api/students/${userData._id}`, formData);
                setUserData(response.data);
                setMessage('Profile updated successfully.');
                setIsEditing(false);
            } catch (error) {
                console.error('Error updating profile:', error);
                setMessage('Error updating profile.');
            }
        }
    };

    // Handle profile deletion
    const handleDelete = async () => {
        if (userData && window.confirm('Are you sure you want to delete your profile?')) {
            try {
                await axios.delete(`http://localhost:5000/api/students/${userData._id}`);
                setMessage('Profile deleted successfully.');
                Cookies.remove('email'); // Clear email cookie after deletion
                setUserData(null); // Clear user data after deletion
            } catch (error) {
                console.error('Error deleting profile:', error);
                setMessage('Error deleting profile.');
            }
        }
    };

    return (
        <div className="profile">
            <style>{`
                .profile {
                    margin: 20px;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    background-color: #f9f9f9;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                h2 {
                    text-align: center;
                    color: #333;
                }

                input, select {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    margin: 10px 0;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                }

                label {
                    font-weight: bold;
                    margin-top: 10px;
                }

                button {
                    margin: 10px 5px;
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #0056b3;
                }

                button:disabled {
                    background-color: #ccc;
                }

                .delete-btn {
                    background-color: #007BFF;
                }

                .delete-btn:hover {
                    background-color: #007BFF;
                }
            `}</style>

            <h2>Profile</h2>
            {message && <p>{message}</p>}
            {userData ? (
                <div>
                    {isEditing ? (
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled
                            />
                            <label>Mobile:</label>
                            <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                            />
                            <label>Age:</label>
                            <input
                                type="text"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                            />
                            <label>Type:</label>
                            <input
                                type="text"
                                name="type"
                                value={formData.type}
                                onChange={handleInputChange}
                            />
                            <label>Degree:</label>
                            <select
                                name="degree"
                                value={formData.degree}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select a degree</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Master">Master</option>
                                <option value="PhD">PhD</option>
                            </select>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Leave blank if not changing"
                            />
                            <button onClick={handleUpdate}>Update Profile</button>
                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <p><strong>Name:</strong> {userData.name}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>Mobile:</strong> {userData.mobile}</p>
                            <p><strong>Age:</strong> {userData.age}</p>
                            <p><strong>Type:</strong> {userData.type}</p>
                            <p><strong>Degree:</strong> {userData.degree}</p>
                            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                            <button className="delete-btn" onClick={handleDelete}>Delete Profile</button>
                        </div>
                    )}
                </div>
            ) : (
                !message && <p>Loading...</p>
            )}
        </div>
    );
};

export default StdProfile;
