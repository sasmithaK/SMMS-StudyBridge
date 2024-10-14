import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ApplyStudent() {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to retrieve the passed state
  const universityName = location.state?.universityName || ""; // Get the university name from the state
  const universityImage = location.state?.universityImage || ""; // Get the university image from the state

  const handleAddCourse = () => {
    // Navigate to add-course and pass universityName
    navigate("/RegisterStudent", { state: { universityName } });
  };

  return (
    <div>
      {/* Display the university name and image */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <br></br>
        {universityImage && <img src={universityImage} alt={universityName} style={{ width: "750px", height: "500px" }} />}
      </div>
<br/>
      {/* Navigation to Add Course */}
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button 
              className="nav-item nav-link btn btn-link" 
              style={{ color: 'white', textDecoration: 'none', fontSize: '26px', marginLeft:'760px' }}
              onClick={handleAddCourse}
            >
              Apply a University
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ApplyStudent;