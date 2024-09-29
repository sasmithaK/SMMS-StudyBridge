import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      const response = await axios.get('http://localhost:5001/api/results');
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
    <div style={styles.container}>
      <h1 style={styles.title}>Student Exam Results</h1>
      {results.map((result, index) => (
        <div key={index} style={styles.resultCard}>
          <h2>Student ID: {result.studentId}</h2>
          <p>Score: {result.score} / {result.totalQuestions}</p>
          <h3>Detailed Results:</h3>
          {result.details.map((detail, detailIndex) => (
            <div key={detailIndex} style={styles.questionResult}>
              <p><strong>Question:</strong> {detail.question}</p>
              <p><strong>Student's Answer:</strong> {detail.yourAnswer}</p>
              <p><strong>Correct Answer:</strong> {detail.correctAnswer}</p>
              <p style={{color: detail.isCorrect ? 'green' : 'red'}}>
                {detail.isCorrect ? 'Correct' : 'Incorrect'}
              </p>
            </div>
          ))}
        </div>
      ))}
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
  resultCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
  },
  questionResult: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
};

export default StudentResults;