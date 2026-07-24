import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to LMS Portal</h1>
        <p>Your comprehensive Learning Management System</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📚 Course Management</h3>
            <p>Create, manage, and organize courses easily</p>
          </div>
          <div className="feature-card">
            <h3>👥 User Management</h3>
            <p>Manage students, instructors, and administrators</p>
          </div>
          <div className="feature-card">
            <h3>✅ Assignments</h3>
            <p>Create and track student assignments and submissions</p>
          </div>
          <div className="feature-card">
            <h3>📊 Gradebook</h3>
            <p>Comprehensive grading and progress tracking</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
