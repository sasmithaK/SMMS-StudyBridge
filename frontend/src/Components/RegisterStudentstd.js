import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const RegisterStudentstd = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        age: '',
        type: '',
        degree: '',
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate
    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Form validation
    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!formData.name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!formData.email) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            formErrors.email = 'Invalid email format';
            isValid = false;
        }

        const mobileRegex = /^[0-9]{10}$/;
        if (!formData.mobile) {
            formErrors.mobile = 'Mobile number is required';
            isValid = false;
        } else if (!mobileRegex.test(formData.mobile)) {
            formErrors.mobile = 'Mobile number must be 10 digits';
            isValid = false;
        }

        if (!formData.age) {
            formErrors.age = 'Age is required';
            isValid = false;
        } else if (isNaN(formData.age) || formData.age <= 0) {
            formErrors.age = 'Age must be a positive number';
            isValid = false;
        }

        if (!formData.type) {
            formErrors.type = 'Type is required';
            isValid = false;
        }

        if (!formData.degree) {
            formErrors.degree = 'Degree is required';
            isValid = false;
        }

        if (!formData.password) {
            formErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop submission if form is not valid
        }

        try {
            const response = await axios.post('http://localhost:5000/api/students', formData);
            setMessage('Student registered successfully!');

            // Navigate to login page after a short delay
            setTimeout(() => {
                navigate('/stdlogin', { state: { message: 'Registration successful! Please log in.' } });
            }, 2000); // 2 second delay to show the success message before navigating

            // Reset form after submission
            setFormData({ name: '', email: '', mobile: '', password: '', age: '', type: '', degree: '' });
        } catch (error) {
            setMessage('Error registering student');
        }
    };

    return (
        <div className="register-student">
            <style>
                {`
                .register-student {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    background-color: #f9f9f9;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }

                h2 {
                    text-align: center;
                    margin-bottom: 20px;
                    font-size: 24px;
                    color: #333;
                }

                form div {
                    margin-bottom: 15px;
                }

                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                    color: #555;
                }

                input[type="text"],
                input[type="email"],
                input[type="number"],
                input[type="password"],
                select {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 14px;
                }

                select {
                    background-color: #fff;
                }

                button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }

                button:hover {
                    background-color: #0056b3;
                }

                p {
                    text-align: center;
                    color: #333;
                }

                a {
                    color: #4CAF50;
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline;
                }

                .message {
                    text-align: center;
                    color: green;
                    font-weight: bold;
                    margin-top: 10px;
                }

                .error {
                    text-align: center;
                    color: red;
                    font-weight: bold;
                    margin-top: 10px;
                }

                .error-message {
                    color: red;
                    font-size: 12px;
                    margin-top: 5px;
                }
                `}
            </style>

            <h2>Register New Student</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div>
                    <label>Mobile:</label>
                    <input
                        type="number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                    {errors.mobile && <p className="error-message">{errors.mobile}</p>}
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                    {errors.age && <p className="error-message">{errors.age}</p>}
                </div>
                <div>
                    <label>Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    />
                    {errors.type && <p className="error-message">{errors.type}</p>}
                </div>
                <div>
                    <label>Degree:</label>
                    <select
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a degree</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Master">Master</option>
                        <option value="PhD">PhD</option>
                    </select>
                    {errors.degree && <p className="error-message">{errors.degree}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p className={message.includes('Error') ? 'error' : 'message'}>{message}</p>}

            {/* Link to login page */}
            <p>Already have an account? <a href="/stdlogin">Log in here</a></p>
        </div>
    );
};

export default RegisterStudentstd;
