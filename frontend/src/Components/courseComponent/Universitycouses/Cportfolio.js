import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Cportfolio = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [universityName, setUniversityName] = useState("");
  const { universityId } = useParams();

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        if (!universityId) {
          throw new Error("University ID not found in URL");
        }

        const response = await axios.get(
          `http://localhost:5000/courses/university/${universityId}`
        );
        setCourses(response.data);

        // Fetch university name
        const uniResponse = await axios.get(
          `http://localhost:5000/posts/posts/${universityId}`
        );
        setUniversityName(uniResponse.data.uniName || "University");
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [universityId]);

  if (isLoading)
    return <div className="container mt-5 text-center">Loading courses...</div>;
  if (error)
    return (
      <div className="container mt-5 text-center text-danger">
        Error: {error}
      </div>
    );
  if (courses.length === 0)
    return (
      <div className="container mt-5 text-center">
        No courses available for this university.
      </div>
    );

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">{universityName} Course Portfolio</h1>
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.coursetitle}</h5>
                <p className="card-text">
                  <strong>Faculty:</strong> {course.faculty}
                </p>
                <p className="card-text">
                  <strong>Type:</strong> {course.coursetype}
                </p>
                <p className="card-text">
                  <strong>Duration:</strong> {course.courseduration} years
                </p>
                <Link
                  to={`/university-course/${course._id}/${universityId}`} // Pass universityId in the URL
                  className="btn btn-primary mt-auto"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cportfolio;
