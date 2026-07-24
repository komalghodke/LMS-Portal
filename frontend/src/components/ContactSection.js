import React from 'react';
import './SectionStyles.css';

function ContactSection() {
  return (
    <section className="section-shell">
      <div className="section-hero">
        <h2>Contact Us</h2>
        <p>Reach out for admissions, batch information or technical support.</p>
      </div>

      <div className="contact-card">
        <h3>Get in touch</h3>
        <ul className="contact-list">
          <li><strong>Phone:</strong> <a href="tel:42234242423">42234242423</a></li>
          <li><strong>Email:</strong> <a href="mailto:info@lmsportal.com">info@lmsportal.com</a></li>
          <li><strong>Location:</strong> Pune, India</li>
        </ul>
      </div>
    </section>
  );
}

export default ContactSection;
