import React from 'react';

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map(part => <Part key={part.name} part={part} />)}
  </>
);

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Total number of exercises {total}</p>;
};

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
