import React, { useEffect, useState } from 'react';

const SECTIONS = ['about', 'skills', 'education', 'projects', 'art', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const handler = () => {
      let current = 'about';
      SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-logo">VK</div>
      <ul className="nav-links">
        {SECTIONS.map(id => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
