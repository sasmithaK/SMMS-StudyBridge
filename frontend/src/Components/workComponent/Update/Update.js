import React, { useEffect, useState } from "react";
import "./Update.css";
import {Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export const Update = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const application = location.state;

  const [nic, setnic] = useState();
  const [docUpdated, setDocUpdated] = useState(false);
  const[docURl,setDocURL]=useState(`${application.NIC}`)
  const [values, setValues] = useState({
    UserID: application.UserID,
    UserTitle: application.UserTitle,
    UserFirstName: application.UserFirstName,
    UserLastName: application.UserLastName,
    UserEmail: application.UserEmail,
    UserMobile: application.UserMobile,
    Birthday: application.Birthday,
    UserGender: application.UserGender,
    UserSteetAddress: application.UserAddres[0].UserSteetAddress,
    UserCity: application.UserAddres[0].UserCity,
    UserZipcode: application.UserAddres[0].UserZipcode,
    UserNationality: application.UserNationality,
    UserCC: application.UserCC,
    UserDisablity: application.UserDisablity,
    UserCountry: application.UserCountry,
    AgentName: application.AgentName,
    AgentCode: application.AgentCode,
    AgentEmail: application.AgentEmail,
    UserPassword: "",
    NIC: application.NIC,
  });

  const handleChanges = (e) => {
    if (e.target.name === "NIC") {
      setnic(e.target.files[0]);
    } else {
      setValues({ ...values, [e.target.name]: [e.target.value] });
    }
  };


  const handleClick=()=> {
    // window.location.assign("http://localhost:3000/"+docURl);
    window.open("http://localhost:5000/"+docURl.substring(20), '_blank');
    // console.log("http://localhost:3000/"+docURl.substring(19))
    // window.open(docURl, '_blank');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("UserID", values.UserID);
    formData.append("UserTitle", values.UserTitle);
    formData.append("UserFirstName", values.UserFirstName);
    formData.append("UserLastName", values.UserLastName);
    formData.append("UserEmail", values.UserEmail);
    formData.append("UserMobile", values.UserMobile);
    formData.append("Birthday", values.Birthday);
    formData.append("UserGender", values.UserGender);
    formData.append("UserSteetAddress", values.UserSteetAddress);
    formData.append("UserCity", values.UserCity);
    formData.append("UserZipcode", values.UserZipcode);
    formData.append("UserNationality", values.UserNationality);
    formData.append("UserCountry", values.UserCountry);
    formData.append("UserDisablity", values.UserDisablity);
    formData.append("UserCC", values.UserCC);
    formData.append("AgentName", values.AgentName);
    formData.append("AgentCode", values.AgentCode);
    formData.append("AgentEmail", values.AgentEmail);
    if(docUpdated){
        formData.append("NIC", nic);
    }else{
        console.log(application.NIC)
    formData.append("old_NIC", application.NIC);

    }
    formData.append("isDocUpdated", docUpdated);
    formData.append("UserPassword", values.UserPassword);

    console.log(formData);
    await fetch("http://localhost:5000/auth/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
            Swal.fire({
                title: "Updated!",
                text: "Your application has updated",
                icon: "success"
              });
          navigate("/addworkers");
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
        }

      })
      .catch(() => {});
  };

  useEffect(() => {
    console.log(application);
  }, []);


  return (
    <form className="confirmContainer" onSubmit={handleSubmit}>
      <div className="leftSide">

        <span className="leftTitle">Application Form</span>
        <br></br>
        <span className="sectionTitle">Personal details</span>
        <div className="inputItem">
          <span className="inputBanner">Title</span>
          <select
            name="UserTitle"
            id="UserTitle"
            value={values.UserTitle}
            required
            onChange={(e) => handleChanges(e)}
          >
            <option value="Mr">Mr.</option>
            <option value="Mrs">Mrs.</option>
            <option value="Miss">Miss.</option>
            <option value="Ms">Ms.</option>
            <option value="Mx">Mx.</option>
            <option value="Dr">Dr.</option>
            <option value="Prof">Prof.</option>
            <option value="Eng">Eng.</option>
          </select>
        </div>
        <div className="doubleInput">
          <div className="inputItem">
            <span className="inputBanner">First Name</span>
            <input
              className="inputText"
              type="text"
              name="UserFirstName"
              id="UserFirstName"
              placeholder="John"
              required
              value={values.UserFirstName}
              onChange={(e) => handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Last Name</span>
            <input
              className="inputText"
              type="text"
              name="UserLastName"
              id="UserLastName"
              placeholder="Doe"
              required
              value={values.UserLastName}
              onChange={(e) => handleChanges(e)}
            />
          </div>
        </div>
        <div className="doubleInput">
          <div className="inputItem">
            <span className="inputBanner">Gender</span>
            <select
              name="UserGender"
              id="UserGender"
              value={values.UserGender}
              required
              onChange={(e) => handleChanges(e)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

          </div>
          <div className="inputItem">
            <span className="inputBanner">Date of Birth</span>
            <input
              className="inputText"
              type="date"
              placeholder="thdevSL"
              required
              value={new Date(values.Birthday).toLocaleDateString("sv-SE")}
              name="Birthday"
              onChange={(e) => handleChanges(e)}
            />
          </div>
        </div>
        <span className="sectionTitle">Contact details</span>

        <div className="doubleInput">
          <div className="inputItem">
            <span className="inputBanner">Email</span>
            <input
              className="inputText"
              type="email"
              placeholder="sample@mail.com"
              required
              value={values.UserEmail}
              name="UserEmail"
              onChange={(e) => handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Phone</span>
            <input
              className="inputText"
              type="text"
              placeholder="07xxxx"
              required
              value={values.UserMobile}
              name="UserMobile"
              onChange={(e) => handleChanges(e)}
            />
          </div>
        </div>
        <br></br>
        <span className="sectionTitle">Address details</span>

        <div className="doubleInput">
          <div className="inputItem">
            <span className="inputBanner">Street Address</span>
            <input
              className="inputText"
              type="text"
              required
              value={values.UserSteetAddress}
              name="UserSteetAddress"
              onChange={(e) => handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">City</span>
            <input
              className="inputText"
              type="text"
              required
              value={values.UserCity}
              name="UserCity"
              onChange={(e) => handleChanges(e)}
            />
          </div>
        </div>

        <div className="doubleInput">
          <div className="inputItem">
            <span className="inputBanner">Zipcode</span>
            <input
              className="inputText"
              type="text"
              required
              value={values.UserZipcode}
              name="UserZipcode"
              onChange={(e) => handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Country</span>
            <input
              className="inputText"
              type="text"
              required
              value={values.UserCountry}
              name="UserCountry"
              onChange={(e) => handleChanges(e)}
            />
          </div>
        </div>
        <br></br>

        <span className="sectionTitle">Other details</span>

        <div className="doubleInput">
          <div className="inputItem">
            <span className="inputBanner">Your Nationality</span>
            <input
              className="inputText"
              type="text"
              required
              value={values.UserNationality}
              name="UserNationality"
              onChange={(e) => handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Any Criminal convictions</span>
            <select
              name="UserCC"
              id="UserCC"
              value={values.UserCC}
              onChange={(e) => handleChanges(e)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="inputItem">
          <span className="inputBanner">Do you have any disability</span>
          <select
            name="UserDisablity"
            id="UserDisablity"
            value={values.UserDisablity}
            onChange={(e) => handleChanges(e)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <br></br>
        <div className="inputItem">
          <span className="inputBanner">Upload your NIC copy</span>
          <input
            className="inputText"
            type="file"
            name="NIC"
            onChange={(e) => {
              setDocUpdated(true);
              handleChanges(e);
            }}
          />

          {/* <a href={docURl}>
                              http://localhost:3000/#
          View doc */}
            <button type='button' onClick={(e) => {
              
              handleClick()
              }}>View document</button>
          {/* </a> */}
          
        </div>
      </div>
      <div className="rightSide">
        <span className="rightTitle">Agent Details</span>

        <div className="rightMiddle">
          <div className="inputItem">
            <span className="inputBanner">Agent individual code</span>
            <input
              className="inputText"
              type="text"
              required
              value={values.AgentCode}
              name="AgentCode"
              onChange={(e) => handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Agent/Organization Name</span>
            <input
              className="inputText"
              type="text"
              required
              value={values.AgentName}
              name="AgentName"
              onChange={(e) => handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Agent Email</span>
            <input
              className="inputText"
              type="email"
              required
              value={values.AgentEmail}
              name="AgentEmail"
              onChange={(e) => handleChanges(e)}
            />
          </div>
        </div>

        

        <div className="confirmButtonPannel">
          <button type="submit" className="button">
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default Update;