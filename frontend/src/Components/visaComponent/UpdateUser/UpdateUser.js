import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
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

function UpdateUser() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/VisaApplication/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/VisaApplication/${id}`, {
        //visa
        fullname: String(inputs.fullname),
        dob: Date(inputs.dob),
        gender: String(inputs.gender),
        countryresidence: String(inputs.countryresidence),
        placeofbirth: String(inputs.placeofbirth),
        nationality: String(inputs.nationality),
        passportnumber: Number(inputs.passportnumber),
        passportissuedate: Date(inputs.passportissuedate),
        passportexpirydate: Date(inputs.passportexpirydate),
        residetialaddress: String(inputs.residetialaddress),
        email: String(inputs.email),
        phonenumber: Number(inputs.phonenumber),
        emergencycontact: Number(inputs.emergencycontact),
        purposeofvisit: String(inputs.purposeofvisit),
        intendedduration: Number(inputs.intendedduration),
        addressinthedestination: String(inputs.addressinthedestination),
        arrivaldate: Date(inputs.arrivaldate),
        depaturedate: Date(inputs.depaturedate),
        schoolname: String(inputs.schoolname),
        courseofstudy: String(inputs.courseofstudy),
        studyduration: Number(inputs.studyduration),
        schooladdress: String(inputs.schooladdress),
        medicalinsurance: String(inputs.medicalinsurance),
        healthdeclaration: String(inputs.healthdeclaration),
        accommodationdetails: String(inputs.accommodationdetails),
        travelitinerary: String(inputs.travelitinerary),
        declaration: String(inputs.declaration),
        dateofapplication: Date(inputs.dateofapplication),
        signature:String(inputs.signature),
        visaID:String(inputs.visaID),
      })
      .then((res) => res.data);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
  
    // Full Name Validation: First letter must be capital, no numbers allowed
    const nameRegex = /^[A-Z][a-zA-Z\s]*$/;
    if (!inputs.fullname) {
      tempErrors.fullname = "Full name is required";
    } else if (!nameRegex.test(inputs.fullname)) {
      tempErrors.fullname =
        "Full name must start with a capital letter and contain no numbers";
    }
  
    // Passport Number Validation: Required, alphanumeric, length between 6-15
    const passportNumberRegex = /^[A-Za-z0-9]{6,15}$/; // Adjust regex as necessary
    if (!inputs.passportnumber) {
      tempErrors.passportnumber = "Passport number is required";
    } else if (!passportNumberRegex.test(inputs.passportnumber)) {
      tempErrors.passportnumber =
        "Passport number must be alphanumeric and between 6-15 characters";
    }
  
    // Passport Expiry should be after issue date
    if (inputs.passportissuedate && inputs.passportexpirydate) {
      const issueDate = new Date(inputs.passportissuedate);
      const expiryDate = new Date(inputs.passportexpirydate);
      if (expiryDate <= issueDate) {
        tempErrors.passportexpirydate = "Expiry date must be after issue date";
      }
    }
  
    // Email Validation
    if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      tempErrors.email = "Email is not valid";
    }
  
    // Phone Number Validation
    if (!/^\d{10,15}$/.test(inputs.phonenumber)) {
      tempErrors.phonenumber = "Phone number should be 10-15 digits";
    }
  
    // Emergency Contact Validation
    if (!/^\d{10,15}$/.test(inputs.emergencycontact)) {
      tempErrors.emergencycontact = "Emergency contact should be 10-15 digits";
    }
  
    // Intended Duration Validation (must be an integer)
    if (
      !inputs.intendedduration ||
      !Number.isInteger(Number(inputs.intendedduration))
    ) {
      tempErrors.intendedduration = "Intended duration must be an integer";
    }
  
    // Study Duration Validation (must be an integer)
    if (
      !inputs.studyduration ||
      !Number.isInteger(Number(inputs.studyduration))
    ) {
      tempErrors.studyduration = "Study duration must be an integer";
    }
  
    setErrors(tempErrors);
  
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run validation before submission
    if (validate()) {
      // If validation passes, submit the form
      try {
        await sendRequest();
        history("/userdetails");
      } catch (error) {
        console.error("Error while updating the user:", error);
      }
    } else {
      // If validation fails, you can log or display the errors
      console.log("Validation failed", errors);
    }
  };

  return (
    <div>
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
          position: "relative", // Make container relative for positioning
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          style={{
            marginTop: "30px",
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          Visa Application
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "30px",
              marginBottom: "20px",
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
                error={Boolean(errors.fullname)}
                helperText={errors.fullname}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                value={inputs.dob ? formatDate(inputs.dob) : ""} // Ensuring proper date format
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel shrink>Gender</InputLabel>
                <Select
                  name="gender"
                  value={inputs.gender || ""} // Fallback to empty string if value is null/undefined
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
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Place of Birth"
                name="placeofbirth"
                value={inputs.placeofbirth}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>

          {/* Passport Details */}
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "30px",
              marginBottom: "10px",
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
                InputLabelProps={{ shrink: true }}
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
                error={Boolean(errors.passportnumber)}
                helperText={errors.passportnumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Passport Issue Date"
                name="passportissuedate"
                type="date"
                value={
                  inputs.passportissuedate
                    ? formatDate(inputs.passportissuedate)
                    : ""
                }
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                error={Boolean(errors.passportissuedate)}
                helperText={errors.passportissuedate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Passport Expiry Date"
                name="passportexpirydate"
                type="date"
                value={
                  inputs.passportexpirydate
                    ? formatDate(inputs.passportexpirydate)
                    : ""
                }
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                error={Boolean(errors.passportexpirydate)}
                helperText={errors.passportexpirydate}
              />
            </Grid>
          </Grid>

          {/* Contact Details */}
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "30px",
              marginBottom: "10px",
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
                InputLabelProps={{ shrink: true }}
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
                error={Boolean(errors.email)}
                helperText={errors.email}
                InputLabelProps={{ shrink: true }}
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
                error={Boolean(errors.phonenumber)}
                helperText={errors.phonenumber}
                InputLabelProps={{ shrink: true }}
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
                error={Boolean(errors.emergencycontact)}
                helperText={errors.emergencycontact}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>

          {/* Travel Details */}
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "30px",
              marginBottom: "10px",
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
                InputLabelProps={{ shrink: true }}
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
                error={Boolean(errors.intendedduration)}
                helperText={errors.intendedduration}
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Arrival Date"
                name="arrivaldate"
                type="date"
                value={inputs.arrivaldate ? formatDate(inputs.arrivaldate) : ""}
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
                value={
                  inputs.depaturedate ? formatDate(inputs.depaturedate) : ""
                }
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
          </Grid>

          {/* Educational Details */}
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "30px",
              marginBottom: "10px",
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
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
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
                error={Boolean(errors.studyduration)}
                helperText={errors.studyduration}
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>

          {/* Other Details */}
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "30px",
              marginBottom: "10px",
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
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Application"
                name="dateofapplication"
                type="date"
                value={
                  inputs.dateofapplication
                    ? formatDate(inputs.dateofapplication)
                    : ""
                }
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Signature"
                name="signature"
                value={inputs.signature}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

          </Grid>

          {/* Submit Button */}
          <Box mt={4}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
}

export default UpdateUser;
