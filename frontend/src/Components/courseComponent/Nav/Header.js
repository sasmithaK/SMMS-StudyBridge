import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/home">Home</a>
                <a class="nav-item nav-link" href="/course-page">Courses</a>
                <a class="nav-item nav-link" href="/">Scholarships</a>
                <a class="nav-item nav-link " href="/university-portfolio">University Courses Portfolio</a>
                <a class="nav-item nav-link " href="/add-course">Add a new course</a>
            </div>
        </div>
    </nav>
  );
}

export default Header;