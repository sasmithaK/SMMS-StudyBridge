import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

function User(props) {
  const {
    _id,
    fullname,
    dob,
    gender,
    countryresidence,
    placeofbirth,
    nationality,
    passportnumber,
    passportissuedate,
    passportexpirydate,
    residetialaddress,
    email,
    phonenumber,
    emergencycontact,
    purposeofvisit,
    intendedduration,
    addressinthedestination,
    arrivaldate,
    depaturedate,
    schoolname,
    courseofstudy,
    studyduration,
    schooladdress,
    medicalinsurance,
    healthdeclaration,
    accommodationdetails,
    travelitinerary,
    declaration,
    dateofapplication,
    signature,
    visaID,
  } = props.user;

  //Delete function
  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/VisaApplication/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/userdetails"));
  };

  return (
    <div>
      
      <br></br>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Personal Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Visa ID
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {visaID}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Full Name
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {fullname}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Date of Birth
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {dob}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Gender
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {gender}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Country of Residence
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {countryresidence}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Place of Birth
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {placeofbirth}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Nationality
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {nationality}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Passport Number
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {passportnumber}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Passport Issue Date
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {passportissuedate}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Passport Expiry Date
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                  marginBottom:"10px"
                }}
              >
                {passportexpirydate}
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Contact Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Residential Address
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {residetialaddress}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Email
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {email}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Phone Number
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {phonenumber}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Emergency Contact
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                   marginBottom:"10px"
                }}
              >
                {emergencycontact}
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Travel Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Purpose of Visit
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {purposeofvisit}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Intended Duration
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {intendedduration}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Address in Destination
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {addressinthedestination}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Arrival Date
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {arrivaldate}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Departure Date
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                   marginBottom:"10px"
                }}
              >
                {depaturedate}
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Education Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                School Name
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {schoolname}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Course of Study
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {courseofstudy}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Study Duration
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {studyduration}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                School Address
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                   marginBottom:"10px"
                }}
              >
                {schooladdress}
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Health & Supporting Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Medical Insurance
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {medicalinsurance}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Health Declaration
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {healthdeclaration}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Accommodation Details
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                   marginBottom:"10px"
                }}
              >
                {accommodationdetails}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Travel Itinerary
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {travelitinerary}
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Declaration and Signature</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Declaration
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {declaration}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Date of Application
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                }}
              >
                {dateofapplication}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Signature
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "-22px",
                   marginBottom:"10px"
                }}
              >
                {signature}
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Box mt={3} display="flex" justifyContent="flex-end">
        <Button
          component={Link}
          to={`/userdetails/${_id}`}
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          sx={{
            mr: 2,
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#115293",
            },
            padding: "8px 16px",
            fontSize: "16px",
            borderRadius: "8px", // Optional: Adds rounded corners
          }}
        >
          Update
        </Button>
        <Button
          onClick={deleteHandler}
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{
            backgroundColor: "#d32f2f",
            "&:hover": {
              backgroundColor: "#9a0007",
            },
            padding: "8px 16px",
            fontSize: "16px",
            borderRadius: "8px", // Optional: Adds rounded corners
          }}
        >
          Delete
        </Button>
      </Box>
    </div>
  );
}

export default User;
