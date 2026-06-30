import { useEffect, useRef, useState } from 'react';
import IconSymbols from './components/IconSymbols.jsx';
import Navbar from './components/Navbar.jsx';
import Notify from './components/Notify.jsx';
import Footer from './components/Footer.jsx';
import WhatsappFloat from './components/WhatsappFloat.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Flights from './pages/Flights.jsx';
import Visa from './pages/Visa.jsx';
import HotelBooking from './pages/HotelBooking.jsx';
import StudyAbroad from './pages/StudyAbroad.jsx';
import Jobs from './pages/Jobs.jsx';
import CarRental from './pages/CarRental.jsx';
import Tourism from './pages/Tourism.jsx';
import Translation from './pages/Translation.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const pages = {
  'home': Home,
  'services': Services,
  'flights': Flights,
  'visa': Visa,
  'hotel-booking': HotelBooking,
  'study-abroad': StudyAbroad,
  'jobs': Jobs,
  'car-rental': CarRental,
  'tourism': Tourism,
  'translation': Translation,
  'about': About,
  'contact': Contact
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [notification, setNotification] = useState('');
  const notifyTimer = useRef(null);

  const showNotify = (message) => {
    setNotification(message);
    window.clearTimeout(notifyTimer.current);
    notifyTimer.current = window.setTimeout(() => setNotification(''), 4000);
  };

  const goToPage = (page) => {
    if (!pages[page]) return;
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sendContactMessage = () => {
    const form = document.querySelector('.contact-form');
    const fields = form ? form.querySelectorAll('input, select, textarea') : [];
    const name = fields[0]?.value.trim() || 'Website visitor';
    const email = fields[1]?.value.trim() || '';
    const phone = fields[2]?.value.trim() || '';
    const service = document.getElementById('contact-service')?.value || 'General inquiry';
    const message = fields[4]?.value.trim() || 'Hello DICA Global Travels, I would like more information.';
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Service: ${service}`,
      '',
      message,
    ].join('\n');
    window.location.href = `mailto:info@dicaglobaltravels.com?subject=${encodeURIComponent(service + ' request')}&body=${encodeURIComponent(body)}`;
    showNotify('Your email app is opening so you can send the message.');
  };

  const handleClick = (event) => {
    const pageTarget = event.target.closest('[data-page]');
    if (pageTarget) {
      event.preventDefault();
      goToPage(pageTarget.dataset.page);
      return;
    }

    const notifyTarget = event.target.closest('[data-notify]');
    if (notifyTarget) {
      event.preventDefault();
      showNotify(notifyTarget.dataset.notify);
      return;
    }

    const contactTarget = event.target.closest('[data-contact-message]');
    if (contactTarget) {
      event.preventDefault();
      sendContactMessage();
    }
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(notifyTimer.current);
    };
  }, []);

  const CurrentPage = pages[currentPage] || Home;

  return (
    <div className={`app${menuOpen ? ' nav-open' : ''}`} onClick={handleClick}>
      <IconSymbols />
      <Notify message={notification} />
      <Navbar currentPage={currentPage} setCurrentPage={goToPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <CurrentPage />
      <WhatsappFloat />
      <Footer />
    </div>
  );
}
