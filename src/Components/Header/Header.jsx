import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logoCapital3 from "../../utils/images/logoCapital3.png";


const megaMenuSections = [
  {
    header: "Get Started",
    links: ["OVERVIEW", "WHY IUST?", "SCHOLARSHIP", "EDUCATIONAL LOAN"],
  },
  {
    header: "ADMISSIONS",
    links: ["OVERVIEW", "WHY IUST?", "SCHOLARSHIP", "EDUCATIONAL LOAN"],
  },
  {
    header: "RESEARCH",
    links: ["OVERVIEW", "WHY IUST?", "SCHOLARSHIP", "EDUCATIONAL LOAN"],
  },
  {
    header: "ACADEMICS",
    links: [
      "Graphics",
      "Business Cards",
      "Custom Logo",
      "Graphics",
      "Business Cards",
      "Custom Logo",
    ],
  },
  {
    header: "RESIDENTIAL FACILITIES",
    links: ["TRANSPORT FACILITIES", "FLATS", "HOSTEL"],
  },
];

const ourCoursesSections = [
  {git
    header: "Get Started",
    links: ["Introducing our courses"],
  },
  {
    header: "Courses",
    links: ["Master of Studies ","(MSt),Master of Science (MSc)"],
  },
  // {
  //   links: ["Master of Science (MSc)"],
  // },
];

const MegaMenuSection = ({ header, links }) => (
  <div className="row">
    <header>{header}</header>
    <ul className="mega-links">
      {links.map((link, index) => (
        <li key={index}>
          <Link to="#">{link}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo ">
          {/* <Link to="#">
             {logoCapital3}
          </Link> */}
        </div>
        <div className="menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="close-btn" onClick={toggleMenu}>
            <i className="fas fa-times"></i>
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link className="desktop-item">Our Courses</Link>
           
            <div className="mega-box">
              <div className="content">
                {ourCoursesSections.map((section, index) => (
                  <CoursesMenuSection key={index} {...section} />
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="login" className="desktop-item">
              LOGIN
            </Link>
            <ul className="drop-menu">
              <a href="https://studentservice.iust.ac.in/Account/login">
               
                Student
              </a>
              <a href="https://ums.iust.ac.in/login.aspx"> Employee</a>
            </ul>
          </li>
          <li>
            <Link to="#" className="desktop-item">
              Mega Menu
            </Link>
          
          
            <div className="mega-box">
              <div className="content">
                {megaMenuSections.map((section, index) => (
                  <MegaMenuSection key={index} {...section} />
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
