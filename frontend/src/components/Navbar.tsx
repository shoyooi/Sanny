import { useEffect, useState } from 'react';

const links = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <a href="#hero" className="nav-logo">SAN<span>Z</span></a>
      
      {/* Desktop Navigation */}
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <a 
              href={l.href} 
              className={`nav-link ${active === l.href.slice(1) ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(l.href);
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="nav-cta"
        onClick={() => handleNavClick('#contact')}
      >
        Hire Me
      </button>

      {/* Mobile Hamburger Button */}
      <button 
        className={`hamburger ${mobileOpen ? 'active' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className="mobile-menu">
        <ul className="mobile-nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a 
                href={l.href}
                className={`mobile-nav-link ${active === l.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="mobile-nav-cta"
          onClick={() => handleNavClick('#contact')}
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}
