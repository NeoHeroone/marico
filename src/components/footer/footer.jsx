import React from 'react';
import './footer.css'
import logo from '../../assets/CompanyLogo.svg'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <img src={logo} alt="Title Image" />
            <p className="footer-email">info@marico.co</p>
          </div>
          <ul>
            <li>
              <div className="link-container">
                <a href="#">About</a>
              </div>
            </li>
            <li>
              <div className="link-container">
                <a href="#">Pricing</a>
              </div>
            </li>
            <li>
              <div className="link-container">
                <a href="#">Blog</a>
              </div>
            </li>
            <li>
              <div className="link-container">
                <a href="#">Sign in</a>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
