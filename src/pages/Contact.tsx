import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="contact-decoration left-decoration">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop&crop=center" alt="Food decoration" />
        </div>
        <div className="contact-header-content">
          <h1 className="contact-title">CONTACT</h1>
          <h2 className="contact-subtitle">ROTTERDAM KARELDOORMAN</h2>
        </div>
        <div className="contact-decoration right-decoration">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop&crop=center" alt="Food decoration" />
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-container">
          <div className="storefront-section">
            <img
              src="Poke-Bowl-Karel-Doormanstraat-457a-Rotterdam-Horecamakelaardij-Knook-en-Verbaas-8.webp"
              alt="Poké Bowl Original storefront in Rotterdam"
              className="storefront-image"
            />
          </div>

          <div className="contact-info-card">
            <h3 className="card-title">POKÉ BOWL ORIGINAL</h3>

            <div className="address-section">
              <p className="address-line">Karel Doormanstraat 457a</p>
              <p className="address-line">3012 GH Rotterdam</p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">010 - 226 31 48</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@pokebowl.nl" className="contact-text">info@pokebowl.nl</a>
              </div>
            </div>

            <div className="contact-actions">
              <button className="contact-form-btn">Contactformulier</button>
              <div className="social-icons">
                <div className="social-icon phone-icon">📞</div>
                <div className="social-icon email-icon">✉️</div>
              </div>
            </div>

            <div className="opening-hours">
              <div className="hours-row">
                <span className="day">Maandag</span>
                <span className="time">12:00 - 20:00 uur</span>
              </div>
              <div className="hours-row">
                <span className="day">Dinsdag</span>
                <span className="time">12:00 - 20:00 uur</span>
              </div>
              <div className="hours-row">
                <span className="day">Woensdag</span>
                <span className="time">12:00 - 20:00 uur</span>
              </div>
              <div className="hours-row">
                <span className="day">Donderdag</span>
                <span className="time">12:00 - 20:00 uur</span>
              </div>
              <div className="hours-row">
                <span className="day">Vrijdag</span>
                <span className="time">12:00 - 21:00 uur</span>
              </div>
              <div className="hours-row">
                <span className="day">Zaterdag</span>
                <span className="time">12:00 - 20:00 uur</span>
              </div>
              <div className="hours-row">
                <span className="day">Zondag</span>
                <span className="time">12:00 - 20:00 uur</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.690727808474!2d4.473436876919103!3d51.91842138059385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434a08c01e90f%3A0xe97c0f171299a7fd!2sPok%C3%A9%20Bowl%20Original%20Karel%20Doormanstraat!5e1!3m2!1snl!2snl!4v1759761131952!5m2!1snl!2snl"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Poké Bowl Original Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;