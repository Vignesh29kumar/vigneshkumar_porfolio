import React, { useState } from 'react';

const TABS = [
  {
    id: 'ug', label: 'UG Degree',
    degree: 'Bachelor of Computer Science',
    school: 'Sourashtra College · Madurai',
    meta: [
      { label: 'CGPA',      value: '8.4 / 10' },
      { label: 'Graduated', value: 'July 2022' },
      { label: 'Location',  value: 'Madurai, Tamil Nadu' },
    ],
  },
  {
    id: '12', label: '12th Standard',
    degree: '12th Standard',
    school: 'A.V. Higher Secondary School · Madurai',
    meta: [
      { label: 'Percentage', value: '66%' },
      { label: 'Completed',  value: 'March 2019' },
      { label: 'Location',   value: 'South Chithirai Street, Madurai' },
    ],
  },
  {
    id: '10', label: '10th Standard',
    degree: '10th Standard',
    school: 'A.V. Higher Secondary School · Madurai',
    meta: [
      { label: 'Percentage', value: '84%' },
      { label: 'Completed',  value: 'March 2017' },
      { label: 'Location',   value: 'South Chithirai Street, Madurai' },
    ],
  },
];

export default function Education() {
  const [active, setActive] = useState('ug');
  const tab = TABS.find(t => t.id === active);

  return (
    <section id="education" className="section">
      <div className="section-inner">
        <div className="section-header reveal">
          <span className="section-num">02 — Education</span>
          <h2 className="section-title">Academic <em>Background</em></h2>
          <div className="section-divider" />
        </div>
        <div className="reveal">
          <div className="edu-tabs">
            {TABS.map(t => (
              <button
                key={t.id}
                className={`edu-tab ${active === t.id ? 'active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="edu-panel" key={active}>
            <div className="edu-degree">{tab.degree}</div>
            <div className="edu-school">{tab.school}</div>
            <div className="edu-meta">
              {tab.meta.map(m => (
                <div key={m.label} className="edu-meta-item">
                  <label>{m.label}</label>
                  <span>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
