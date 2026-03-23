export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-tag">Content Creator &amp; Designer</div>
          <h1 className="hero-title">
            Portfolio<span className="year">2026</span>
          </h1>
          <p className="hero-sub">
            Hi, I&apos;m Sanny Sabio — graphic designer,<br />
            video editor &amp; content creator from Philippines.
          </p>
          <nav className="hero-menu">
            <a href="#about"    className="hero-menu-item">Start</a>
            <a href="#projects" className="hero-menu-item">Projects</a>
            <a href="#contact"  className="hero-menu-item">Contact</a>
          </nav>
        </div>

        <div className="hero-right">
          <div className="hero-img-frame">
            <div className="hero-corner" />
            <div className="hero-corner-tl" />
            <div className="hero-img-inner">
              {/* Replace /portrait-new.jpg with your actual photo */}
              <img src="/portrait-new.jpg?t=20260323-final" alt="Sanny" />
            </div>
            <span className="hero-label">Sanny Sabio · 2026</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
