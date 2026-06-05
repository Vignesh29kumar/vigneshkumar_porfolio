import React from 'react';

const PROJECTS = [
  {
    num: '001',
    title: 'Car Washing Subscription Platform',
    desc: 'Scalable RESTful APIs with JWT-based auth and role-based access control for Users, Servicemen, Scrappers & Admin. Built automated serviceman assignment, scheduling engine, and integrated Admin Panel with React.js.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'React.js', 'AWS SDK', 'razorpay'],
  },
  // {
  //   num: '002',
  //   title: 'Scrap Marketplace Module',
  //   desc: 'Enabled users to post scrap listings and vendors to place competitive bids. Built dedicated Vendor APIs and Admin Panel APIs for managing users, subscriptions, listings, bidding, and reporting.',
  //   tags: ['Node.js', 'MongoDB', 'Razorpay', 'RevenueCat', 'AWS SDK'],
  // },
  {
    num: '002',
    title: 'Real-Time Chat Platform',
    desc: 'Full-stack platform supporting one-to-one and group messaging via Socket.io. Implemented message persistence, data indexing, image compression (Sharp), push notifications via Nodemailer, and RevenueCat subscription management.',
    tags: ['Socket.io', 'MongoDB', 'Node.js', 'Sharp', 'Nodemailer', 'RevenueCat'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-header reveal">
          <span className="section-num">03 — Projects</span>
          <h2 className="section-title">Selected <em>Work</em></h2>
          <div className="section-divider" />
        </div>
        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <div key={p.num} className={`project-item reveal d${i + 1}`}>
              <span className="project-num">{p.num}</span>
              <div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
