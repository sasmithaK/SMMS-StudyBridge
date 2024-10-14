import React, { useRef } from 'react';
import Navi from './Navi'; 
import backgroundVideo from './uas.mp4';

function HomeA() {
  // Ref for the mission and vision section to scroll to
  const missionVisionRef = useRef(null);

  const scrollToMissionVision = () => {
    // Scroll smoothly to the mission and vision section
    missionVisionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={styles.wrapper}>
      {/* Video as a background */}
      <video autoPlay muted loop style={styles.videoBackground}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fixed Navigation bar at the top */}
      <div style={styles.navContainer}>
        <Navi />
      </div>

      {/* Button in front of the video */}
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={scrollToMissionVision}>
          Our Perspective
        </button>
      </div>

      {/* Content below the video */}
      <div style={styles.content}>
        {/* Flex container for Vision and Mission */}
        <div style={styles.verticalContainer} ref={missionVisionRef}>
          {/* Vision Section */}
          <div style={styles.textContainer} className="text-container">
            <h1 style={styles.heading}>Our Vision</h1>
            <p style={styles.text}>
              To create a platform that empowers students to achieve their academic and personal goals.
            </p>
          </div>

          {/* Mission Section */}
          <div style={styles.textContainer} className="text-container">
            <h1 style={styles.heading}>Our Mission</h1>
            <p style={styles.text}>
              To provide comprehensive resources and support for student migration and management, ensuring a seamless experience for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
  },
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    zIndex: -1,  // Video is behind everything
  },
  navContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,  // Navigation is above the video
  },
  
  button: {
    padding: '15px 30px',
    fontSize: '1.5em',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Smooth hover effect
  },
  content: {
    position: 'relative',
    zIndex: 1, 
    padding: '20px',
    color: 'white', 
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingTop: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  verticalContainer: {
    display: 'flex',
    flexDirection: 'column', // Stack vertically
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh', // Make it fill the viewport height
    margin: '0 auto',
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '40px',
    borderRadius: '10px',
    margin: '20px 0', // Add spacing between Vision and Mission
    width: '80%', // Make text containers larger
    transition: 'transform 0.3s ease',
  },
  heading: {
    fontSize: '3em', // Increase the heading size
    margin: '10px 0',
  },
  text: {
    fontSize: '1.5em', // Increase the text size
    margin: '10px 0',
  },
};

// Add hover effect for the text containers
const hoverEffect = `
  .text-container:hover {
    transform: scale(1.05);
  }
`;

// Inject hoverEffect CSS into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = hoverEffect;
document.head.appendChild(styleSheet);

export default HomeA;
