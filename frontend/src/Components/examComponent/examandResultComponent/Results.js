import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const report = location.state?.report;

  if (!report) {
    return <div>No results available. Please take the exam first.</div>;
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
      <Link to="/" style={styles.backButton}>Back to Exam</Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
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
    display: 'inline-block',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '4px',
    marginTop: '20px',
  },
};

export default Results;