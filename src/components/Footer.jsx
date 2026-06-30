import { logoWhiteSrc } from '../data/assets.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-grid footer-grid-static">
        <div>
          <img src={logoWhiteSrc} alt="DICA Global Travels Logo" className="footer-logo" />
          <p className="footer-tagline">Your professional gateway to global travel, job opportunities in Dubai, and reliable services — all from Bujumbura, Burundi.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a data-page="flights">Flight Tickets</a>
          <a data-page="visa">Visa Assistance</a>
          <a data-page="hotel-booking">Hotel Booking</a>
          <a data-page="study-abroad">Study Abroad</a>
          <a data-page="jobs">Jobs in Dubai</a>
        </div>
        <div className="footer-col">
          <h4>More</h4>
          <a data-page="car-rental">Car Rental</a>
          <a data-page="tourism">Tourism</a>
          <a data-page="translation">Translation</a>
          <a data-page="about">About Us</a>
          <a data-page="contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© <span id="current-year">{year}</span> DICA Global Travels. All rights reserved.</span>
        <span>Bujumbura, Burundi</span>
      </div>
    </footer>
  );
}
