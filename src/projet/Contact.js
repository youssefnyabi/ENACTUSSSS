import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Enactus FSBM</h3>
          <p className="footer-text">Entrepreneuriat - Action - US</p>
          <p className="footer-text">Faculté des Sciences Ben M'sik</p>
          <p className="footer-text">Casablanca, Maroc</p>
        </div>

      
        <div className="footer-section">
          <h3 className="footer-heading">Contactez-nous</h3>
          <p className="footer-text">contact@enactus-fsbm.ma</p>
          <p className="footer-text">+212 6 12 34 56 78</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/EnactusMorocco" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/3nac1us.fsbm/?locale=ko" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/enactusfsbm" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© {new Date().getFullYear()} Enactus FSBM. Tous droits réservés.</p>
      </div>
    </footer>
  );
}