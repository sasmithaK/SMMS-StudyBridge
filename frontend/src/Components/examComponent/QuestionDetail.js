import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../examComponent/api/api";

const QuestionDetail = () => {
  const [question, setQuestion] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchQuestion = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/api/questions/${id}`);
      setQuestion(response.data);
      setEditedQuestion(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching question:", error);
      setError("Failed to fetch question. Please try again later.");
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchQuestion();
  }, [fetchQuestion]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        await api.delete(`/api/questions/${id}`);
        navigate("/");
      } catch (error) {
        console.error("Error deleting question:", error);
        setError("Failed to delete question. Please try again later.");
      }
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedQuestion(question);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...editedQuestion.options];
    newOptions[index] = value;
    setEditedQuestion((prev) => ({ ...prev, options: newOptions }));
  };

  const handleUpdate = async () => {
    try {
      const response = await api.put(`/api/questions/${id}`, editedQuestion);
      setQuestion(response.data);
      setEditMode(false);
      setError(null);
    } catch (error) {
      console.error("Error updating question:", error);
      setError("Failed to update question. Please try again later.");
    }
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    title: {
      color: "#333",
      textAlign: "center",
    },
    label: {
      fontWeight: "bold",
      marginRight: "5px",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px",
      margin: "5px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
    deleteButton: {
      backgroundColor: "#f44336",
      color: "white",
      border: "none",
    },
    editButton: {
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
    },
    saveButton: {
      backgroundColor: "#008CBA",
      color: "white",
      border: "none",
    },
    cancelButton: {
      backgroundColor: "#555555",
      color: "white",
      border: "none",
    },
    error: {
      color: "red",
      textAlign: "center",
    },
  };

  if (loading) return <div style={styles.container}>Loading...</div>;
  if (error)
    return (
      <div style={styles.container}>
        <p style={styles.error}>{error}</p>
      </div>
    );
  if (!question) return <div style={styles.container}>Question not found.</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Question Detail</h2>
      {editMode ? (
        <div>
          <input
            type="text"
            name="text"
            value={editedQuestion.text}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="text"
            name="topic"
            value={editedQuestion.topic}
            onChange={handleInputChange}
            style={styles.input}
          />
          <select
            name="type"
            value={editedQuestion.type}
            onChange={handleInputChange}
            style={styles.input}
          >
            <option value="Multiple Choice">Multiple Choice</option>
            <option value="True/False">True/False</option>
          </select>
          {editedQuestion.type === "Multiple Choice" && (
            <div>
              {editedQuestion.options.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  style={styles.input}
                />
              ))}
            </div>
          )}
          <input
            type="text"
            name="correctAnswer"
            value={editedQuestion.correctAnswer}
            onChange={handleInputChange}
            style={styles.input}
          />
          <button
            onClick={handleUpdate}
            style={{ ...styles.button, ...styles.saveButton }}
          >
            Save
          </button>
          <button
            onClick={handleCancelEdit}
            style={{ ...styles.button, ...styles.cancelButton }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p>{question.text}</p>
          <p>
            <span style={styles.label}>Topic:</span> {question.topic}
          </p>
          <p>
            <span style={styles.label}>Type:</span> {question.type}
          </p>
          {question.type === "Multiple Choice" && (
            <div>
              <span style={styles.label}>Options:</span>
              <ul>
                {question.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          )}
          <p>
            <span style={styles.label}>Correct Answer:</span>{" "}
            {question.correctAnswer}
          </p>
          <button
            onClick={handleEdit}
            style={{ ...styles.button, ...styles.editButton }}
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            style={{ ...styles.button, ...styles.deleteButton }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionDetail;
