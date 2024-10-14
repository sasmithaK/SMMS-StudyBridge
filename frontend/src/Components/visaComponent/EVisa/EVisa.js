import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QRCode from "qrcode";
import axios from "axios";
import visaImg from "./visaImg.jpeg";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/VisaApplication";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function EVisa() {
  const [VisaApplication, setUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.VisaApplication));
  }, []);

  const generateReport = async () => {
    const doc = new jsPDF();

    const user = VisaApplication.length > 0 ? VisaApplication[VisaApplication.length - 1] : {};

      // Title
      doc.setFontSize(15);
      doc.setTextColor("#A818A6");
      doc.text(
        "Department of Immigration & Emigration Acknowledgement",
        110,
        20,
        { align: "center" }
      );
      doc.text("of E-Visa Issued Notice", 110, 30, { align: "center" });

      // Main description
      doc.setFontSize(13);
      doc.setTextColor("#150E15");
      doc.text(
        "This document serves as an official acknowledgment from the Department of Immigration & Emigration, confirming the issuance of an E-visa. The notice provides the recipient with essential visa details, such as the type of visa, entry permissions, and validity.",
        10,
        50,
        { maxWidth: 190 }
      );

      // Particulars header
      doc.setFontSize(13);
      doc.text(
        "The particulars submitted by you are appended as follows:",
        10,
        75
      );

      doc.setFont("helvetica", "bold"); // Set font to Helvetica and bold
      doc.setFontSize(14);
      doc.text("Visa Information", 10, 90);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(13);
      doc.text("Visa Number: 123456", 10, 98);
      doc.text("Visa Type: Study", 10, 106);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Personal Details", 10, 121);
      doc.setFont("helvetica", "normal");

      doc.setFontSize(13);
      doc.text(`Date of Birth:${user.dob || "N/A"}`, 10, 129);
      doc.text(`Full Name: ${user.fullname || "N/A"}`, 10, 138);
      doc.text(`Passport Number: ${user.passportnumber || "N/A"}`, 10, 146);
      doc.text(`Nationality: ${user.nationality || "N/A"}`, 10, 154);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Additional Visa Info", 10, 169);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(13);
      doc.text(`Date Issued: ${user.passportissuedate || "N/A"}`, 10, 176);
      doc.text(`Duration of Stay: ${user.intendedduration || "N/A"}`, 10, 184);
      doc.text("Visa Issuing Authority: Department of Immigration", 10, 192);
      doc.text(`Expiry Date: ${user.passportexpirydate || "N/A"}`, 10, 200);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.text("Purpose of Travel: ", 10, 212);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.text(
        "(You are NOT permitted to use this E-visa for any other purpose, e.g., Business or Trade,",
        10,
        227
      );
      doc.text(
        "NGO activity, Journalism, Meeting with Political Parties, etc.)",
        10,
        233
      );

      // Generate QR Code (e.g., using some visa information as data)
      const qrData = "E-visa issued for John Doe, Visa Number: 123456";
      const qrCodeBase64 = await QRCode.toDataURL(qrData);

      // Add QR Code to the PDF after the text
      doc.addImage(qrCodeBase64, "PNG", 10, 245, 40, 40); // x, y, width, height for QR

      // Footer text at bottom-right corner
      doc.setFontSize(12);
      doc.setTextColor("#000000");
      doc.text("Authorized by: Department of Immigration", 90, 254);

      // Additional contact info or reference number in smaller font
      doc.setFontSize(10);
      doc.text("Ref No: 123456 | Contact: +123456789", 90, 270);

      // Save the PDF
      doc.save("e-visa-report.pdf");

  };

  return (
    <div
      style={{
        backgroundColor: "#F4F7FB",
      }}
    >
   <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#0091EA", // Background color
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3, color: "#FFFFFF" }} // White icon color for contrast
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#FFFFFF" }} // White text color for contrast
          >
            Study Bridge
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
          <Link to="/visa">
            <Button
              color="inherit"
              sx={{
                margin: 1,
                minWidth: 120,
                backgroundColor: "transparent",
                color: "#FFFFFF", // White text color
                "&:hover": {
                  backgroundColor: "orange", // Orange hover background
                  color: "white", // Maintain white text on hover
                },
              }}
            >
              Home
            </Button>
            </Link>
            
            <Button
              color="inherit"
              sx={{
                margin: 1,
                minWidth: 160,
                backgroundColor: "transparent",
                color: "#FFFFFF", // White text color
                "&:hover": {
                  backgroundColor: "orange", // Orange hover background
                  color: "white", // Maintain white text on hover
                },
              }}
            >
              Visa Guidance
            </Button>
            <Link to="/contactUs">
            <Button
              color="inherit"
              sx={{
                margin: 1,
                minWidth: 120,
                backgroundColor: "transparent",
                color: "#FFFFFF", // White text color
                "&:hover": {
                  backgroundColor: "orange", // Orange hover background
                  color: "white", // Maintain white text on hover
                },
              }}
            >
              Contact Us
            </Button>
            </Link>
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="notifications"
            sx={{ ml: 2, color: "#FFFFFF" }} // White icon color
          >
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div
        style={{
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            margin: "166px 50px 30px 60px",
            float: "left",
          }}
        >
          <h1
            style={{
              letterSpacing: "1.3px",
              fontSize: "45px",
              color: "#2F62C0",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              textAlign:"left"
            }}
          >
            Online E-visa
            <span
              style={{
                color: "#1E1E1E",
              }}
            >
              <br></br>application
            </span>
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#838383",
              marginTop: "15px",
              textAlign:"left"
            }}
          >
            Apply for your visa online with our streamlined E-visa application
            system. <br></br>Save time and avoid the hassle by submitting your
            visa application from <br></br>the comfort of your home. Our
            user-friendly platform guides you through <br></br>each step,
            ensuring a smooth and secure process.
          </p>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{
              marginTop: "25px",
              background: "linear-gradient(to right, #4895EC, #3C4BAA)",
              borderRadius: "8px",
              width: "150px",
              height: "40px",
              fontFamily: "sans-serif",
              border: "none",
              color: "white",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)")
            }
            onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
            onClick={generateReport}
          >
            Get E-visa
          </button>
        </div>
        <div>
          <img
            src={visaImg}
            alt="visa UI img"
            style={{
              margin: "70px 20px 30px 100px",
              borderRadius: "15px",
              height: "505px",
              boxShadow: "0 4px 12px rgba(50, 50, 50, 0.3)",
            }}
          />
        </div>
      </div>
      <footer style={{ backgroundColor: '#f8f9fa', textAlign: 'center', padding: '20px 0' }}>
      {/* Grid container */}
      <div style={{ padding: '20px 0' }}>
        {/* Section: Social media */}
        <section style={{ marginBottom: '20px' }}>
          {/* Facebook */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#3b5998',
            }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#55acee',
            }}
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#dd4b39',
            }}
          >
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#ac2bac',
            }}
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#0082ca',
            }}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Github */}
          <a
            href="#!"
            role="button"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              margin: '5px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '18px',
              backgroundColor: '#333333',
            }}
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div
        style={{
          textAlign: 'center',
          padding: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }}
      >
        © 2020 Copyright:
        <a
          href="https://yourwebsite.com"
          style={{ color: '#000', textDecoration: 'none', marginLeft: '5px' }}
        >
          StudyBridge
        </a>
      </div>
      {/* Copyright */}
    </footer>
    </div>
  );
}

export default EVisa;
