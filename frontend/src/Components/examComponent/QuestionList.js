import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../examComponent/api/api";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    setFilteredQuestions(
      questions.filter((question) =>
        question.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, questions]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/questions");
      setQuestions(response.data);
      setFilteredQuestions(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error.response || error);
      setError(
        `Failed to fetch questions. ${
          error.response ? error.response.data.message : error.message
        }`
      );
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        await api.delete(`/api/questions/${id}`);
        fetchQuestions();
      } catch (error) {
        console.error("Error deleting question:", error);
        setError("Failed to delete question. Please try again later.");
      }
    }
  };

  const handleGeneratePaper = () => {
    navigate("/generated-paper", {
      state: { questions: questions.slice(0, 10) },
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "lightblue",
      borderRadius: "15px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    title: {
      color: "#333",
      textAlign: "center",
    },
    searchBar: {
      width: "100%",
      padding: "5px",
      marginBottom: "10px",
      borderRadius: "15px",
      border: "1px solid #ddd",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      marginBottom: "10px",
      padding: "15px",
      backgroundColor: "#f9f9f9",
      borderRadius: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    link: {
      color: "#333",
      textDecoration: "none",
    },
    button: {
      padding: "5px 10px",
      margin: "0 5px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      border: "none",
    },
    updateButton: {
      backgroundColor: "#4CAF50",
      color: "white",
      textDecoration: "none",
    },
    deleteButton: {
      backgroundColor: "#f44336",
      color: "white",
    },
    generateButton: {
      backgroundColor: "#008CBA",
      display: "block",
      color: "white",
      padding: "10px 20px",
      fontSize: "16px",
      margin: "20px auto",
      borderRadius: "20px",
      textAlign: "center",
      border: "none",
    },
    error: {
      color: "red",
      textAlign: "center",
    },
  };

  if (loading) {
    return <div style={styles.container}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={styles.container}>
        <p style={styles.error}>{error}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Question List</h2>
      <input
        type="text"
        placeholder="Search questions..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.searchBar}
      />
      {filteredQuestions.length === 0 ? (
        <p>
          No questions available.{" "}
          {searchTerm
            ? "Try a different search term."
            : "Create some questions to get started!"}
        </p>
      ) : (
        <>
          <ul style={styles.list}>
            {filteredQuestions.map((question) => (
              <li key={question._id} style={styles.listItem}>
                <Link to={`/question/${question._id}`} style={styles.link}>
                  {question.text}
                </Link>
                <div>
                  <Link
                    to={`/update/${question._id}`}
                    style={{ ...styles.button, ...styles.updateButton }}
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(question._id)}
                    style={{ ...styles.button, ...styles.deleteButton }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {questions.length >= 10 && (
            <button onClick={handleGeneratePaper} style={styles.generateButton}>
              Generate Paper
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default QuestionList;
