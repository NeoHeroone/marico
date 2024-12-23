import React from 'react';
import './head.css'
import dot from '../../assets/dot.svg'

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className='header-title'>
          Own your audience. <br />
          <span>
            So you don't lose them.
          </span>
        </h1>
        <p className="header-desc">
          Turn your audience into email and
          text message subscribers.
        </p>
        <div className="header-btn_content">
          <button>
            Get Started Now
          </button>
          <button>
            View A Demo
          </button>
        </div>
        <div className="header-desc_content">
          <img src={dot} alt="Title Image" />
          <span>
            1000+
          </span>
          <p className="head-desc">
            creators have already started
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
