import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExamView = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const [studentId, setStudentId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5001/api/questions');
      setQuestions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setError('Failed to fetch questions. Please try again later.');
      setLoading(false);
    }
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = async () => {
    try {
      if (!studentId) {
        alert('Please enter a Student ID before submitting.');
        return;
      }
      const response = await axios.post('http://localhost:5001/api/submit', { answers, studentId });
      const { score, totalQuestions, details } = response.data;

      const report = {
        studentId,
        score,
        totalQuestions,
        details
      };

      navigate('/results', { state: { report } });
    } catch (error) {
      console.error('Error submitting exam:', error.response ? error.response.data : error.message);
      alert('Failed to submit exam. Error: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  if (loading) return <div style={styles.loading}>Loading...</div>;
  if (error) return <div style={styles.error}>{error}</div>;

  return (
    <div style={styles.examContainer}>
      <h1 style={styles.title}>Exam</h1>
      <input
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        style={styles.input}
      />
      {questions.map((question) => (
        <div key={question._id} style={styles.questionContainer}>
          <h3 style={styles.questionText}>{question.text}</h3>
          {question.options.map((option, index) => (
            <label key={index} style={styles.optionLabel}>
              <input
                type="radio"
                name={question._id}
                value={option}
                checked={answers[question._id] === option}
                onChange={() => handleAnswerChange(question._id, option)}
                style={styles.radioInput}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} style={styles.submitButton}>Submit Exam</button>
    </div>
  );
};

const styles = {
  examContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  questionContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
  },
  questionText: {
    marginBottom: '10px',
    color: '#444',
  },
  optionLabel: {
    display: 'block',
    margin: '10px 0',
    cursor: 'pointer',
  },
  radioInput: {
    marginRight: '10px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '20px 0',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '20px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

export default ExamView;