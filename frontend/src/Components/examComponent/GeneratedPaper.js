import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const GeneratedPaper = () => {
  const location = useLocation();
  const questions = location.state?.questions || [];
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: 'skyblue',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    title: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'Blue',
      borderRadius: '20px',
      padding: '10px',
    },
    questionContainer: {
      marginBottom: '20px',
      padding: '10px',
      backgroundColor: '#f9f9f9',
      borderRadius: '15px'
    },
    backButton: {
      display: 'block',
      width: '100px',
      padding: '10px',
      backgroundColor: 'white',
      color: 'blue',
      textAlign: 'center',
      textDecoration: 'none',
      borderRadius: '25px',
      margin: '20px auto'
    },
    radioGroup: {
      listStyle: 'none',
      padding: 0,
    },
    radioItem: {
      marginBottom: '10px',
    },
    radioLabel: {
      marginLeft: '10px',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Entry Examination - UAS</h2>
      {questions.map((question, index) => (
        <div key={question._id} style={styles.questionContainer}>
          <h3>Question {index + 1}</h3>
          <p>{question.text}</p>
          {question.type === 'Multiple Choice' && (
            <ul style={styles.radioGroup}>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex} style={styles.radioItem}>
                  <input
                    type="radio"
                    id={`${question._id}-${optionIndex}`}
                    name={`question-${question._id}`}
                    value={option}
                    checked={selectedAnswers[question._id] === option}
                    onChange={() => handleAnswerChange(question._id, option)}
                  />
                  <label htmlFor={`${question._id}-${optionIndex}`} style={styles.radioLabel}>
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <Link to="/" style={styles.backButton}><b>Back to List</b></Link>
    </div>
  );
};

export default GeneratedPaper;