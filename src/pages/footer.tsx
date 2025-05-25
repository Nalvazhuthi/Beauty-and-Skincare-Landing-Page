import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__info">
          <h2 className="footer__logo">Logo</h2>
          <p className="footer__address">
            <strong>Address:</strong><br />
            USA, California
          </p>
          <p className="footer__contact">
            <strong>Contact:</strong><br />
            <a href="tel:18001234567">1800 123 4567</a><br />
            <a href="mailto:javaria.y2b@gmail.com">javaria.y2b@gmail.com</a>
          </p>
          <div className="footer__socials">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <p>Link One</p>
            <p>Link Two</p>
            <p>Link Three</p>
            <p>Link Four</p>
            <p>Link Five</p>
          </div>
          <div className="footer__column">
            <p>Link Six</p>
            <p>Link Seven</p>
            <p>Link Eight</p>
            <p>Link Nine</p>
            <p>Link Ten</p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2023 Javaria. All rights reserved.</p>
        <div className="footer__policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
