import React, { useState } from 'react';
import './SectionStyles.css';

const courses = [
  {
    id: 1,
    title: 'MEAN Stack Development',
    duration: '12 Weeks',
    description: 'Learn MongoDB, Express, Angular and Node.js for full-stack web development.',
    syllabus: ['MongoDB Basics', 'Express APIs', 'Angular Components', 'Node.js Deployment']
  },
  {
    id: 2,
    title: 'MERN Stack Development',
    duration: '12 Weeks',
    description: 'Master React, Node.js, Express and MongoDB to build modern applications.',
    syllabus: ['React Foundations', 'State Management', 'Express Routing', 'Deployment with Vercel']
  },
  {
    id: 3,
    title: 'Java Programming',
    duration: '10 Weeks',
    description: 'Strengthen core Java concepts and build backend application logic confidently.',
    syllabus: ['Core Java', 'Advanced Java', 'Collections and Streams', 'Spring Boot Basics']
  },
  {
    id: 4,
    title: 'GenAI for Developers',
    duration: '8 Weeks',
    description: 'Explore AI-driven development, prompt engineering and practical GenAI integrations.',
    syllabus: ['Prompt Engineering', 'LLM workflows', 'AI APIs', 'Project Integration']
  }
];

function AllCoursesSection() {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourse = (courseId) => {
    setExpandedCourse((prev) => (prev === courseId ? null : courseId));
  };

  return (
    <section className="section-shell">
      <div className="section-hero">
        <h2>All Courses</h2>
        <p>Choose your learning path and expand any course to view its detailed syllabus.</p>
      </div>

      <div className="accordion-list">
        {courses.map((course) => {
          const isOpen = expandedCourse === course.id;
          return (
            <article key={course.id} className="accordion-item">
              <button className="accordion-trigger" onClick={() => toggleCourse(course.id)}>
                <span>{course.title}</span>
                <span>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="accordion-content">
                  <p>{course.description}</p>
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <ul className="syllabus-list">
                    {course.syllabus.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default AllCoursesSection;
