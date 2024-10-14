import React from "react";
import './Style/issues.css'; 
import AdminProfileHeader from "./AdminProfileHeader";
import backgroundImage from './admin.jpg';

function AdminProfile() {
    
   

    
    return (
        <div style={styles.backgroundWrapper}>
        <div>
            <AdminProfileHeader></AdminProfileHeader>

            
        </div>
        </div>
    );
}
const styles = {
    backgroundWrapper: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      },
}

export default AdminProfile;
