import React, { useState } from 'react';
import axios from 'axios';
import './CoursesPage.css';

const initialCourses = [
  {
    id: 1,
    title: 'MEAN Stack Development',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    description: 'Build modern web applications using MongoDB, Express, Angular and Node.js.',
    highlights: ['Full-stack project work', 'REST API development', 'Deployment guidance']
  },
  {
    id: 2,
    title: 'MERN Stack Development',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    description: 'Master React, Node.js, Express and MongoDB for dynamic web applications.',
    highlights: ['React component design', 'State management', 'Live project building']
  },
  {
    id: 3,
    title: 'Java Programming',
    duration: '10 Weeks',
    level: 'Intermediate',
    description: 'Learn core Java, OOP concepts, collections and backend application development.',
    highlights: ['Object-oriented programming', 'Exception handling', 'Spring basics']
  },
  {
    id: 4,
    title: 'GenAI for Developers',
    duration: '8 Weeks',
    level: 'Beginner Friendly',
    description: 'Explore Generative AI tools, prompt engineering and AI-powered application development.',
    highlights: ['Prompt engineering', 'LLM workflows', 'AI integrations']
  }
];

function CoursesPage() {
  const [courses] = useState(initialCourses);
  const [selectedCourse, setSelectedCourse] = useState(initialCourses[0].title);
  const [formData, setFormData] = useState({
    email: '',
    course: initialCourses[0].title,
    location: '',
    designation: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCourseSelection = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setFormData((prev) => ({ ...prev, course: courseTitle }));
    setSubmitted(false);
    setStatusMessage('');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const response = await axios.post('/api/courses/1/enroll', {
        ...formData,
        course: selectedCourse
      });

      if (response.data.success) {
        setSubmitted(true);
        setStatusMessage('Registration saved successfully. Our team will contact you shortly.');
        setFormData({
          email: '',
          course: selectedCourse,
          location: '',
          designation: ''
        });
      } else {
        setSubmitted(false);
        setStatusMessage(response.data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setSubmitted(false);
      setStatusMessage(error.response?.data?.message || 'Unable to connect to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="courses-page">
      <header className="courses-hero">
        <p className="eyebrow">Skill up with industry-ready training</p>
        <h1>All Courses</h1>
        <p className="hero-text">
          Choose from expert-led programs in MEAN, MERN, Java and Generative AI with direct registration support.
        </p>
        <div className="contact-banner">
          <span>Instant support</span>
          <a href="tel:42234242423">Call: 42234242423</a>
        </div>
      </header>

      <div className="courses-list">
        {courses.map((course) => (
          <article key={course.id} className="course-card">
            <div className="course-badge">{course.level}</div>
            <h3>{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <ul className="course-highlights">
              {course.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="course-meta">
              <span>Duration: {course.duration}</span>
            </div>
            <div className="course-actions">
              <button className="enroll-button" onClick={() => handleCourseSelection(course.title)}>
                Register Now
              </button>
              <a className="contact-link" href="tel:42234242423">
                Instant Contact
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="registration-section">
        <h2>Register for {selectedCourse}</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <label>
            Email Address
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </label>

          <label>
            Select Course
            <select name="course" value={formData.course} onChange={handleInputChange}>
              {courses.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
          </label>

          <label>
            Location
            <input type="text" name="location" value={formData.location} onChange={handleInputChange} required />
          </label>

          <label>
            Designation
            <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} required />
          </label>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>

        {statusMessage && (
          <p className={submitted ? 'success-message' : 'error-message'}>{statusMessage}</p>
        )}
      </section>
    </div>
  );
}

export default CoursesPage;
