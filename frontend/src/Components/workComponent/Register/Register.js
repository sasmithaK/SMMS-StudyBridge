import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Register = () => {
    const navigate=useNavigate();
    const [nic,setnic]=useState();
    const [values,setValues]=useState({
        UserTitle:'Mr',
        UserFirstName:'',
        UserLastName:'',
        UserEmail:'',
        UserMobile:'',
        Birthday:'',
        UserGender:'Male',
        UserSteetAddress:'',
        UserCity:'',
        UserZipcode:'',
        UserNationality:'',
        UserCC:'',
        UserDisablity:'',
        UserCountry:'',
        AgentCode:'',
        AgentName:'',
        AgentEmail:'',
        UserPassword:'',
        NIC:'',
    })

    const handleChanges=(e)=>{
        if(e.target.name==="NIC"){
            // setValues({...values,[e.target.name]:[e.target.files[0]]})
            setnic(e.target.files[0])

        }else{

            setValues({...values,[e.target.name]:[e.target.value]})
        }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("UserTitle",values.UserTitle)
        formData.append("UserFirstName",values.UserFirstName)
        formData.append("UserLastName",values.UserLastName)
        formData.append("UserEmail",values.UserEmail)
        formData.append("UserMobile",values.UserMobile)
        formData.append("Birthday",values.Birthday)
        formData.append("UserGender",values.UserGender)
        formData.append("UserSteetAddress",values.UserSteetAddress)
        formData.append("UserCity",values.UserCity)
        formData.append("UserZipcode",values.UserZipcode)
        formData.append("UserNationality",values.UserNationality)
        formData.append("UserCountry",values.UserCountry)
        formData.append("UserDisablity",values.UserDisablity)
        formData.append("AgentCode",values.AgentCode)
        formData.append("UserCC", values.UserCC);
        formData.append("AgentName",values.AgentName)
        formData.append("AgentEmail",values.AgentEmail)
        formData.append("NIC",nic)
        formData.append("UserPassword",values.UserPassword)
        
        await fetch("http://localhost:5000/auth/add",{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData
        })
        .then((resp)=>resp.json())
        .then((data) => {
            console.log(data);
            if(data.status==='success'){
                Swal.fire({
                    title: "Registered!",
                    text: "You're registered",
                    icon: "success"
                  });
                navigate('/home')
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                  });
            }

          })
          .catch(() => {});

        
    }
    
  return (
    <form className="confirmContainer" onSubmit={handleSubmit}>
      <div className="leftSide">

        <span className="leftTitle">Application Form</span>
        <br></br>
        <span className="sectionTitle">Personal details</span>
        <div className="inputItem">
          <span className="inputBanner">Title</span>
          <select name="UserTitle" id="UserTitle" required onChange={(e)=>handleChanges(e)}>
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
              onChange={(e)=>handleChanges(e)}
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
              onChange={(e)=>handleChanges(e)}
            />
          </div>
        </div>
        <div className="doubleInput">
          <div className="inputItem">
            <span className="inputBanner">Gender</span>
            <select name="UserGender" id="UserGender" required onChange={(e)=>handleChanges(e)}>
              <option  value="Male">Male</option>
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
              name="Birthday"
              onChange={(e)=>handleChanges(e)}
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
              name="UserEmail"
              onChange={(e)=>handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Phone</span>
            <input
              className="inputText"
              type="text"
              placeholder="07xxxx"
              required
              name="UserMobile"
              onChange={(e)=>handleChanges(e)}
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
              name="UserSteetAddress"
              onChange={(e)=>handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">City</span>
            <input
              className="inputText"
              type="text"
              required
              name="UserCity"
              onChange={(e)=>handleChanges(e)}
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
              name="UserZipcode"
              onChange={(e)=>handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Country</span>
            <input
              className="inputText"
              type="text"
              required
              name="UserCountry"
              onChange={(e)=>handleChanges(e)}
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
              name="UserNationality"
              onChange={(e)=>handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Any Criminal convictions</span>
            <select name="UserCC" id="UserCC" onChange={(e)=>handleChanges(e)}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="inputItem">
          <span className="inputBanner">Do you have any disability</span>
          <select name="UserDisablity" id="UserDisablity" onChange={(e)=>handleChanges(e)}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
        </div>
        <br></br>
        <div className="inputItem">
          <span className="inputBanner">Upload your NIC copy</span>
          <input className="inputText" type="file" required name="NIC"
              onChange={(e)=>handleChanges(e)}/>
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
              name="AgentCode"
              onChange={(e)=>handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Agent/Organization Name</span>
            <input
              className="inputText"
              type="text"
              required
              name="AgentName"
              onChange={(e)=>handleChanges(e)}
            />
          </div>
          <div className="inputItem">
            <span className="inputBanner">Agent Email</span>
            <input
              className="inputText"
              type="email"
              required
              name="AgentEmail"
              onChange={(e)=>handleChanges(e)}
            />
          </div>
        </div>

        <div className="confirmButtonPannel">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register