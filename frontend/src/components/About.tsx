const skills = ['Photoshop', 'DaVinci Resolve', 'CapCut', 'Figma'];
const langs  = [
  { name: 'Tagalog',   pct: 100 },
  { name: 'English',   pct: 50  },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">01</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-img-wrap reveal">
            {/* Replace /portrait-about.jpg with your actual photo */}
            <img src="/portrait.jpg?v=2" alt="Sanny" className="about-img" />
            <div className="about-img-caption">Sanny Sabio· ID</div>
          </div>

          <div className="about-content">
            <p className="about-intro reveal">
              Hi, I&apos;m Sanny Sabio. I&apos;m back making a portfolio at the end of the year.
              I learned a lot of things from editing — from graphic design, video, typography,
              and others. I learned from 2018 autodidactically, and I have a little editing skill
              that I learned from year to year.
            </p>

            <div className="reveal reveal-delay-1">
              <span className="about-label">Software Skills</span>
              <div className="skills-row">
                {skills.map(s => (
                  <div key={s} className="skill-chip">
                    <div className="skill-dot" />{s}
                  </div>
                ))}
              </div>
            </div>

            <div className="info-grid reveal reveal-delay-2">
              <div className="info-block">
                <div className="info-title">Education</div>
                <div className="info-item">
                  <strong>2023 – 2027</strong>
                  Cor Jesu College, Inc.<br />Bachelor Science in Information Technology
                </div>
              </div>
              <div className="info-block">
                <div className="info-title">Experience</div>
                <div className="info-item">
                  <strong>TikTok Content</strong>
                  Got Followers 20,000+<br />Content football cartoon version
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-3">
              <span className="about-label">Language Proficiency</span>
              <div className="lang-list">
                {langs.map(l => (
                  <div key={l.name} className="lang-row">
                    <span className="lang-name">{l.name}</span>
                    <div className="lang-bar">
                      <div className="lang-fill" style={{ width: `${l.pct}%` }} />
                    </div>
                    <span className="lang-pct">{l.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
