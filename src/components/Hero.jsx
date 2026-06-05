import React from 'react';
import profile from '../assets/myNewImage.jpeg';
import Resume from '../assets/VigneshKumar-MR.pdf';

export default function Hero() {
  return (
    <section id="about" className="section hero">
      {/* ── Text ── */}
      <div className="hero-text">
        <p className="hero-eyebrow">Full-Stack Developer</p>
        <h1 className="hero-name">
          Vignesh<br /><em>Kumar MR</em>
        </h1>
        <p className="hero-role">Building scalable systems, one brushstroke at a time.</p>
        <p className="hero-desc">
          MERN-stack developer specializing in scalable backend architectures,
          real-time systems, Tamil Nadu.
        </p>
        <div className="hero-actions">
          {/* Replace href with Resume import when ready */}
          <a className="btn-primary" href={Resume} target="_blank" rel="noreferrer">
            View Resume
          </a>
          <a className="btn-ghost" href="#contact">Get in Touch</a>
        </div>
      </div>

      {/* ── Visual ── */}
      <div className="hero-visual">
        <div className="hero-ornament" />
        <div className="hero-frame">
          {/* Uncomment below and remove placeholder once you add your photo: */}
              <img src={profile} alt="Vignesh Kumar MR" />
         
          <div className="hero-placeholder">
            <span className="hero-placeholder-icon">✦</span>
            <span className="hero-placeholder-text">Add profile photo</span>
          </div>
          <div className="hero-frame-overlay" />
          <span className="hero-frame-label">Vignesh Kumar MR</span>
        </div>
      </div>
    </section>
  );
}
