import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
// Import the background image
import backgroundImage from './back.jpg';

const Results = () => {
  const location = useLocation();
  const report = location.state?.report;

  useEffect(() => {
    // Set the background image for the body
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';

    // Cleanup: remove background image when component unmounts
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);

  if (!report) {
    return <div style={styles.tag}>No results available. Please take the exam first.</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Exam Results</h1>
      <p style={styles.score}>Your Score: {report.score} out of {report.totalQuestions}</p>
      <div style={styles.detailsContainer}>
        {report.details.map((item, index) => (
          <div key={index} style={styles.questionItem}>
            <p><strong>Question:</strong> {item.question}</p>
            <p><strong>Your Answer:</strong> {item.yourAnswer}</p>
            <p><strong>Correct Answer:</strong> {item.correctAnswer}</p>
            <p style={{color: item.isCorrect ? 'green' : 'red'}}>
              {item.isCorrect ? 'Correct' : 'Incorrect'}
            </p>
          </div>
        ))}
      </div>
      <Link to="/examview" style={styles.backButton}>Back to Exam</Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'lightblue', // Optional background color for the results section
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  score: {
    fontSize: '24px',
    textAlign: 'center',
    margin: '20px 0',
  },
  detailsContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '20px',
  },
  questionItem: {
    borderBottom: '1px solid #ddd',
    padding: '15px 0',
  },
  backButton: {
    display: 'block',           
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '4px',
    marginTop: '20px',
    marginLeft: 'auto',         
    marginRight: 'auto',        
    textAlign: 'center',        
    width: 'fit-content',       
  },
  tag:{
    backgroundColor:'white',
    display: 'block', 
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '4px',
    marginTop: '20px',
    marginLeft: 'auto',         
    marginRight: 'auto',        
    textAlign: 'center',        
    width: 'fit-content',   
  },

};

export default Results;
