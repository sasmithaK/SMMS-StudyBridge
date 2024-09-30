import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";


function UpdateUser() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/Users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/Users/${id}`, {
        /*
            name: String (inputs.name),
            gmail: String (inputs.gmail),
            age: Number (inputs.age),
            address: String (inputs.address),*/

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
        signature: String(inputs.signature),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/userdetails"));
  };

  return (
    <div>
      {/*
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <br></br>
        <input
          type="text"
          id="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          required
        />
        <br></br>

        <label for="gmail">Gmail:</label>
        <br></br>
        <input
          type="email"
          id="gmail"
          name="gmail"
          value={inputs.gmail}
          onChange={handleChange}
          required
        />
        <br></br>

        <label for="age">Age:</label>
        <br></br>
        <input
          type="number"
          id="age"
          name="age"
          min="1"
          value={inputs.age}
          onChange={handleChange}
          required
        />
        <br></br>

        <label for="address">Address:</label>
        <br></br>
        <input
          type="text"
          name="address"
          value={inputs.address}
          onChange={handleChange}
          required
        />
        <br></br>
        <button>Submit</button>
      </form>*/}

      <div className="visa-application">
        <h1>Visa Application</h1>
        <div className="logo">
          <img src="file.png" alt="Airplane logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullname"
                  value={inputs.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={inputs.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={inputs.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="countryResidence">Country of Residence</label>
                <input
                  type="text"
                  id="countryResidence"
                  name="countryresidence"
                  value={inputs.countryresidence}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="placeOfBirth">Place of Birth</label>
                <input
                  type="text"
                  id="placeOfBirth"
                  name="placeofbirth"
                  value={inputs.placeofbirth}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={inputs.nationality}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="passportNumber">Passport Number</label>
                <input
                  type="text"
                  id="passportNumber"
                  name="passportnumber"
                  value={inputs.passportnumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="passportIssueDate">Passport Issue Date</label>
                <input
                  type="date"
                  id="passportIssueDate"
                  name="passportissuedate"
                  value={inputs.passportissuedate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="passportExpiryDate">Passport Expiry Date</label>
                <input
                  type="date"
                  id="passportExpiryDate"
                  name="passportexpirydate"
                  value={inputs.passportexpirydate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Contact Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="residentialAddress">Residential Address</label>
                <input
                  type="text"
                  id="residentialAddress"
                  name="residetialaddress"
                  value={inputs.residetialaddress}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phonenumber"
                  value={inputs.phonenumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="emergencyContact">Emergency Contact</label>
                <input
                  type="tel"
                  id="emergencyContact"
                  name="emergencycontact"
                  value={inputs.emergencycontact}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Travel Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="purposeOfVisit">Purpose of Visit</label>
                <input
                  type="text"
                  id="purposeOfVisit"
                  name="purposeofvisit"
                  value={inputs.purposeofvisit}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="durationOfStay">
                  Intended Duration of Stay
                </label>
                <input
                  type="text"
                  id="durationOfStay"
                  name="intendedduration"
                  value={inputs.intendedduration}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="destinationAddress">
                  Address in the Destination Country
                </label>
                <input
                  type="text"
                  id="destinationAddress"
                  name="addressinthedestination"
                  value={inputs.addressinthedestination}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="arrivalDate">Arrival Date</label>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivaldate"
                  value={inputs.arrivaldate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="departureDate">Departure Date</label>
                <input
                  type="date"
                  id="departureDate"
                  name="depaturedate"
                  value={inputs.depaturedate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Education Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="schoolName">School Name</label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolname"
                  value={inputs.schoolname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="courseOfStudy">Course of Study</label>
                <input
                  type="text"
                  id="courseOfStudy"
                  name="courseofstudy"
                  value={inputs.courseofstudy}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="studyDuration">Study Duration</label>
                <input
                  type="text"
                  id="studyDuration"
                  name="studyduration"
                  value={inputs.studyduration}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="schoolAddress">School Address</label>
                <input
                  type="text"
                  id="schoolAddress"
                  name="schooladdress"
                  value={inputs.schooladdress}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Health & Supporting Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="medicalInsurance">Medical Insurance</label>
                <input
                  type="text"
                  id="medicalInsurance"
                  name="medicalinsurance"
                  value={inputs.medicalinsurance}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="healthDeclaration">Health Declaration</label>
                <textarea
                  id="healthDeclaration"
                  name="healthdeclaration"
                  rows="3"
                  value={inputs.healthdeclaration}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="accommodationDetails">
                  Accommodation Details
                </label>
                <input
                  type="text"
                  id="accommodationDetails"
                  name="accommodationdetails"
                  value={inputs.accommodationdetails}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="travelItinerary">Travel Itinerary</label>
                <textarea
                  id="travelItinerary"
                  name="travelitinerary"
                  rows="3"
                  value={inputs.travelitinerary}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Declaration and Signature</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="declaration">
                  Applicant's Declaration (truthfulness of information)
                </label>
                <textarea
                  id="declaration"
                  name="declaration"
                  rows="3"
                  value={inputs.declaration}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="applicationDate">Date of Application</label>
                <input
                  type="date"
                  id="applicationDate"
                  name="dateofapplication"
                  value={inputs.dateofapplication}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signature">Applicant's Signature</label>
                <input
                  type="text"
                  id="signature"
                  name="signature"
                  value={inputs.signature}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
