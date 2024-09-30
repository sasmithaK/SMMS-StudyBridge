import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Container,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from "@mui/material";

function AddUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    fullname: "",
    dob: "",
    gender: "",
    countryresidence: "",
    placeofbirth: "",
    nationality: "",
    passportnumber: "",
    passportissuedate: "",
    passportexpirydate: "",
    residetialaddress: "",
    email: "",
    phonenumber: "",
    emergencycontact: "",
    purposeofvisit: "",
    intendedduration: "",
    addressinthedestination: "",
    arrivaldate: "",
    depaturedate: "",
    schoolname: "",
    courseofstudy: "",
    studyduration: "",
    schooladdress: "",
    medicalinsurance: "",
    healthdeclaration: "",
    accommodationdetails: "",
    travelitinerary: "",
    declaration: "",
    dateofapplication: "",
    signature: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendRequest();
      navigate("/userdetails");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const sendRequest = async () => {
    try {
      await axios.post("http://localhost:5000/Users",
         {
        fullname: inputs.fullname,
        dob: inputs.dob,
        gender: inputs.gender,
        countryresidence: inputs.countryresidence,
        placeofbirth: inputs.placeofbirth,
        nationality: inputs.nationality,
        passportnumber: inputs.passportnumber,
        passportissuedate: inputs.passportissuedate,
        passportexpirydate: inputs.passportexpirydate,
        residetialaddress: inputs.residetialaddress,
        email: inputs.email,
        phonenumber: inputs.phonenumber,
        emergencycontact: inputs.emergencycontact,
        purposeofvisit: inputs.purposeofvisit,
        intendedduration: inputs.intendedduration,
        addressinthedestination: inputs.addressinthedestination,
        arrivaldate: inputs.arrivaldate,
        depaturedate: inputs.depaturedate,
        schoolname: inputs.schoolname,
        courseofstudy: inputs.courseofstudy,
        studyduration: inputs.studyduration,
        schooladdress: inputs.schooladdress,
        medicalinsurance: inputs.medicalinsurance,
        healthdeclaration: inputs.healthdeclaration,
        accommodationdetails: inputs.accommodationdetails,
        travelitinerary: inputs.travelitinerary,
        declaration: inputs.declaration,
        dateofapplication: inputs.dateofapplication,
        signature: inputs.signature,
      });
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

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
        Document Upload
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

      <Container
      maxWidth="md"
      style={{
        backgroundColor: "#FFFFFF",
        width: "1000px",
        padding: "20px 40px",
        marginTop: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        position: 'relative' // Make container relative for positioning
      }}
    >
      {/* Add the image */}
      <img
        src="plane.png"
        alt="Airplane"
        style={{
          position: 'absolute',
          right: '50px',
          width: '160px', // Adjust size as needed
          height: 'auto',
        }}
      />
        <Typography variant="h5" component="h1" gutterBottom
         style={{
          marginTop:"30px",
          marginBottom:"60px",
          textAlign:"center"
        }}
        >
          Visa Application
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <Typography variant="h6" gutterBottom
           style={{
            marginTop:"30px",
            marginBottom:"20px",
          }}
          >
            Personal Details
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullname"
                value={inputs.fullname}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                value={inputs.dob}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={inputs.gender}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Country of Residence"
                name="countryresidence"
                value={inputs.countryresidence}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                fullWidth
                label="Place of Birth"
                name="placeofbirth"
                value={inputs.placeofbirth}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>

          {/* Passport Details */}
          <Typography variant="h6" gutterBottom 
          style={{
            marginTop:"30px",
            marginBottom:"10px"
          }}
          >
            Passport Details
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nationality"
                name="nationality"
                value={inputs.nationality}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Passport Number"
                name="passportnumber"
                value={inputs.passportnumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Passport Issue Date"
                name="passportissuedate"
                type="date"
                value={inputs.passportissuedate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Passport Expiry Date"
                name="passportexpirydate"
                type="date"
                value={inputs.passportexpirydate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
          </Grid>

          {/* Contact Details */}
          <Typography variant="h6" gutterBottom
           style={{
            marginTop:"30px",
            marginBottom:"10px"
          }}
          >
            Contact Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Residential Address"
                name="residetialaddress"
                value={inputs.residetialaddress}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={inputs.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phonenumber"
                type="tel"
                value={inputs.phonenumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Emergency Contact"
                name="emergencycontact"
                type="tel"
                value={inputs.emergencycontact}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>

          {/* Travel Details */}
          <Typography variant="h6" gutterBottom
           style={{
            marginTop:"30px",
            marginBottom:"10px"
          }}
          >
            Travel Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Purpose of Visit"
                name="purposeofvisit"
                value={inputs.purposeofvisit}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Intended Duration of Stay"
                name="intendedduration"
                value={inputs.intendedduration}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address in the Destination Country"
                name="addressinthedestination"
                value={inputs.addressinthedestination}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Arrival Date"
                name="arrivaldate"
                type="date"
                value={inputs.arrivaldate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Departure Date"
                name="depaturedate"
                type="date"
                value={inputs.depaturedate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
          </Grid>

          {/* Educational Details */}
          <Typography variant="h6" gutterBottom
           style={{
            marginTop:"30px",
            marginBottom:"10px"
          }}
          >
            Educational Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="School Name"
                name="schoolname"
                value={inputs.schoolname}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Course of Study"
                name="courseofstudy"
                value={inputs.courseofstudy}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Study Duration"
                name="studyduration"
                value={inputs.studyduration}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="School Address"
                name="schooladdress"
                value={inputs.schooladdress}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>

          {/* Other Details */}
          <Typography variant="h6" gutterBottom
           style={{
            marginTop:"30px",
            marginBottom:"10px"
          }}
          >
            Other Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Medical Insurance"
                name="medicalinsurance"
                value={inputs.medicalinsurance}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Health Declaration"
                name="healthdeclaration"
                value={inputs.healthdeclaration}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Accommodation Details"
                name="accommodationdetails"
                value={inputs.accommodationdetails}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Travel Itinerary"
                name="travelitinerary"
                value={inputs.travelitinerary}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Declaration"
                name="declaration"
                value={inputs.declaration}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}
            >
              <TextField
                fullWidth
                label="Date of Application"
                name="dateofapplication"
                type="date"
                value={inputs.dateofapplication}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Signature"
                name="signature"
                value={inputs.signature}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box mt={4}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
}

export default AddUser;
