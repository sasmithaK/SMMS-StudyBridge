import React from "react";
import './Style/issues.css';
import { useNavigate } from "react-router-dom";


function AdminProfileHeader(){
    const navigate = useNavigate();

    return(
        <div>
            <div style={{justifyContent:"center",alignItems:"center",backgroundColor:"#000000e2",color:"white"}}>
            <center><h1>Welcome Admin Dashboard !</h1></center>
            <br />
            </div>
            <nav className="navbar">
                <ul className="nav-list">
                    <b> <h4 style={{color:"#000000e2"}}>&emsp;<b><u>Company <span style={{color:"hwb(0 100% 0%)"}}>Name</span></u></b></h4></b>
                    <li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"10%"}} onClick={() => navigate("/profile")}>Profile</li>
                    &ensp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"3%"}} onClick={() => navigate("/allUniversities")}>Universities</li>
                    &ensp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"3%"}} onClick={() => navigate("/allStudents")}>Students</li>
                    &ensp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"3%"}}>Application</li>
                    &ensp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"3%"}} onClick={() => navigate("/")}>Home</li>

                    &emsp;<li style={{backgroundColor:"#113fd5",width:"2px",marginLeft:"12%"}} onClick={() => navigate("/")}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</li>
                    
                </ul>
            </nav>
        </div>
    )

}
export default AdminProfileHeader;