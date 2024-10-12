import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// Import your components
import Maincview from "./Components/courseComponent/Studentcourseview/Maincview";
import Header from "./Components/courseComponent/Nav/Header";
import CourseView from "./Components/courseComponent/Studentcourseview/CourseView";
import Cportfolio from "./Components/courseComponent/Universitycouses/Cportfolio";
import UcourseView from "./Components/courseComponent/Universitycouses/Ucousreview";
import UpdateCourseForm from "./Components/courseComponent/Universitycouses/UpdateCourseForm";
import AddCourseForm from "./Components/courseComponent/Universitycouses/AddCourseForm";
import Home from "./Components/workComponent/Home/Home";
import Register from "./Components/workComponent/Register/Register";
import Update from "./Components/workComponent/Update/Update";

import QuestionList from "./Components/examComponent/QuestionList";
import QuestionForm from "./Components/examComponent/QuestionForm";
import QuestionDetail from "./Components/examComponent/QuestionDetail";
import GeneratedPaper from "./Components/examComponent/GeneratedPaper";
import StudentResults from "./Components/examComponent/StudentResults";
import ExamView from "./Components/examComponent/examandResultComponent/ExamView";
import Results from "./Components/examComponent/examandResultComponent/Results";

// Visa Components
import Visa from "./Components/visaComponent/Home/Home";
import UserDetails from "./Components/visaComponent/UserDetails/UserDetails";
import AddUser from "./Components/visaComponent/AddUser/AddUser";
import UpdateUser from "./Components/visaComponent/UpdateUser/UpdateUser";
import DocumentUpload from "./Components/visaComponent/DocumentUpload/DocumentUpload";
import ProcessTracking from "./Components/visaComponent/ProcessTracking/ProcessTracking";
import EVisa from "./Components/visaComponent/EVisa/EVisa";
import ContactUs from "./Components/visaComponent/contactUs/contactUs";
import VisaRules from "./Components/visaComponent/visaRules/visaRules";
import UploadPdf from "./Components/visaComponent/UploadPdf/UploadPdf";

// University Components
import Add from "./Components/universityComponent/Add";
import AdminProfile from "./Components/universityComponent/AdminProfile";
import AllUniversities from "./Components/universityComponent/AllUniversities";
import AllStudents from "./Components/universityComponent/AllStudents";
import Login from "./Components/universityComponent/Login";
import UniversityLogin from "./Components/universityComponent/UniversityLogin";
import UniProfile from "./Components/universityComponent/UniProfile";
import UpdateUniversity from "./Components/universityComponent/UpdateUniversity";
import Menu from "./Components/universityComponent/Menu";

// Importing the Navbar for Exam routes
import Navbar from "./Components/examComponent/Navbar"; // Adjust the path as necessary

function App() {
  return (
    <>
       {/* Display the header on all pages */}
      <Routes>
        {/* Course Routes */}
        <Route path="/course-page" element={<><Header /><Maincview /></>} />
        <Route path="/course-view/:id" element={<><Header /><CourseView /></>} />
        <Route path="/university-portfolio" element={<><Header /><Cportfolio /></>} />
        <Route path="/university-course/:id" element={<><Header /><UcourseView /></>} />
        <Route path="/course-update/:id" element={<><Header /><UpdateCourseForm /></>} />
        <Route path="/add-course" element={<><Header /><AddCourseForm /></>} />

        {/* Work Routes */}
        <Route path="/workregister" element={<Register />} />
        <Route path="/addworkers" element={<Home />} />
        <Route path="/workersupdate" element={<Update />} />
        <Route path="/adduser" element={<AddUser />} />

        {/* Examination Routes */}
        <Route path="/questionlist" element={<><Navbar /><QuestionList /></>} />
        <Route path="/create" element={<><Navbar /><QuestionForm /></>} />
        <Route path="/update/:id" element={<><Navbar /><QuestionForm /></>} />
        <Route path="/question/:id" element={<><Navbar /><QuestionDetail /></>} />
        <Route path="/generated-paper" element={<><Navbar /><GeneratedPaper /></>} />
        <Route path="/student-results" element={<><Navbar /><StudentResults /></>} />
        <Route path="/examview" element={<ExamView />} />
        <Route path="/results" element={<Results />} />

        {/* University Routes */}
        <Route path="/unihome" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
        <Route path="/uniLog" element={<UniversityLogin />} />
        <Route path="/uniProfile" element={<UniProfile />} />
        <Route path="/updateUni/:id" element={<UpdateUniversity />} />
        <Route path="/adminProfile" element={<AdminProfile />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/allUniversities" element={<AllUniversities />} />
        <Route path="/allStudents" element={<AllStudents />} />

        {/* Visa Routes */}
        <Route path="/visa" element={<Visa />} />
        <Route path="/mainhome" element={<Home />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/docupload" element={<DocumentUpload />} />
        <Route path="/userdetails/:id" element={<UpdateUser />} />
        <Route path="/Tracking" element={<ProcessTracking />} />
        <Route path="/Evisa" element={<EVisa />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/visaRules" element={<VisaRules />} />
        <Route path="/uploadPdf" element={<UploadPdf />} />
      </Routes>
    </>
  );
}

export default App;
