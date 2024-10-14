import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateCourseForm() {
  const { id, universityId } = useParams(); // Get course ID and university ID from the URL
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    coursetitle: '',
    coursetype: '',
    faculty: '',
    totalfee: '',
    semesterfee: '',
    courseduration: '',
    universityId: universityId // Set universityId from URL params
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
    const { name, value } = e.target;

    if (name === "courseduration" && value > 4) {
      setCourseData({
        ...courseData,
        [name]: 4, // Limit course duration to 4 years
      });
    } else {
      setCourseData((prevData) => {
        const newCourseData = {
          ...prevData,
          [name]: value,
        };

        const calculateSemesterFee = (totalFee, courseType) => {
          if (courseType === "Undergraduate") {
            return totalFee / 8;
          } else if (courseType === "Postgraduate") {
            return totalFee / 4;
          }
          return ''; // In case courseType is empty
        };

        // Automatically calculate the semester fee when totalfee or coursetype changes
        if (name === "totalfee" || name === "coursetype") {
          const totalFee = name === "totalfee" ? value : newCourseData.totalfee;
          const courseType = name === "coursetype" ? value : newCourseData.coursetype;
          const calculatedSemesterFee = calculateSemesterFee(totalFee, courseType);
          newCourseData.semesterfee = calculatedSemesterFee;
        }

        return newCourseData;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/courses/${id}`, courseData)
      .then(response => {
        alert('Course updated successfully!');
        navigate(`/university-portfolio/${universityId}`); // Redirect to the correct university portfolio
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
          <select
            className="form-control"
            name="coursetype"
            value={courseData.coursetype}
            onChange={handleChange}
            required
          >
            <option value="">Select Course Type</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Faculty</label>
          <select
            className="form-control"
            name="faculty"
            value={courseData.faculty}
            onChange={handleChange}
            required
          >
            <option value="">Select Faculty</option>
            <option value="Faculty of Computing">Faculty of Computing</option>
            <option value="Faculty of Engineering">Faculty of Engineering</option>
            <option value="Faculty of Business">Faculty of Business</option>
            <option value="Faculty of Arts">Faculty of Arts</option>
            <option value="Faculty of Science">Faculty of Science</option>
            <option value="Faculty of Law">Faculty of Law</option>
          </select>
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
            readOnly // Semester fee is read-only since it's auto-calculated
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Course Duration (Years)</label>
          <input
            type="number"
            className="form-control"
            name="courseduration"
            value={courseData.courseduration}
            onChange={handleChange}
            min="1" // Set minimum duration to 1 year
            max="4" // Set maximum duration to 4 years
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Update Course</button>
      </form>
    </div>
  );
}

export default UpdateCourseForm;
