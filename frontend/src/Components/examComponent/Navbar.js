import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "skyblue",
      marginBottom: "20px",
    },
    link: {
      margin: "0 10px",
      textDecoration: "none",
      color: "#333",
      fontWeight: "bold",
      backgroundColor:"white",
      borderRadius:"20px",
      padding:"5px",
      paddingLeft:'15px',
      paddingRight:'15px',
    },
    new: {
      margin: "0 10px",
      textDecoration: "none",
      color: "black",
      fontWeight: "bold",
      backgroundColor:"white",
      borderRadius:"20px",
      padding:"5px",
      paddingLeft:'15px',
      paddingRight:'15px',
    },
  };
  return (
    <nav style={styles.nav}>
      <Link to="/questionlist" style={styles.link}>
        View Questions
      </Link>
      <Link to="/unihome" style={styles.new}>
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
