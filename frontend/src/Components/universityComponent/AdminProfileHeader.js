import React from "react";
import { useNavigate } from "react-router-dom";

function AdminProfileHeader() {
    const navigate = useNavigate();

    const styles = {
        adminHeader: {
            backgroundColor: "#000000e2",
            color: "white",
            padding: "20px",
        },
        headerContent: {
            textAlign: "center",
            marginBottom: "20px",
        },
        navbar: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f8f9fa",
            padding: "10px 0",
        },
        navList: {
            listStyleType: "none",
            display: "flex",
            padding: 0,
            margin: 0,
        },
        navItem: {
            margin: "0 20px",
            paddingTop: "15px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "5px",
            backgroundColor: "DarkBlue",
            color: "white",
            cursor: "pointer",
            borderRadius: "15px",
            transition: "background-color 0.3s ease",
        },
        navItemHover: {
            backgroundColor: "#0e2cae",
        },
        companyName: {
            marginRight: "auto", 
            fontWeight: "bold",
        },
        logout: {
            marginLeft: "auto", 
            backgroundColor: "#ff4d4d",
        },
        logoutHover: {
            backgroundColor: "#ff1a1a",
            paddingLeft:"auto"
        }
    };

    return (
        <div style={styles.adminHeader}>
            <div style={styles.headerContent}>
                <center><h1>Welcome Admin Dashboard!</h1></center>
            </div>
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    <li style={{ ...styles.navItem, ...styles.companyName }}>
                        <h4>Company <span style={{ color: "#ff0000" }}>Name</span></h4>
                    </li>
                    <li
                        style={styles.navItem}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.navItemHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.navItem.backgroundColor}
                        onClick={() => navigate("/profile")}
                    >
                        Profile
                    </li>
                    <li
                        style={styles.navItem}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.navItemHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.navItem.backgroundColor}
                        onClick={() => navigate("/allUniversities")}
                    >
                        Universities
                    </li>
                    <li
                        style={styles.navItem}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.navItemHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.navItem.backgroundColor}
                        onClick={() => navigate("/allStudentsStd")}
                    >
                        Students
                    </li>
                    <li
                        style={styles.navItem}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.navItemHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.navItem.backgroundColor}
                        onClick={() => navigate("/addworkers")}
                    >
                        Applications
                    </li>
                    <li
                        style={styles.navItem}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.navItemHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.navItem.backgroundColor}
                        onClick={() => navigate("/")}
                    >
                        Home
                    </li>
                    <li
                        style={styles.navItem}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.navItemHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.navItem.backgroundColor}
                        onClick={() => navigate("/questionlist")}
                    >
                        Exams
                    </li>
                    <li
                        style={{ ...styles.navItem, ...styles.logout }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.logoutHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.logout.backgroundColor}
                        onClick={() => navigate("/")}
                    >
                        <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AdminProfileHeader;
