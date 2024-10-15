import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentList({ universityName }) {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch courses based on the university name
    axios.get(`http://localhost:5000/appstudents?university=${universityName}`)
      .then(response => {
        setStudents(response.data.students); // Ensure this matches your backend response
      })
      .catch(err => {
        console.error("Error fetching students:", err);
        setError("Failed to load students. Please try again.");
      });
  }, [universityName]);

  return (
    <div>
      <center><h3>REGISTERD STUDENTS</h3></center>
      <hr /><hr />
      <br /> <br />
      {error && <div className="text-danger">{error}</div>}
      {students.length === 0 ? (
        <p>No students applied for this university.</p>
      ) : (
        <ul>
            
          {students.map(student => (
            <li key={student._id}>
              <strong>{student.name}</strong><br />
              Address: {student.address}<br />
              Email: {student.email}<br />
              Age: {student.age}<br />
              Contact: {student.contact}<br /><br />
             <hr />

            </li>
          ))}
        </ul>
        
      )}
    </div>
  );
}

export default StudentList;
