import React from 'react';
import './SectionStyles.css';

const galleryItems = [
  { title: 'Live Class Setup', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80' },
  { title: 'Student Interaction', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80' },
  { title: 'Project Demo', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80' },
  { title: 'Coding Lab', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80' }
];

function PhotoGallerySection() {
  return (
    <section className="section-shell">
      <div className="section-hero">
        <h2>Photo Gallery</h2>
        <p>Browse highlights from recent sessions, labs and student project showcases.</p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article key={item.title} className="gallery-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PhotoGallerySection;
