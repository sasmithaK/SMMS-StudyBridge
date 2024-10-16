import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../examComponent/api/api";
import uniis from "./uniis.png";

const QuestionForm = () => {
  const [question, setQuestion] = useState({
    topic: "",
    text: "",
    type: "Multiple Choice",
    options: ["", "", "", ""],
    correctAnswer: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [existingTopics, setExistingTopics] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchExistingTopics = useCallback(async () => {
    try {
      const response = await api.get(`/api/questions`);
      const topics = response.data.map((question) => question.topic);
      setExistingTopics(topics);
    } catch (error) {
      console.error("Error fetching existing topics:", error);
      setError("Failed to fetch existing topics. Please try again later.");
    }
  }, []);

  const fetchQuestion = useCallback(async () => {
    if (id) {
      try {
        setLoading(true);
        const response = await api.get(`/api/questions/${id}`);
        setQuestion(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching question:", error);
        setError("Failed to fetch question. Please try again later.");
        setLoading(false);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchExistingTopics();
    fetchQuestion();
  }, [fetchExistingTopics, fetchQuestion]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation for correct answer
    if (!question.options.includes(question.correctAnswer)) {
      setError("Correct answer must be one of the provided options.");
      return; 
    }

    // Validation for unique topic
    if (existingTopics.includes(question.topic)) {
      setError("Topic must be unique. Please choose a different topic.");
      return;
    }

    try {
      setLoading(true);
      if (id) {
        await api.put(`/api/questions/${id}`, question);
      } else {
        await api.post("/api/questions", question);
      }
      navigate("/QuestionList");
    } catch (error) {
      console.error("Error saving question:", error);
      setError("Failed to save question. Please try again later.");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...question.options];
    newOptions[index] = value;
    setQuestion((prev) => ({ ...prev, options: newOptions }));
  };

  const styles = {
    backgroundWrapper: {
      backgroundImage: `url(${uniis})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "20px",
    },
    form: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "30px",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    title: {
      textAlign: "center",
      color: "#333",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "15px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px",
      backgroundColor: "#7c3aed",
      color: "white",
      border: "none",
      borderRadius: "15px",
      cursor: "pointer",
      fontSize: "16px",
      width: "103%",
    },
    error: {
      color: "red",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.backgroundWrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>
          {id ? "Update Question" : "Create New Question"}
        </h2>
        <div style={styles.inputGroup}>
          <label htmlFor="topic" style={styles.label}>
            Topic
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={question.topic}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="text" style={styles.label}>
            Question Text
          </label>
          <textarea
            id="text"
            name="text"
            value={question.text}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="type" style={styles.label}>
            Question Type
          </label>
          <select
            id="type"
            name="type"
            value={question.type}
            onChange={handleChange}
            style={styles.input}
          >
            <option>Multiple Choice</option>
            <option>True/False</option>
          </select>
        </div>
        {question.type === "Multiple Choice" && (
          <div style={styles.inputGroup}>
            <label style={styles.label}>Options</label>
            {question.options.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                style={{ ...styles.input, marginBottom: "5px" }}
                required
              />
            ))}
          </div>
        )}
        <div style={styles.inputGroup}>
          <label htmlFor="correctAnswer" style={styles.label}>
            Correct Answer
          </label>
          <input
            type="text"
            id="correctAnswer"
            name="correctAnswer"
            value={question.correctAnswer}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Saving..." : id ? "Update Question" : "Add Question"}
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default QuestionForm;
