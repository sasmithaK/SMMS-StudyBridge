import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const StdstudentList = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]); // To store the filtered list
    const [selectedStudents, setSelectedStudents] = useState([]); // For selected rows
    const [searchQuery, setSearchQuery] = useState(''); // For search input
    const [message, setMessage] = useState('');

    // Fetch all students
    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/students');
            setStudents(response.data);
            setFilteredStudents(response.data); // Initially, all students are shown
        } catch (error) {
            console.error('Error fetching students:', error);
            setMessage('Error fetching students.');
        }
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        filterStudents(query);
    };

    // Filter students based on search query
    const filterStudents = (query) => {
        if (!query) {
            setFilteredStudents(students); // If search query is empty, show all students
        } else {
            const filtered = students.filter(student =>
                student.name.toLowerCase().includes(query) ||
                student.email.toLowerCase().includes(query)
            );
            setFilteredStudents(filtered);
        }
    };

    // Handle checkbox change to select/deselect students
    const handleCheckboxChange = (student) => {
        if (selectedStudents.includes(student)) {
            setSelectedStudents(selectedStudents.filter(s => s !== student));
        } else {
            setSelectedStudents([...selectedStudents, student]);
        }
    };

    // Handle student delete
    const handleDelete = async (studentId) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            try {
                await axios.delete(`http://localhost:5000/api/students/${studentId}`);
                setMessage('Student deleted successfully.');
                fetchStudents(); // Refresh the list after deleting
            } catch (error) {
                console.error('Error deleting student:', error);
                setMessage('Error deleting student.');
            }
        }
    };

    // Generate PDF report for selected students
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text('Student Report', 14, 16);
        doc.autoTable({
            startY: 20,
            head: [['Name', 'Email', 'Mobile', 'Age', 'Type', 'Degree']],
            body: selectedStudents.map(student => [
                student.name,
                student.email,
                student.mobile,
                student.age,
                student.type,
                student.degree
            ]),
        });
        doc.save('student_report.pdf');
    };

    return (
        <div className="student-list">
            <style>{`
                .student-list {
                    margin: 20px;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    background-color: #f9f9f9;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }

                h2 {
                    text-align: center;
                    color: #333;
                }

                input[type="text"] {
                    display: block;
                    margin: 0 auto 20px auto;
                    padding: 8px;
                    width: 300px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 14px;
                }

                button {
                    margin: 10px 0;
                    padding: 10px 20px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                button:disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }

                table th, table td {
                    padding: 10px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }

                table th {
                    background-color: #f2f2f2;
                }

                input[type="checkbox"] {
                    cursor: pointer;
                }

                td button {
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 3px;
                    cursor: pointer;
                }

                td button:hover {
                    background-color: #007BFF;
                }
            `}</style>

            <h2>Student List</h2>
            {message && <p>{message}</p>}

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by name or email"
                value={searchQuery}
                onChange={handleSearchChange}
            />

            <button onClick={generatePDF} disabled={selectedStudents.length === 0}>
                Generate PDF
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Age</th>
                        <th>Type</th>
                        <th>Degree</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student) => (
                        <tr key={student._id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedStudents.includes(student)}
                                    onChange={() => handleCheckboxChange(student)}
                                />
                            </td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.mobile}</td>
                            <td>{student.age}</td>
                            <td>{student.type}</td>
                            <td>{student.degree}</td>
                            <td>
                                <button onClick={() => handleDelete(student._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StdstudentList;
