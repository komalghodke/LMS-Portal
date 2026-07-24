import React from 'react';
import './SectionStyles.css';

const blogPosts = [
  {
    title: 'How to stay productive in a live coding class',
    summary: 'Practical habits that help you learn faster and retain concepts during virtual sessions.'
  },
  {
    title: 'Why project-based learning matters',
    summary: 'Project work improves confidence and makes your portfolio stronger for interviews.'
  }
];

function BlogSection() {
  return (
    <section className="section-shell">
      <div className="section-hero">
        <h2>Blog</h2>
        <p>Read articles and tips curated for learners joining virtual classes.</p>
      </div>

      <div className="card-grid">
        {blogPosts.map((post) => (
          <article key={post.title} className="article-card">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <button className="secondary-button">Read More</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
