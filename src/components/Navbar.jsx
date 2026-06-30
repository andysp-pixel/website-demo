import { logoWhiteSrc } from '../data/assets.js';

const navItems = [
  ['home', 'Home'],
  ['services', 'Services'],
  ['flights', 'Flights'],
  ['jobs', 'Jobs Dubai'],
  ['tourism', 'Tourism'],
  ['about', 'About'],
  ['contact', 'Contact'],
];

export default function Navbar({ currentPage, setCurrentPage, menuOpen, setMenuOpen }) {
  const goTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav>
      <button className="nav-brand" type="button" onClick={() => goTo('home')}>
        <img src={logoWhiteSrc} alt="DICA Global Travels Logo" className="brand-logo" />
      </button>
      <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}><span></span></button>
      <div className="nav-links">
        {navItems.map(([page, label]) => (
          <button key={page} type="button" className={currentPage === page ? 'active' : ''} onClick={() => goTo(page)}>{label}</button>
        ))}
      </div>
    </nav>
  );
}
