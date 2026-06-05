import React from 'react';

const SKILLS = [
  { name: 'Node.js',     tag: 'Backend',  desc: 'Extensive experience building scalable server-side applications and REST APIs.' },
  { name: 'React.js',    tag: 'Frontend', desc: 'Specialized in creating dynamic, high-performance user interfaces.' },
  { name: 'MongoDB',     tag: 'Database', desc: 'Expert in managing NoSQL databases for data-driven applications.' },
  { name: 'Express.js',  tag: 'Backend',  desc: 'Proficient in developing robust REST APIs and middleware integrations.' },
  { name: 'Electron.js',   tag: 'Desktop Application', desc: 'Solid understanding of electron,js concepts.' },
  { name: 'MySQL',       tag: 'Database', desc: 'Experienced in relational database queries.' },
];

const DELAYS = ['d1','d2','d3','d1','d2','d3'];
console.log("revertt")
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-header reveal">
          <span className="section-num">01 — Skills</span>
          <h2 className="section-title">Technical <em>Expertise</em></h2>
          <div className="section-divider" />
        </div>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div key={s.name} className={`skill-card reveal ${DELAYS[i]}`}>
              <div className="skill-name">{s.name}</div>
              <p className="skill-desc">{s.desc}</p>
              <span className="skill-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
