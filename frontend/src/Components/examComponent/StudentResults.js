import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import the video file
import backgroundVideo from './stud.mp4';

const StudentResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/results');
      setResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching results:', error);
      setError('Failed to fetch results. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading results...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.wrapper}>
      {/* Video as a background */}
      <video autoPlay muted loop style={styles.videoBackground}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={styles.container}>
        <h1 style={styles.title}>Student Exam Results</h1>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Student ID</th>
              <th style={styles.tableHeader}>Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>{result.studentId}</td>
                <td style={styles.tableCell}>{result.score} / {result.totalQuestions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'relative',
    height: '100vh',  // Adjust the height to cover the entire viewport
    overflow: 'hidden',
  },
  videoBackground: {
    position: 'fixed', // Changed to fixed to stay in place during scrolling
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',  // Ensures the video covers the entire background
    zIndex: -1,  // Places the video behind other content
  },
  container: {
    maxWidth: '800px',
    height: '80vh', // Set a height for the container
    overflowY: 'auto', // Allow vertical scrolling
    margin: '50px auto', // Center the container
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'rgba(240, 240, 240, 0.9)',  // Semi-transparent background for readability
    position: 'relative',  // Keeps the content on top of the video
    zIndex: 1,
    borderRadius: '8px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    borderBottom: '2px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left',
  },
};

export default StudentResults;
