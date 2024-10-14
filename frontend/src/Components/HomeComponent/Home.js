import React from 'react';
import Navi from '../HomeComponent/Navi'; 
import backgroundVideo from './uas.mp4';

function Home() {
  return (
    <div style={styles.wrapper}>
      {/* Video as a background */}
      <video autoPlay muted loop style={styles.videoBackground}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fixed Navigation bar at the top */}
      <div style={styles.navContainer}>
        <Navi /> {/* Include the Navi component here */}
      </div>

      {/* Content below the video */}
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>Our Vision</h1>
          <p style={styles.text}>
            To create a platform that empowers students to achieve their academic and personal goals.
          </p>
          <h1 style={styles.heading}>Our Mission</h1>
          <p style={styles.text}>
            To provide comprehensive resources and support for student migration and management, ensuring a seamless experience for all.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    height: '100%', // Allow the content to grow beyond the viewport
    overflow: 'hidden', // Prevent overflow from the video
  },
  videoBackground: {
    position: 'absolute', // Changed to absolute to allow the content to scroll
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh', // Keep the video height at 100vh for full screen
    objectFit: 'cover',  // Ensures the video covers the entire background
    zIndex: -1,  // Places the video behind other content
  },
  navContainer: {
    position: 'fixed', // Fix the navigation at the top
    top: 0, // Align to the top of the page
    left: 0,
    right: 0,
    zIndex: 2, // Ensure the navigation is above the video
  },
  content: {
    position: 'relative',
    zIndex: 1, // Ensure the content is above the video
    padding: '20px', // Add padding for content spacing
    color: 'white', // Text color
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Optional: Background for contrast
    paddingTop: '100vh', // Push content below the video
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Start at the top
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
    padding: '20px',
    borderRadius: '10px',
    margin: '20px auto', // Center the text container with margin
    maxWidth: '800px', // Optional: Limit width for better readability
  },
  heading: {
    fontSize: '2em',
    margin: '10px 0',
  },
  text: {
    fontSize: '1.2em',
    margin: '10px 0',
  },
};

export default Home;
