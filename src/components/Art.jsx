import React from 'react';
// Uncomment these imports once you copy your art images into src/assets/arts/
import gopuram  from '../arts/gopuram.jpg';
import couple   from '../arts/couple.jpg';
import elephant from '../arts/elephant.jpg';
import mom      from '../arts/mom.jpg';
import tree     from '../arts/arttree.jpg';

// Replace `null` with the imported image variables when ready, e.g. gopuram
const ART_PIECES = [
  { src: gopuram, label: 'Gopuram',  icon: '🕌' },
  { src: mom, label: 'Mom',      icon: '👩' },
  { src: tree, label: 'Tree',     icon: '🌳' },
  { src: elephant, label: 'Elephant', icon: '🐘' },
  { src: couple, label: 'Couple',   icon: '💑' },
];

const DELAYS = ['d1', 'd2', 'd3', 'd4', 'd5'];

export default function Art() {
  return (
    <section id="art" className="section">
      <div className="section-inner">
        <div className="section-header reveal">
          <span className="section-num">05 — Hobbies</span>
          <h2 className="section-title">Portrait <em>Art</em></h2>
          <div className="section-divider" />
        </div>
        <p className="art-intro reveal">
          Besides coding, I'm a portrait artist who creates detailed artwork in my free time — intimate human portraits.
        </p>
        <div className="art-grid">
          {ART_PIECES.map((piece, i) => (
            piece.src ? (
              <div key={piece.label} className={`art-card reveal ${DELAYS[i]}`}>
                <img src={piece.src} alt={piece.label} />
                <div className="art-card-overlay" />
                <span className="art-card-label">{piece.label}</span>
              </div>
            ) : (
              <div key={piece.label} className={`art-placeholder-card reveal ${DELAYS[i]}`}>
                <span className="icon">{piece.icon}</span>
                <span className="lbl">{piece.label}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
