import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UcourseView() {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id, universityId } = useParams(); // Get both course ID and university ID
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    // Fetch the course data using the course ID
    axios
      .get(`http://localhost:5000/courses/${id}?universityId=${universityId}`)
      .then((response) => {
        setCourse(response.data.course);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching course:', error);
        setError('Failed to load course details. Please try again.');
        setIsLoading(false);
      });
  }, [id, universityId]); // Add universityId as a dependency

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      axios
        .delete(`http://localhost:5000/courses/${id}?universityId=${universityId}`)
        .then((response) => {
          alert('Course deleted successfully!');
          navigate(`/university-portfolio/${universityId}`); // Redirect to the university portfolio after deletion
        })
        .catch((error) => {
          console.error('Error deleting course:', error);
          alert('Failed to delete course. Please try again.');
        });
    }
  };

  if (isLoading) return <div className="container mt-5">Loading course details...</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;
  if (!course) return <div className="container mt-5">No course found.</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h1 className="card-title">{course.coursetitle || 'Untitled Course'}</h1>
        </div>
        <div className="card-body">
          <p><strong>Duration:</strong> {course.courseduration ? `${course.courseduration} years` : 'N/A'}</p>
          <p><strong>Course Type:</strong> {course.coursetype || 'N/A'}</p>
          <p><strong>Faculty:</strong> {course.faculty || 'N/A'}</p>
          <p><strong>Total Fee:</strong> {course.totalfee ? `$${parseInt(course.totalfee).toLocaleString()}` : 'N/A'}</p>
          <p><strong>Semester Fee:</strong> {course.semesterfee ? `$${parseInt(course.semesterfee).toLocaleString()}` : 'N/A'}</p>
        </div>

        <div className="card-footer">
          <button onClick={() => navigate(`/course-update/${course._id}/${universityId}`)} className="sch">Update</button>
          <button onClick={() => handleDelete(course._id)} className="btn-apply">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default UcourseView;
