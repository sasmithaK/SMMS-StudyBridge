import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";


// Import your components
import Maincview from "./Components/courseComponent/Studentcourseview/Maincview";
//import Header from "./Components/courseComponent/Nav/Header";
import CourseView from "./Components/courseComponent/Studentcourseview/CourseView";
import Cportfolio from "./Components/courseComponent/Universitycouses/Cportfolio";
import UcourseView from "./Components/courseComponent/Universitycouses/Ucousreview";
import UpdateCourseForm from "./Components/courseComponent/Universitycouses/UpdateCourseForm";
import AddCourseForm from "./Components/courseComponent/Universitycouses/AddCourseForm";
import Home from "./Components/workComponent/Home/Home";
import Register from "./Components/workComponent/Register/Register";
import Update from "./Components/workComponent/Update/Update";
import HomeA from "./Components/HomeComponent/HomeA"; 

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

import ApplyStudents from "./Components/universityComponent/ApplyStudents";
import StudentList from "./Components/universityComponent/StudentList"
import ApplyStudent from "./Components/universityComponent/ApplyStudent";
import RegisterStudent from "./Components/universityComponent/RegisterStudent";

import HelpDesk from "./Components/HelpDesk/HelpDesk";
import RegisterStudentstd from './Components/RegisterStudentstd';
import StdLogin from './Components/StdLogin';
import StdProfile from './Components/StdProfile';
import StdstudentList from "./Components/StdstudentList";


// Financial Components
import FinHeader from './Components/financeComponent/FinHeader';
//import HomeFin from './Components/financeComponent/Home';
import Transactions from './Components/financeComponent/Transactions';
import PaymentPlans from './Components/financeComponent/PaymentPlans';
//import Scholarships from './Components/financeComponent/Scholarships';
import MakePayment from './Components/financeComponent/MakePayment';
//import PaymentOptions from './Components/financeComponent/PaymentOptions';
import AddAccount from './Components/financeComponent/AddAccount';
import GetStarted from './Components/financeComponent/GetStarted';
import PaymentPlanDetails from './Components/financeComponent/PaymentPlanDetails';
import Monthly from './Components/financeComponent/PaymentProceses/Monthly';


// Importing the Navbar for Exam routes
import Navbar from "./Components/examComponent/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeA/>}/>
        <Route path="/course-page" element={<Maincview />} />
        <Route path="/course-view/:id" element={<CourseView />} />
        {/* <Header /> */}


        {/* Course Routes */}
        <Route path="/course-page" element={<Maincview />} />
        <Route path="/course-view/:id" element={<CourseView />} />
        <Route path="/university-portfolio/:universityId" element={<Cportfolio />} />
        <Route path="university-course/:id/:universityId" element={<UcourseView />} />
        <Route path="course-update/:id/:universityId" element={<UpdateCourseForm />} />
        <Route path="add-course" element={<AddCourseForm />} />

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
        <Route path="/applystudents" element={<ApplyStudents />} />
        <Route path="/studentlist/:id" element={<StudentList />} />
        <Route path="/applyStudent/:id" element={<ApplyStudent />} />
        <Route path="/registerstudent" element={<RegisterStudent />} />
        {/* Visa Routes */}
        <Route path="/visa" element={<Visa />} />
        <Route path="/mainhome" element={<Home />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/docupload" element={<DocumentUpload />} />
        <Route path="/userdetails/:id" element={<UpdateUser />} />
        <Route path="/Tracking" element={<ProcessTracking />} />
        <Route path="/Evisa" element={<EVisa />} />


        {/* Financial Routes */}
        <Route path="/finHeader" element={<FinHeader />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/paymentplandetails" element={<PaymentPlanDetails />} />
        <Route path="/paymentplans" element={<PaymentPlans />} />
        {/* <Route path="/scholarships" element={<Scholarships />} /> */}
        <Route path="/mkpayment" element={<MakePayment />} />
        {/* <Route path="/payment-options" element={<PaymentOptions />} /> */}
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/visaRules" element={<VisaRules />} />


{/*student */}

<Route path ="stdlogin" element={<StdLogin/>}/>
        <Route path ="helpdesk" element={<HelpDesk/>}/>
        <Route path ="myProfile" element={<StdProfile/>}/>
        <Route path="registerStudentstd" element={<RegisterStudentstd/>}/>
        <Route path="allStudentsStd" element ={<StdstudentList/>}/>

      </Routes>
    </>
  );
}

export default App;