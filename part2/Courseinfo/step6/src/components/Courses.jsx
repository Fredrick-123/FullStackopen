/* eslint-disable react/prop-types */
import Header from "./Header";
import Total from "./Total";
import Content from "./Content";

  

  const Course = ({ course }) => (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
  const Courses = ({ courses }) => (
    <div>
      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </div>
  );
  
  export default Courses;