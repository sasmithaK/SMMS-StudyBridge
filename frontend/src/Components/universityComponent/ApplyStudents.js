import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import './Style/ApplyCourses.css'; 
import { useNavigate } from "react-router-dom";
import StudentList from "./StudentList";  // Import the StudentList component
import jsPDF from "jspdf";

function ApplyStudents() {
    const [universities, setUniversities] = useState([]);
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const navigate = useNavigate();
    const pdfRef = useRef(); // Reference for the content to capture in PDF

    useEffect(() => {
        // Fetch universities from the server
        axios.get("http://localhost:5000/posts/posts")
            .then(response => {
                const universities = response.data.existingPosts;
                setUniversities(universities);
                
                const userName = localStorage.getItem('userName');
                const matchedUniversities = universities.filter(uni => uni.userName === userName);
                setFilteredUniversities(matchedUniversities);
                
                // Fetch students for each university
                const universitiesWithStudents = matchedUniversities.map(uni => {
                    return axios.get(`http://localhost:5000/appstudents?university=${uni.uniName}`)
                        .then(studentResponse => ({
                            ...uni,  // Keep existing university data
                            students: studentResponse.data.students || []  // Attach students data
                        }))
                        .catch(error => {
                            console.error(`Error fetching students for ${uni.uniName}:`, error);
                            return { ...uni, students: [] };  // Return university without students on error
                        });
                });
    
                // Wait for all university-student data to resolve and set state
                Promise.all(universitiesWithStudents).then(universitiesWithStudentsData => {
                    setFilteredUniversities(universitiesWithStudentsData);
                });
            })
            .catch(error => {
                console.error("Error fetching universities:", error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/posts/posts/delete/${id}`)
            .then(() => {
                setFilteredUniversities(prev => prev.filter(uni => uni._id !== id));
                alert("University deleted successfully!");
                navigate("/");
            })
            .catch(error => {
                console.error("Error deleting university:", error);
            });
    };

    const handleLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('otherUserData');
        navigate("/");
    };

    const generatePDF = () => {
        const doc = new jsPDF();
    
        // Get the current date
        const currentDate = new Date();
    
        // Define the columns for the table
        const columns = ["Student Name", "Address", "Email", "Age", "Phone Number"];
    
        // Define the rows for the table body
        const rows = filteredUniversities.flatMap(uni => 
            (uni.students && uni.students.length > 0) ? uni.students.map(student => [
                student.name,
                student.address,
                student.email,
                student.age,
                student.contact
            ]) : []  // Handle case where no students are present
        );
    
        // Set the font and size for the document header
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("University Registered Student Report", 18, 15);
        
        // Draw a horizontal line below the title
        doc.line(18, 18, 200, 18);
    
        // Add the current date to the document
        doc.setFontSize(10);
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        doc.text(`Date: ${formattedDate}`, 168, 30);
    
        // Add University Name and Report Title
        doc.setFontSize(12);
        doc.text(`University: ${filteredUniversities.length > 0 ? filteredUniversities[0].uniName : "N/A"}`, 18, 35);
        doc.text("Student List", 18, 45);
    
        // Add table with custom styling
        doc.autoTable({
            head: [columns],
            body: rows,
            startY: 50,  // Top margin of the table
            theme: 'grid',  // Use grid theme for better visual separation
            styles: {
                fontSize: 10,
                overflow: 'linebreak',
                cellPadding: 2,
                textColor: [0, 0, 0],  // Black text color
                fontStyle: 'normal',
                halign: 'center',
                valign: 'middle',
            },
            columnStyles: {
                0: { cellWidth: 30 },  // Adjust widths as needed
                1: { cellWidth: 50 },
                2: { cellWidth: 40 },
                3: { cellWidth: 20 },
                4: { cellWidth: 30 },
            },
            margin: { top: 10 },  // Adjust top margin if needed
        });
    
        // Save the PDF
        doc.save("universities_students.pdf");
    };

    return (
        <div>
            {/* University Dashboard Header */}
            <div style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#000000e2", color: "white" }}>
                <center><h1>Welcome {filteredUniversities.length > 0 ? filteredUniversities[0].uniName : "University"} Dashboard!</h1></center>
                <br />
            </div>

            <nav className="navbar">
                <ul className="nav-list">
                    <li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"36%"}} onClick={() => navigate("/uniProfile")}>Profile</li>
                    &ensp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"10%"}} onClick={() => navigate("/applyStudents")}>Students</li>
                    &ensp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"10%"}}>Report</li>
                    &ensp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"10%"}} onClick={() => navigate("/")}>Home</li>

                    &emsp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"15%"}} onClick={handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</li>
                </ul>
            </nav>
            {/* Button to Download PDF */}
            <button style={{marginTop:"2%",marginLeft:"79%",backgroundColor:"black",color:"white"}} onClick={generatePDF} className="loginBtn">
                Download PDF
            </button>
    
            {/* University Content to be Captured in PDF */}
            <div style={{marginTop:"1%"}} ref={pdfRef} className="gallery">
                {filteredUniversities.map(uni => (
                    <div className="university-card" key={uni._id}>
                        <h2><u><b>{uni.uniName}</b></u></h2>
                        <p>Student Count: {uni.students ? uni.students.length : 0}</p> 
                        <center><h4>For</h4></center>
        
                        <StudentList universityName={uni.uniName} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ApplyStudents;