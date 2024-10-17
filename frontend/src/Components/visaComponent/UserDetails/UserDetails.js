import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // To generate tables in the PDF
import User from "../User/User";
import { TextField, InputAdornment, Typography, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const URL = "http://localhost:5000/VisaApplication";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};


function UserDetails() {
  const [VisaApplication, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.VisaApplication));
  }, []);

  const filteredUsers = VisaApplication.filter((user) =>
    user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(user.visaID).toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Set the title of the document
    doc.setFontSize(18);
    doc.text("User Directory", 14, 22);
  
    // Define columns for the table (added "Nationality")
    const columns = ["ID", "Full Name", "Email", "Gender", "Nationality"];
  
    // Define rows and ensure data exists for all fields (added Nationality field)
    const rows = filteredUsers.map(user => [
      user.visaID || "N/A",           // Ensure that the value exists or fallback to "N/A"
      user.fullname || "N/A",
      user.email || "N/A",
      user.gender || "N/A",       // Assuming you have a gender field
      user.nationality || "N/A",  // Assuming you have a nationality field
    ]);
  
    // Generate table using jsPDF AutoTable plugin with columnStyles
    autoTable(doc, {
      startY: 30,
      head: [columns],
      body: rows,
      columnStyles: {
        0: { cellWidth: 30 }, // ID
        1: { cellWidth: 40 }, // Full Name
        2: { cellWidth: 60 }, // Email
        3: { cellWidth: 30 }, // Gender
        4: { cellWidth: 40 }, // Nationality
      },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
    });
  
    // Save the PDF
    doc.save("user_directory.pdf");
  };
  

  return (
    <div>
      {/* Title with margin */}
      <Box sx={{ mt: 5, mb: 3, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1976d2" }}>
          User Directory
        </Typography>
      </Box>

      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search by Full Name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 3,
          maxWidth: "600px", // Reduced width
          margin: "0 auto", // Centered
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px", // Rounded corners
            backgroundColor: "#fff", // Background color for the input
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          },
          "& .MuiOutlinedInput-input": {
            padding: "12px 20px", // Padding inside the input
          },
          "& .MuiInputAdornment-root": {
            color: "#1976d2", // Icon color
          },
        }}
      />

      {/* Generate PDF Button */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Button variant="contained" color="primary" onClick={generatePDF}>
          Generate PDF
        </Button>
      </Box>

      <div>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
