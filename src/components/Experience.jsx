import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ minHeight: 'auto', paddingBottom: '2rem' }}>
      <div className="section-inner">
        <div className="section-header reveal">
          <span className="section-num">04 — Experience</span>
          <h2 className="section-title">Professional <em>Journey</em></h2>
          <div className="section-divider" />
        </div>
        <div className="exp-block reveal">
          <div className="exp-title">MERN Stack Developer</div>
          <p className="exp-desc">
            Responsible for designing scalable backend architectures and integrating dynamic frontend
            applications. Worked on subscription-based platforms and real-time communication applications
            with secure authentication and payment integrations. Optimized MongoDB queries, managed
            concurrency, and improved scalability to handle increasing user traffic. Integrated AWS SDK
            for image storage and retrieval, and implemented push notifications for instant communication.
          </p>
        </div>
      </div>
    </section>
  );
}
