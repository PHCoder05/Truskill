// app/course/page.js

import React from 'react';

const Course = () => {
  // Mock course data
  const courses = [
    { id: 1, title: 'React Basics', description: 'Learn the fundamentals of React.' },
    { id: 2, title: 'Next.js Advanced', description: 'Dive deep into Next.js features.' },
    { id: 3, title: 'JavaScript Essentials', description: 'Master core JavaScript concepts.' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Courses</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {courses.map((course) => (
          <li
            key={course.id}
            style={{
              marginBottom: '20px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ margin: '0 0 10px' }}>{course.title}</h2>
            <p style={{ margin: 0 }}>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
