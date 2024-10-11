import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import uniis from "./uniis.png";

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

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Entry Examination - UAS", 14, 20);

    const tableColumn = ["Question No", "Question Text", "Options"];
    const tableRows = [];

    questions.forEach((question, index) => {
      const optionsText = question.options.join(', ');
      const questionData = [
        index + 1,
        question.text,
        optionsText,
      ];
      tableRows.push(questionData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      theme: 'striped',
    });

    doc.save('ExaminationPaper.pdf');
  };

  const styles = {
    backgroundWrapper: {
      backgroundImage: `url(${uniis})`, // Fixed background
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1, // Send background to the back
    },
    container: {
      maxWidth: '800px',
      height: '80vh',   
      overflowY: 'auto', // Allow vertical scrolling
      margin: '50px auto', // Center the container
      padding: '20px',
      backgroundColor: 'rgba(135, 206, 250, 0.8)', 
      borderRadius: '10px',
      boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
      marginTop:'100px',
    },
    title: {
      color: 'Blue',
      textAlign: 'left',
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '10px',
    },
    questionContainer: {
      marginBottom: '20px',
      padding: '10px',
      backgroundColor: '#f9f9f9',
      borderRadius: '15px',
      textAlign:'left'
    },
    backButton: {
      display: 'block',
      width: '100px',
      padding: '7px',
      backgroundColor: 'white',
      color: 'blue',
      textAlign: 'center',
      textDecoration: 'none',
      borderRadius: '25px',
      margin: '20px auto',
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
    },
    downloadButton: {
      display: 'block',
      width: '150px',
      padding: '10px',
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      textDecoration: 'none',
      borderRadius: '25px',
      border: 'none',
      margin: '20px auto',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.backgroundWrapper}>
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
        <button onClick={downloadPDF} style={styles.downloadButton}><b>Download</b></button>
        <Link to="/QuestionList" style={styles.backButton}><b>Back</b></Link>
      </div>
    </div>
  );
};

export default GeneratedPaper;
