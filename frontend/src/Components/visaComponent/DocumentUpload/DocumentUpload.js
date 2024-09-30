import React from 'react';
import "./DocumentUpload.css"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

function DocumentUpload() {

  
  return (

  <div
  style={{
    backgroundColor:"#F4F7FB",
  }}
  >

<AppBar
  position="sticky"
  sx={{
    backgroundColor: "#0091EA", // Background color
    boxShadow: "none"
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

    <div className="dropzone-container"
      style={{
        marginTop:"25px",
        backgroundColor:"white"
      }}
    >
  
    <div className="upload-section">
    <h2 className="section-title">Valid Passport - File upload</h2>
      <label htmlFor="passport-upload" className="dropzone">
        <div className="dropzone-content">
          <svg className="upload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <p className="dropzone-text">Drop files here or click to Upload</p>
          <p className="dropzone-subtext">[ Document must be PDF ]</p>
        </div>
        <input id="passport-upload" type="file" accept=".pdf" className="file-input" />
      </label>
    </div>

    <div className="upload-grid">
      <div className="upload-section">
        <h2 className="section-title">Proof of Accommodation - File upload</h2>
        <label htmlFor="accommodation-upload" className="dropzone">
          <div className="dropzone-content">
            <svg className="upload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <p className="dropzone-text">Drop files here or click to Upload</p>
            <p className="dropzone-subtext">[ Document must be PDF ]</p>
          </div>
          <input id="accommodation-upload" type="file" accept=".pdf" className="file-input" />
        </label>
      </div>
      <div className="upload-section">
        <h2 className="section-title">Financial Evidence - File upload</h2>
        <label htmlFor="financial-upload" className="dropzone">
          <div className="dropzone-content">
            <svg className="upload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <p className="dropzone-text">Drop files here or click to Upload</p>
            <p className="dropzone-subtext">[ Document must be PDF ]</p>
          </div>
          <input id="financial-upload" type="file" accept=".pdf" className="file-input" />
        </label>
      </div>
    </div>

    <div className="upload-section">
      <h2 className="section-title">Passport Sized Photographs - File upload</h2>
      <label htmlFor="photo-upload" className="dropzone">
        <div className="dropzone-content">
          <svg className="upload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <p className="dropzone-text">Drop files here or click to Upload</p>
          <p className="dropzone-subtext">[ Document must be PDF ]</p>
        </div>
        <input id="photo-upload" type="file" accept="image/*" className="file-input" />
      </label>
    </div>
  </div>

 {/* Submit Button */}
 <Box mt={4}>
            <Button type="submit" variant="contained" color="primary"
            style={{
              marginLeft:"670px",
              width:"180px",
              marginBottom:"20px"
            }}
            >
              Submit
            </Button>
          </Box>
  </div>
  )
}

export default DocumentUpload
