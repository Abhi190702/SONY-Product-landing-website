'use client';

import { useEffect, useState } from 'react';

const links = [
  ['Overview', '#overview'],
  ['Features', '#features'],
  ['Videos', '#videos'],
  ['Engineering', '#engineering'],
  ['Specs', '#specs'],
  ['Buy', '#buy'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? 'scrolled' : ''}`}>
      <a className="nav-brand" href="#top" aria-label="WH-1000XM6 home">
        WH-1000XM6
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {links.map(([link, href], index) => (
          <a key={link} className={index === 0 ? 'active' : ''} href={href}>
            {link}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#buy">
        Experience Now
      </a>

      <button className="hamburger" type="button" aria-label="Open navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span />
        <span />
      </button>

      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {links.map(([link, href]) => (
          <a key={link} href={href} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </div>
    </header>
  );
}
