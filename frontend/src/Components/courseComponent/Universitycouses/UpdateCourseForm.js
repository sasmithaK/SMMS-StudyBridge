import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateCourseForm() {
  const { id } = useParams(); // Get the course ID from the URL
  const navigate = useNavigate();
  
  const [courseData, setCourseData] = useState({
    coursetitle: '',
    coursetype: '',
    faculty: '',
    totalfee: '',
    semesterfee: ''
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}`)
      .then(response => {
        setCourseData(response.data.course);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching course for update:', error);
        setError('Failed to load course details for update.');
        setIsLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/courses/${id}`, courseData)
      .then(response => {
        alert('Course updated successfully!');
        navigate(`/course-view/${id}`); // Redirect back to course view
      })
      .catch(error => {
        console.error('Error updating course:', error);
        setError('Failed to update course. Please try again.');
      });
  };

  if (isLoading) return <div>Loading course details for update...</div>;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Course Title</label>
          <input
            type="text"
            className="form-control"
            name="coursetitle"
            value={courseData.coursetitle}
            onChange={handleChange}
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
          />
        </div>

        <button type="submit" className="btn btn-primary">Update Course</button>
      </form>
    </div>
  );
}

export default UpdateCourseForm;
