import React from 'react';
import './SectionStyles.css';

function HelpSection() {
  return (
    <section className="section-shell">
      <div className="section-hero">
        <h2>Help & Support</h2>
        <p>Get quick answers to common questions about live classes, sessions and course access.</p>
      </div>

      <div className="card-grid">
        <article className="help-card">
          <h3>How do I join a live class?</h3>
          <p>After registration, you will receive an email with the meeting link and joining instructions.</p>
        </article>
        <article className="help-card">
          <h3>Can I attend from mobile?</h3>
          <p>Yes, the classes are accessible via desktop, laptop or mobile browser.</p>
        </article>
        <article className="help-card">
          <h3>Is the class recorded?</h3>
          <p>Recorded sessions are shared with enrolled learners after each live class.</p>
        </article>
      </div>
    </section>
  );
}

export default HelpSection;
