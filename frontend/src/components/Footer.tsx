<<<<<<< HEAD
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-hero reveal">
          <div className="footer-title">THANK YOU</div>
          <div className="footer-title-over">2<span>0</span>26</div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 <span>Sanny Sabio</span>. All rights reserved.</div>
          <ul className="footer-links">
            {['Top', 'About', 'Projects', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item === 'Top' ? 'hero' : item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
=======
// frontend/src/components/Footer.tsx
// ── Add previous portfolio covers to frontend/public/
//    prev-2023.jpg  and  prev-2024.jpg

const socials = [
  { icon: '◎', platform: 'Instagram', handle: '@sannyx13 ',  href: 'https://instagram.com/sannyx13'  },
  { icon: '♪', platform: 'TikTok',    handle: '@urmrshuzo_',  href: 'https://tiktok.com/@urmrshuzo_'    },
  { icon: 'F', platform: 'Facebook',   handle: 'Sanny Sabio', href: 'https://facebook.com/sannysabio13'  },
];

const prevPortfolios = [
  { year: '2023', image: '/prev-2023.jpg', label: 'PORTOFOLIO.' },
  { year: '2024', image: '/prev-2024.jpg', label: 'DESIGN PORTFOLIO' },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">

      {/* ── CLOSING SECTION ─────────────────────────────────── */}
      <div className="closing-wrap">
        <div className="container">
          <div className="closing-grid">

            {/* Left — avatar + socials */}
            <div className="closing-left reveal">
              <div className="closing-avatar-wrap">
                <img src="/portrait.jpg" alt="Sanz" className="closing-avatar" />
              </div>
              <p className="closing-name">
                SANNY SABIO<br /><span>Content Creator</span>
              </p>
              <div className="closing-socials">
                {socials.map(s => (
                  <a
                    key={s.platform}
                    href={s.href}
                    className="closing-social-row"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="closing-social-icon">{s.icon}</span>
                    <span className="closing-social-handle">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — THANK YOU */}
            <div className="closing-right reveal reveal-delay-2">
              <div className="thankyou-text">
                <span className="thankyou-main">THANK YOU!</span>
                <span className="thankyou-year">FOR INQUIRY</span>
              </div>
              <div className="film-strip">
                {[...Array(8)].map((_, i) => <div key={i} className="film-hole" />)}
              </div>
            </div>
          </div>

          {/* ── Previous portfolios ──────────────────────────── */}
          <div className="prev-portfolios reveal">
            {prevPortfolios.map(p => (
              <div key={p.year} className="prev-card">
                <div className="prev-img-wrap">
                  <img
                    src={p.image}
                    alt={`Portfolio ${p.year}`}
                    className="prev-img"
                    onError={e => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const next = (e.target as HTMLImageElement).nextElementSibling;
                      next?.classList.remove('hidden');
                    }}
                  />
                  <div className="prev-placeholder hidden">
                    <span>{p.label}</span>
                  </div>
                </div>
                <span className="prev-year">{p.year}</span>
              </div>
            ))}

            {/* Decorative cassette */}
            <div className="prev-deco">
              <div className="deco-cassette">
                <div className="cassette-reel" />
                <div className="cassette-reel" />
              </div>
              <div className="deco-filmstrip">
                {[...Array(6)].map((_, i) => <div key={i} className="film-frame" />)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────── */}
      <div className="footer-bar">
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 <span>Sanny Sabio</span>. All rights reserved.</div>
            <ul className="footer-links">
              {['Top', 'About', 'Projects', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item === 'Top' ? 'hero' : item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
>>>>>>> main
        </div>
      </div>
    </footer>
  );
}
