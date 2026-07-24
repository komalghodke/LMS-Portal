import React, { useState } from 'react';
import './SectionStyles.css';

function RegistrationSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-shell">
      <div className="section-hero">
        <h2>Registration</h2>
        <p>Reserve your seat in the next cohort and we will contact you with the class schedule.</p>
      </div>

      <div className="form-card">
        <h3>Register for a Course</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" required placeholder="Enter your full name" />
          </label>
          <label>
            Email Address
            <input type="email" required placeholder="you@example.com" />
          </label>
          <label>
            Select Course
            <select defaultValue="MEAN Stack Development">
              <option>MEAN Stack Development</option>
              <option>MERN Stack Development</option>
              <option>Java Programming</option>
              <option>GenAI for Developers</option>
            </select>
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Share your goals or preferred batch"></textarea>
          </label>
          <button className="submit-button" type="submit">Submit Registration</button>
        </form>
        {submitted && <p className="success-message">Thank you! Your registration request has been received.</p>}
      </div>
    </section>
  );
}

export default RegistrationSection;
