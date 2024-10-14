import React from 'react';
import '../../Components/HomeComp/Home.css';

const HomeMain = () => {
  return (
    <div>
     <div
  style={{
    backgroundImage: "url('uni.jpg')",
    backgroundSize: "cover", // Use 'cover' to ensure the image covers the full area
    backgroundRepeat: "no-repeat",
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    backgroundPosition: "center", // Center the background image
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Center content horizontally and vertically
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
    margin: "0",
  }}
></div>
      <div className="home-container">
        <div className="overlay"></div>
        <div className="home-content">
          <h1>Welcome to UAS!</h1>
          <p>
            Universal Academic Service, established in 2003, is now a leading student placement service center 
            and visa support center for overseas education in the UK, Canada, USA, and Europe. The company is based in Sri Lanka. 
            UAS is more than 15 years old and has assisted thousands of students to study abroad. We are also a leading career 
            guidance center and provide counseling for prospective students to establish their careers overseas.
          </p>
          <p>
            To date, UAS is working with well over 15 higher educational institutions around the world, including in the UK, USA, 
            Canada, Australia, and Europe. Our team has grown rapidly over the years, and now we have well-qualified and experienced 
            counselors, visa consultants, and senior immigration lawyers to assist our prospective clients with their needs. 
            UAS is proud to announce that our student counseling, placement, career advising, and visa guidance services are 
            free of charge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
