const columns = [
  ['Product', 'Overview', 'Technology', 'Noise Cancelling', 'Sound Quality', 'Specs'],
  ['Support', 'User Manual', 'Firmware Updates', 'Warranty', 'Contact', 'Find a Store'],
  ['Company', 'About Sony', 'Newsroom', 'Careers', 'Investors', 'Privacy Policy'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>WH-1000XM6</h2>
          <p>Sony Flagship Noise-Cancelling Headphones</p>
          <div className="social-row" aria-label="Social links">
            <a href="https://www.instagram.com/sony/" aria-label="Instagram">IG</a>
            <a href="https://www.youtube.com/user/Sony" aria-label="YouTube">YT</a>
            <a href="https://x.com/Sony" aria-label="X">X</a>
          </div>
        </div>
        {columns.map(([title, ...items]) => (
          <nav className="footer-col" key={title} aria-label={title}>
            <h3>{title}</h3>
            {items.map((item) => (
              <a key={item} href={item === 'Specs' ? '#specs' : '#overview'}>{item}</a>
            ))}
          </nav>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2025 Sony Corporation. All rights reserved.</span>
        <div>
          <a href="#overview">Terms</a>
          <a href="#overview">Privacy</a>
          <a href="#overview">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
