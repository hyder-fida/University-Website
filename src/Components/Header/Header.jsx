import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logoCapital from '../../utils/images/logoCapital3.png';
import './header.css';
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
  const [showCourses, setShowCourses] = useState(false);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const handleMouseEnterCourses = () => {
    setShowCourses(true);
  };

  const handleMouseLeaveCourses = () => {
    setShowCourses(false);
  };

  const handleMouseEnterLogin = () => {
    setShowLoginOptions(true);
  };

  const handleMouseLeaveLogin = () => {
    setShowLoginOptions(false);
  };

  return (
    <Navbar expand="lg" className="w-100 nav">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <div>
              <img src={logoCapital} alt="iust Logo" width="250px" height="50" className="" />
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
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-end w-100 font">
            <Nav.Link as={Link} to="/" className="text-uppercase">Home</Nav.Link>
            <Nav.Item
              className="text-uppercase"
              onMouseEnter={handleMouseEnterCourses}
              onMouseLeave={handleMouseLeaveCourses}
            >
              <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
              {showCourses && (
                <div className="courses-dropdown">
                  <Card className="course-card">
                    <Card.Body>
                      <Card.Title>Master of Studies (MSt)</Card.Title>
                      <Card.Text>A comprehensive program focusing on interdisciplinary studies.</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="course-card">
                    <Card.Body>
                      <Card.Title>Master of Science (MSc)</Card.Title>
                      <Card.Text>An advanced program with a focus on scientific research and practical applications.</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </Nav.Item>
            <Nav.Link as={Link} to="/about" className="text-uppercase">About</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="text-uppercase">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-uppercase">Contact</Nav.Link>
            <Nav.Link as={Link} to="/notifications" className="text-uppercase">Notifications</Nav.Link>
            <Nav.Item
              className="text-uppercase"
              onMouseEnter={handleMouseEnterLogin}
              onMouseLeave={handleMouseLeaveLogin}
            >
              <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
              {showLoginOptions && (
                <div className="login-dropdown">
                  <Button variant="primary" className="login-btn" >Student</Button>
                  <Button variant="secondary" className="login-btn">Employee</Button>
                </div>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
