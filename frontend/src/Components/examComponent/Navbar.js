import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f0f0f0",
      marginBottom: "20px",
    },
    link: {
      margin: "0 10px",
      textDecoration: "none",
      color: "#333",
      fontWeight: "bold",
    },
    new: {
      margin: "0 10px",
      textDecoration: "none",
      color: "blue",
      fontWeight: "bold",
    },
  };
  return (
    <nav style={styles.nav}>
      <Link to="/questionlist" style={styles.link}>
        View Questions
      </Link>
      <Link to="/questionlist" style={styles.new}>
        Home
      </Link>
      <Link to="/create" style={styles.link}>
        Create Question
      </Link>
      <Link to="/student-results" style={styles.link}>
        Student Results
      </Link>
    </nav>
  );
};

export default Navbar;
