import React from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const LINKS = [
  {
    icon: <FaLinkedin size={20} />,
    platform: 'LinkedIn',
    value: 'vignesh-kumar-mr',
    href: 'https://www.linkedin.com/in/vignesh-kumar-m-r-73987b259/',
  },
  {
    icon: <FaWhatsapp size={20} />,
    platform: 'WhatsApp',
    value: '+91 90877 91335',
    href: 'https://wa.me/9087791335',
  },
  {
    icon: <FaEnvelope size={20} />,
    platform: 'Email',
    value: 'Send a message',
    href: 'https://mail.google.com/mail/u/0/#inbox?compose=new',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ minHeight: '60vh' }}>
      <div className="section-inner">
        <div className="contact-grid">
          <div className="reveal">
            <div className="section-num" style={{ marginBottom: '1rem' }}>06 — Contact</div>
            <div className="contact-cta">
              Let's build<br /><em>something</em><br />together.
            </div>
          </div>
          <div className="contact-links reveal d2">
            {LINKS.map(l => (
              <a key={l.platform} className="contact-link" href={l.href} target="_blank" rel="noreferrer">
                <span className="contact-link-icon">{l.icon}</span>
                <div>
                  <div className="contact-link-platform">{l.platform}</div>
                  <div className="contact-link-value">{l.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
