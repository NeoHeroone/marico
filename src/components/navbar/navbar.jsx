import React from 'react';
import logo from '../../assets/CompanyLogo.svg'
import arrow from '../../assets/downArrow.svg'
import './nav.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <img src={logo} alt="Title Image" />
          <ul>
            <li>
              <div className="link-container">
                <a href="#">Use Cases <img src={arrow} alt="Title Image" /></a>
              </div>
            </li>
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
          </ul>
          <div className="btn-content">
            <button className='btn login'>Login</button>
            <button className='btn sign'>Sign Up</button>
          </div>
        </div>
      </nav>

      <nav className='sidebar-nav'>
        <ul class="sidebar">
          <li class="menu-item">
            <span class="icon">
              <i style={{ color: "white" }} class="fa fa-solid fa-house"></i>
            </span>
            <span class="label">Home</span>
          </li>
          <li class="menu-item">
            <span class="icon">
              <i style={{ color: "white" }} class="fa fa-regular fa-address-card"></i>
            </span>
            <span class="label">About</span>
          </li>
          <li class="menu-item">
            <span class="icon">
              <i style={{ color: "white" }} class="fa fa-hand-point-up"></i>
            </span>
            <span class="label">Princing</span>
          </li>
          <li class="menu-item">
            <span class="icon">
              <i style={{ color: "white" }} class="fa fa-blog"></i>
            </span>
            <span class="label">Blog</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
