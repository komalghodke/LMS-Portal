import React from 'react';
import './SectionStyles.css';

function HomeSection() {
  return (
    <section className="section-shell">
      <div className="hero-banner">
        <div>
          <p className="eyebrow">Live Virtual Class</p>
          <h2>Learn from Anywhere with Expert Mentors</h2>
          <p>Join interactive sessions for MEAN, MERN, Java and GenAI with practical labs, live Q&A and recorded support.</p>
        </div>
      </div>

      <div className="card-grid">
        <article className="info-card">
          <span className="badge">Flexible Learning</span>
          <h3>Learn from anywhere</h3>
          <p>Attend interactive live sessions, download notes and revisit recordings at your convenience.</p>
        </article>
        <article className="info-card">
          <span className="badge">Hands-on Projects</span>
          <h3>Build real solutions</h3>
          <p>Work on practical assignments and capstone projects that mirror industry requirements.</p>
        </article>
        <article className="info-card">
          <span className="badge">Expert Mentorship</span>
          <h3>Get guidance instantly</h3>
          <p>Ask questions during live class, get feedback from mentors and connect with peers.</p>
        </article>
      </div>
    </section>
  );
}

export default HomeSection;
