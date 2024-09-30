import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/courses";

const fetchHandler = async () => {
  try {
    const res = await axios.get(URL);
    console.log("API Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

function Maincview() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    setIsLoading(true);
    fetchHandler()
      .then((data) => {
        console.log("Courses data:", JSON.stringify(data.courses, null, 2));
        setCourses(data.courses || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error in useEffect:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter courses based on the search query (course title or faculty)
  const filteredCourses = courses.filter((course) =>
    course.coursetitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.faculty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <div className="container mt-5 text-center">Loading courses...</div>;
  if (error) return <div className="container mt-5 text-center text-danger">Error: {error}</div>;
  if (courses.length === 0) return <div className="container mt-5 text-center">No courses available.</div>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Available Courses</h1>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by course title or faculty"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="row">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => {
            console.log("Individual course:", JSON.stringify(course, null, 2));
            return (
              <div key={course._id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{course.coursetitle}</h5>
                    <p className="card-text"><strong>Faculty:</strong> {course.faculty}</p>
                    <p className="card-text"><strong>Type:</strong> {course.coursetype}</p>
                    <Link
                      to={`/course-view/${course._id}`}
                      className="btn btn-primary mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="container mt-5 text-center">No courses match your search.</div>
        )}
      </div>
    </div>
  );
}

export default Maincview;
