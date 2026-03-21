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
        </div>
      </div>
    </footer>
  );
}
