import React, { useState } from 'react';

const Navi = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <style>
        {`
          .navi {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            background-color: #333;
            color: white;
          }

          .logo img {
            height: 50px; /* Adjust as needed */
          }

          ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
          }

          li {
            margin: 0 15px;
          }

          a {
            color: white;
            text-decoration: none;
            font-weight: bold;
          }

          a:hover {
            font-weight: bold;
            color: skyblue;
          }

          .dropdown {
            position: relative;
          }

          .dropdown-content {
            display: block;
            position: absolute;
            background-color: #444;
            min-width: 160px;
            z-index: 1;
          }

          .dropdown-content a {
            display: block;
            padding: 10px;
            color: white;
          }

          .dropdown-content a:hover {
            background-color: skyblue;
          }

          .apply-now {
            padding: 10px 20px;
            background-color: skyblue;
            border: none;
            color: darkblue;
            font-weight: bold;
            cursor: pointer;
            border-radius: 35px;
          }

          .apply-now:hover {
            background-color: darkblue;
            color: skyblue;
          }
        `}
      </style>

      <nav className="navi">
        
        <ul>
          <li><a href="/Login">Login</a></li>
          <li><a href="/registerStudentstd">Get Registered</a></li>
          
          {/* Explore section with a dropdown */}
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="/https://www.youtube.com/@uassl" className="dropbtn">Explore</a>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="/unihome">University</a>
                <a href="/course-page">Courses</a>
                <a href="/scholarship">Scholarship</a>
              </div>
            )}
          </li>
          
          <li><a href="/mkpayment">Payment portal</a></li>
          <li><a href="/visa">Visa Center</a></li>
          <li><a href="/helpdesk">HelpDesk</a></li>
        </ul>
        {/* Apply Now Button */}
        <button className="apply-now"><a href="/workregister">Apply Now</a></button>
      </nav>
    </>
  );
};

export default Navi;
