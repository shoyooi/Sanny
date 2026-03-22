import { useEffect, useState } from 'react';

const links = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = ['hero', 'about', 'projects', 'contact'];
      let current = '';
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">SAN<span>Z</span></a>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={`nav-link ${active === l.href.slice(1) ? 'active' : ''}`}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="nav-cta"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Hire Me
      </button>
    </nav>
  );
}
