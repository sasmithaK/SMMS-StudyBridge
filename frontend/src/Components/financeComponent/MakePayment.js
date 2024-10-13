import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function MakePayment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    university: '',
    name: 'Sasmitha Kavindu', 
    studentNumber: '12345678', 
    course: '',
    purpose: '',
    email: '',
    phone: '',
    amount: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.university) {
      tempErrors.university = "Please select a university.";
      isValid = false;
    }
    if (!formData.name) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.studentNumber) {
      tempErrors.studentNumber = "Student Number is required.";
      isValid = false;
    }
    if (!formData.course) {
      tempErrors.course = "Please select a course.";
      isValid = false;
    }
    if (!formData.purpose) {
      tempErrors.purpose = "Purpose of payment is required.";
      isValid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "A valid email is required.";
      isValid = false;
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "A valid 10-digit phone number is required.";
      isValid = false;
    }
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      tempErrors.amount = "Please enter a valid amount.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      try {
        // Check if student number exists
        const checkResponse = await axios.get(`http://localhost:5000/student/check/${formData.studentNumber}`);
        
        if (checkResponse.data.exists) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            studentNumber: "Student number already exists in the database."
          }));
        } else {
          // Proceed with form submission
          const response = await axios.post('http://localhost:5000/payment/add', {
            university: formData.university,
            studentName: formData.name,
            studentNumber: formData.studentNumber,
            course: formData.course,
            purpose: formData.purpose,
            email: formData.email,
            phone: formData.phone,
            amount: formData.amount,
            paymentMethod: 'N/A',
            fundTransferDetails: {},
            creditCardDetails: {}
          });
          console.log("Form data submitted:", response.data);
          navigate("/payment-options");
        }
      } catch (error) {
        console.error("There was an error submitting the payment!", error);
      }
    }
  };
  

  return (
    <div className="container py-5" style={{ maxWidth: "800px", margin: "auto" }}>
      <h1 className="text-center mb-5">Make payments</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="col-md-8">
            <label htmlFor="university" className="form-label text-primary">
              University / Institute
            </label>
            <select
              className="form-control"
              id="university"
              value={formData.university}
              onChange={handleChange}
            >
              <option value="">Select University</option>
              <option value="NSBM Green University">NSBM Green University</option>
              <option value="ICBT">ICBT</option>
            </select>
            {errors.university && (
              <small className="text-danger">{errors.university}</small>
            )}
          </div>
        </div>

        {/* Student Name and Student Number (with default values) */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label text-primary">
              Student Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>
          <div className="col-md-6">
            <label htmlFor="studentNumber" className="form-label text-primary">
              Student Number
            </label>
            <input
              type="text"
              className="form-control"
              id="studentNumber"
              value={formData.studentNumber}
              onChange={handleChange}
            />
            {errors.studentNumber && (
              <small className="text-danger">{errors.studentNumber}</small>
            )}
          </div>
        </div>

        {/* Course Dropdown */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="course" className="form-label text-primary">
              Course
            </label>
            <select
              className="form-control"
              id="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Information Technology">Information Technology</option>
            </select>
            {errors.course && <small className="text-danger">{errors.course}</small>}
          </div>

          <div className="col-md-6">
            <label htmlFor="purpose" className="form-label text-primary">
              Purpose of payment
            </label>
            <input
              type="text"
              className="form-control"
              id="purpose"
              value={formData.purpose}
              onChange={handleChange}
            />
            {errors.purpose && (
              <small className="text-danger">{errors.purpose}</small>
            )}
          </div>
        </div>

        {/* Email and Phone */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label text-primary">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label text-primary">
              Phone number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </div>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="form-label text-primary">
            Payment amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
          />
          {errors.amount && <small className="text-danger">{errors.amount}</small>}
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );


}

export default MakePayment;
