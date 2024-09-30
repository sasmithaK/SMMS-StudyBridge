import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function CourseView() {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:5000/courses/${id}`)
      .then(response => {
        setCourse(response.data.course);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching course:', error);
        setError('Failed to load course details. Please try again.');
        setIsLoading(false);
      });
  }, [id]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Adding title
    doc.setFontSize(18);
    doc.text('Course Details', 14, 22);
    
    // Creating the table with course details
    doc.autoTable({
      startY: 30,
      head: [['Field', 'Details']],
      body: [
        ['Course Title', course.coursetitle || 'Untitled Course'],
        ['University', 'N/A'],
        ['Course Type', course.coursetype || 'N/A'],
        ['Faculty', course.faculty || 'N/A'],
        ['Total Fee', course.totalfee ? `$${parseInt(course.totalfee).toLocaleString()}` : 'N/A'],
        ['Semester Fee', course.semesterfee ? `$${parseInt(course.semesterfee).toLocaleString()}` : 'N/A']
      ],
      styles: { 
        halign: 'center', 
        fontSize: 11,
        fillColor: [23, 162, 184]  // Adding a background color to the table headers
      },
      headStyles: {
        fillColor: [40, 116, 166], // Styling the header
        textColor: [255, 255, 255],
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [230, 240, 255]
      }
    });

    // Saving the PDF
    doc.save(`${course.coursetitle || 'course-details'}.pdf`);
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
          <p><strong>University:</strong> {'N/A'}</p>
          <p><strong>Course Type:</strong> {course.coursetype || 'N/A'}</p>
          <p><strong>Faculty:</strong> {course.faculty || 'N/A'}</p>
          <p><strong>Total Fee:</strong> {course.totalfee ? `$${parseInt(course.totalfee).toLocaleString()}` : 'N/A'}</p>
          <p><strong>Semester Fee:</strong> {course.semesterfee ? `$${parseInt(course.semesterfee).toLocaleString()}` : 'N/A'}</p>
        </div>

        <div className="card-footer">
          <button onClick={() => alert('Button clicked!')} className="btn btn-primary">Schoolerships</button>
          <button onClick={() => alert('Button clicked!')} className="btn btn-primary">Apply</button>
          <button onClick={downloadPDF} className="btn btn-primary">Download PDF</button>
        </div>
      </div>
    </div>
  );
}

export default CourseView;
