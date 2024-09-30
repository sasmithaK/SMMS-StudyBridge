import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCourseForm() {
  const [courseData, setCourseData] = useState({
    coursetitle: '',
    coursetype: '',
    faculty: '',
    totalfee: '',
    semesterfee: '',
    universityName: '' // Add university name field
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/courses', courseData)
      .then(response => {
        alert('Course added successfully!');
        navigate(`/university-portfolio`); // Redirect to the portfolio
      })
      .catch(error => {
        console.error('Error adding course:', error);
        setError('Failed to add course. Please try again.');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Add New Course</h2>
      {error && <div className="text-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Course Title</label>
          <input
            type="text"
            className="form-control"
            name="coursetitle"
            value={courseData.coursetitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Course Type</label>
          <input
            type="text"
            className="form-control"
            name="coursetype"
            value={courseData.coursetype}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Faculty</label>
          <input
            type="text"
            className="form-control"
            name="faculty"
            value={courseData.faculty}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Total Fee</label>
          <input
            type="number"
            className="form-control"
            name="totalfee"
            value={courseData.totalfee}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Semester Fee</label>
          <input
            type="number"
            className="form-control"
            name="semesterfee"
            value={courseData.semesterfee}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">University Name</label>
          <input
            type="text"
            className="form-control"
            name="universityName"
            value={courseData.universityName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourseForm;
