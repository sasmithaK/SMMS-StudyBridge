import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCourseForm() {
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    coursetitle: '',
    coursetype: '',
    faculty: '',
    totalfee: '',
    semesterfee: ''
  });

  const [error, setError] = useState(null);

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
        navigate(`/course-view/${response.data.course._id}`); // Redirect to the newly added course view
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

        <button type="submit" className="btn btn-primary">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourseForm;
