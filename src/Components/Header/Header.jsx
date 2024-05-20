import React from 'react';
import './header.css';

const Header = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo"><a href="#">Coding</a></div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <a href="#" className="desktop-item">Dropdown Menu</a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">Dropdown Menu</label>
            <ul className="drop-menu">
              <li><a href="#">Drop menu 1</a></li>
              <li><a href="#">Drop menu 2</a></li>
              <li><a href="#">Drop menu 3</a></li>
              <li><a href="#">Drop menu 4</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="desktop-item">Mega Menu</a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img src="img.jpg" alt="" />
                </div>
                <div className="row">
                  <header>Design Services</header>
                  <ul className="mega-links">
                    <li><a href="#">Graphics</a></li>
                    <li><a href="#">BusinessLards</a></li>
                    <li><a href="#">CustomLogo</a></li>
                  </ul>
                </div>
                <div className="row">
                  <header>Email Services</header>
                  <ul className="mega-links">
                    <li><a href="#">PersonalEmail</a></li>
                    <li><a href="#">BusinessEmail</a></li>
                    <li><a href="#">WebMarketing</a></li>
                  </ul>
                </div>
                <div className="row">
                  <header>Security services</header>
                  <ul className="mega-links">
                    <li><a href="#">Site Seal</a></li>
                    <li><a href="#">PrivacySeal</a></li>
                    <li><a href="#">WebsiteDesign</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><a href="#">Feedback</a></li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
      </div>
    </nav>
  );
}

export default Header;