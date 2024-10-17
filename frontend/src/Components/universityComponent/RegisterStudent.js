import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function RegisterStudent() {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to retrieve the passed state
  const universityName = location.state?.universityName || "";

  const [studentData, setStudentData] = useState({
    name: '',
    address: '',
    email: '',
    age: '',
    contact: '',
    university: universityName
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Custom validation
    if (!studentData.name || !studentData.address || !studentData.email || !studentData.age || !studentData.contact) {
      setError('All fields must be filled.');
      return;
    }
    
    if (studentData.age <= 0) {
      setError('Age must be a positive number.');
      return;
    }

    const age = parseInt(studentData.age, 10);
    if (age <= 12 || age >= 50) {
      setError('Age must be above 12 and below 50.');
      return;
    }
    
    if (!/^\d{10}$/.test(studentData.contact)) {
      setError('Contact number must be exactly 10 digits.');
      return;
    }

    // Reset the error if validation passes
    setError(null);

    axios.post('http://localhost:5000/appstudents', studentData)
      .then(response => {
        alert('Student added successfully!');
        navigate(`/`); // Redirect to the home or success page
      })
      .catch(error => {
        console.error('Error adding student:', error);
        setError('Failed to add student. Please try again.');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Apply University</h2>
      {error && <div className="text-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={studentData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"  // Use "email" input type for built-in email validation
            className="form-control"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={studentData.age}
            onChange={handleChange}
            min="1" // Set minimum value for age
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input
            type="tel"  // Use "tel" input type for phone numbers
            className="form-control"
            name="contact"
            value={studentData.contact}
            onChange={handleChange}
            pattern="\d{10}" // Ensure exactly 10 digits
            required
          />
          <small className="form-text text-muted">Contact number must be exactly 10 digits.</small>
        </div>

        <div className="mb-3">
          <input
            type="hidden"
            className="form-control"
            name="university"
            value={studentData.university}
            readOnly 
          />
        </div>

        <button type="submit" className="btn btn-primary">Apply University</button>
      </form>
    </div>
  );
}

export default RegisterStudent;
