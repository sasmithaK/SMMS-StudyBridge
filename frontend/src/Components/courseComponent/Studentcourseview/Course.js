import React from 'react';

function Course({ course }) {
  return (
    <div>
      <h2>{course.coursetitle}</h2>
      <p>Type: {course.coursetype}</p>
      <p>Faculty: {course.faculty}</p>
    </div>
  );
}

export default Course;