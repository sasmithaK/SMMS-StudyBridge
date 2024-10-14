import React, { useState } from 'react';

const Navigationbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo section */}
      <div className="logo">
        <a href="/">
          <img src="logo.jpg" alt="Logo" />
        </a>
      </div>
      
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/getregister">Get Registered</a></li>
        
        {/* Explore section with a dropdown */}
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="/explore" className="dropbtn">Explore</a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="/university">University</a>
              <a href="/courses">Courses</a>
              <a href="/scholarship">Scholarship</a>
              <a href="/exam">Exam</a>
            </div>
          )}
        </li>
        
        <li><a href="/payment">Payment</a></li>
        <li><a href="/visacenter">Visa Center</a></li>
        <li><a href="/contact">HelpDesk</a></li>
      </ul>
      {/* Apply Now Button */}
      <button className="apply-now">Apply Now</button>
    </nav>
  );
};

export default Navigationbar;
