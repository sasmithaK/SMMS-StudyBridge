import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const StdLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Initialize useNavigate

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    // Form validation
    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!email) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            formErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!password) {
            formErrors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
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
            const response = await axios.post('http://localhost:5000/api/login', { email, password });

            if (response.data.success) {
                // On successful login, store email in a cookie
                Cookies.set('email', email, { expires: 1 }); // Cookie expires in 1 day
                setMessage('Login successful!');

                // Navigate to StdProfile after successful login
                navigate('/myProfile');
            } else {
                setMessage('Invalid email or password.');
            }
        } catch (error) {
            setMessage('Error logging in.');
        }
    };

    return (
        <div className="login-page">
            <style>
                {`
                .login-page {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    background-color: #f4f4f4;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }

                h2 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 20px;
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

                input[type="email"],
                input[type="password"] {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 14px;
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
                    background-color: #007BFF;
                }

                p {
                    text-align: center;
                    color: #333;
                    margin-top: 15px;
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

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>

                <button type="submit">Login</button>
            </form>
            {message && <p className={message.includes('Error') || message.includes('Invalid') ? 'error' : 'message'}>{message}</p>}

            {/* Link to register page */}
            <p>Don’t have an account? <a href="/registerStudentstd">Sign up here</a></p>
        </div>
    );
};

export default StdLogin;
