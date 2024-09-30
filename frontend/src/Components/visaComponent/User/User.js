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
  } = props.user;

  //Delete function
  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/Users/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/userdetails"));
  };

  return (
    <div>
      <br></br>
      {/*<h2>ID:{_id}</h2>
      <h2>Name:{name}</h2>
      <h2>Gmail:{gmail}</h2>
      <h2>Age:{age}</h2>
      <h2>Address:{address}</h2>*/}

      {/* <h1>Personal details</h1>
      <h3>ID: {_id}</h3>
      <h3>FullName:{fullname}</h3>
      <h3>DateofBirth: {dob}</h3>
      <h3>Gender: {gender}</h3>
      <h3>CountryResidence: {countryresidence}</h3>
      <h3>PlaceOfBirth: {placeofbirth}</h3>
      <h3>Nationality: {nationality}</h3>
      <h3>PassportNumber: {passportnumber}</h3>
      <h3>PassportIssueDate: {passportissuedate}</h3>
      <h3>PassportExpiryDate: {passportexpirydate}</h3>
      <h3>ResidetialAddress: {residetialaddress}</h3>
      <h3>Email: {email}</h3>
      <h3>PhoneNumber: {phonenumber}</h3>
      <h3>EmergencyContact: {emergencycontact}</h3>
      <h3>PurposeOfVisit: {purposeofvisit}</h3>
      <h3>IntendedDuration: {intendedduration}</h3>
      <h3>AddressInTheDestination: {addressinthedestination}</h3>
      <h3>ArrivalDate: {arrivaldate}</h3>
      <h3>DepatureDate: {depaturedate}</h3>
      <h3>SchoolName: {schoolname}</h3>
      <h3>CourseOfStudy: {courseofstudy}</h3>
      <h3>StudyDuration: {studyduration}</h3>
      <h3>SchoolAddress: {schooladdress}</h3>
      <h3>MedicalInsurance: {medicalinsurance}</h3>
      <h3>HealthDeclaration: {healthdeclaration}</h3>
      <h3>AccommodationDetails: {accommodationdetails}</h3>
      <h3>TravelItinerary: {travelitinerary}</h3>
      <h3>Declaration: {declaration}</h3>
      <h3>DateOfApplication: {dateofapplication}</h3>
      <h3>Signature:{signature}</h3>
      <Link to={`/userdetails/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>*/}

     
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Personal Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                ID
              </Typography>
              <Typography variant="body1">{_id}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Full Name
              </Typography>
              <Typography variant="body1">{fullname}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Date of Birth
              </Typography>
              <Typography variant="body1">{dob}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Gender
              </Typography>
              <Typography variant="body1">{gender}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Country of Residence
              </Typography>
              <Typography variant="body1">{countryresidence}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Place of Birth
              </Typography>
              <Typography variant="body1">{placeofbirth}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Nationality
              </Typography>
              <Typography variant="body1">{nationality}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Passport Number
              </Typography>
              <Typography variant="body1">{passportnumber}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Passport Issue Date
              </Typography>
              <Typography variant="body1">{passportissuedate}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Passport Expiry Date
              </Typography>
              <Typography variant="body1">{passportexpirydate}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Contact Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Residential Address
              </Typography>
              <Typography variant="body1">{residetialaddress}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Email
              </Typography>
              <Typography variant="body1">{email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Phone Number
              </Typography>
              <Typography variant="body1">{phonenumber}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Emergency Contact
              </Typography>
              <Typography variant="body1">{emergencycontact}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Travel Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Purpose of Visit
              </Typography>
              <Typography variant="body1">{purposeofvisit}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Intended Duration
              </Typography>
              <Typography variant="body1">{intendedduration}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Address in Destination
              </Typography>
              <Typography variant="body1">{addressinthedestination}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Arrival Date
              </Typography>
              <Typography variant="body1">{arrivaldate}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Departure Date
              </Typography>
              <Typography variant="body1">{depaturedate}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Education Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                School Name
              </Typography>
              <Typography variant="body1">{schoolname}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Course of Study
              </Typography>
              <Typography variant="body1">{courseofstudy}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Study Duration
              </Typography>
              <Typography variant="body1">{studyduration}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                School Address
              </Typography>
              <Typography variant="body1">{schooladdress}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Health & Supporting Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Medical Insurance
              </Typography>
              <Typography variant="body1">{medicalinsurance}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Health Declaration
              </Typography>
              <Typography variant="body1">{healthdeclaration}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Accommodation Details
              </Typography>
              <Typography variant="body1">{accommodationdetails}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Travel Itinerary
              </Typography>
              <Typography variant="body1">{travelitinerary}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Declaration and Signature</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Declaration
              </Typography>
              <Typography variant="body1">{declaration}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Date of Application
              </Typography>
              <Typography variant="body1">{dateofapplication}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="textSecondary">
                Signature
              </Typography>
              <Typography variant="body1">{signature}</Typography>
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
