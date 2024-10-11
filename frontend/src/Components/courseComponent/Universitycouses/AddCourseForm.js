import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function AddCourseForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract universityId from query params
  const searchParams = new URLSearchParams(location.search);
  const universityId = searchParams.get('universityId');

  const [courseData, setCourseData] = useState({
    coursetitle: '',
    coursetype: '', // Set to empty string for default placeholder
    faculty: '',
    totalfee: '',
    semesterfee: '',
    courseduration: '',
    universityId: universityId // Include universityId in the course data
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newCourseData = { ...courseData, [name]: value };

    // Ensure the course duration does not exceed 4 years
    if (name === "courseduration" && value > 4) {
      newCourseData[name] = 4; // Automatically limit the value to 4
    }

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
      const totalFee = name === "totalfee" ? value : courseData.totalfee;
      const courseType = name === "coursetype" ? value : courseData.coursetype;
      const calculatedSemesterFee = calculateSemesterFee(totalFee, courseType);

      newCourseData.semesterfee = calculatedSemesterFee;
    }

    setCourseData(newCourseData);
  };

  const preventNumbers = (e) => {
    const charCode = e.which || e.keyCode;
    if (charCode >= 48 && charCode <= 57) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/courses', courseData)
      .then(response => {
        alert('Course added successfully!');
        navigate(`/university-portfolio/${universityId}`);

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
            onKeyDown={preventNumbers}
            required
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
            <option value="">Select Course Type</option> {/* Placeholder */}
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
            <option value="">Select Faculty</option> {/* Placeholder */}
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
            readOnly // Semester fee should be read-only since it's auto-calculated
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
            min="1"
            max="4"
            required
          />
        </div>

        {/* Hidden field for universityId */}
        <input type="hidden" name="universityId" value={courseData.universityId} />

        <button type="submit" className="btn btn-primary">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourseForm;
