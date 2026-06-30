export default function Contact() {
  return (
    <div className="page active">
      <div className="page-hero">
        <div className="breadcrumb">Home / <span>Contact</span></div>
        <h1>Get In <span className="gold">Touch</span></h1>
        <p>Our agents are ready to assist you. Reach out and let's plan your journey together.</p>
      </div>
      <div className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3 style={{ fontFamily: 'Montserrat, serif', fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--navy)' }}>Contact Information</h3>
              <div className="contact-item">
                <div className="contact-item-icon"><svg><use href="#ic-map-pin" /></svg></div>
                <div className="contact-item-text"><h4>Office Address</h4><p>Bujumbura, Burundi<br />Avenue de l'Independance, Centre-ville</p></div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><svg><use href="#ic-phone" /></svg></div>
                <div className="contact-item-text">
                  <h4>Phone / WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/25769696392?text=Hello%20DICA%20Global%20Travels%2C%20I%20would%20like%20more%20information." target="_blank" rel="noopener" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>+257 69 69 63 92</a>
                    <br />Available Mon-Sat, 8am-6pm
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><svg><use href="#ic-mail" /></svg></div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@dicaglobaltravels.com" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>info@dicaglobaltravels.com</a>
                    <br />We reply within 24 hours
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><svg><use href="#ic-clock" /></svg></div>
                <div className="contact-item-text"><h4>Office Hours</h4><p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p></div>
              </div>
            </div>
            <div className="contact-form">
              <h3 style={{ fontFamily: 'Montserrat, serif', fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--navy)' }}>Send Us a Message</h3>
              <div className="form-group"><label>Full Name</label><input type="text" placeholder="Your full name" style={{ width: '100%' }} /></div>
              <div className="form-group"><label>Email Address</label><input type="email" placeholder="your@email.com" style={{ width: '100%' }} /></div>
              <div className="form-group"><label>Phone / WhatsApp</label><input type="tel" placeholder="+257 ..." style={{ width: '100%' }} /></div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select id="contact-service" style={{ width: '100%' }}>
                  <option>Flight Booking</option>
                  <option>Visa Assistance</option>
                  <option>Hotel Booking</option>
                  <option>Study Abroad</option>
                  <option>Jobs in Dubai</option>
                  <option>Car Rental</option>
                  <option>Tourism Package</option>
                  <option>Document Translation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group"><label>Message</label><textarea placeholder="Tell us about your travel plans or questions..." /></div>
              <button className="btn btn-gold btn-large" style={{ width: '100%', marginTop: '1rem' }} data-contact-message="true">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><use href="#ic-send" /></svg>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
