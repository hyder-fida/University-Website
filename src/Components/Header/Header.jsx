import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logoCapital from '../../utils/images/logoCapital3.png';
import './Header.css';

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
                      <Card.Title >Master of Studies (MSt)</Card.Title>
                      {/* <Card.Text>A comprehensive program focusing on interdisciplinary studies.</Card.Text> */}
                    </Card.Body>
                  </Card>
                  <Card className="course-card">
                    <Card.Body>
                      <Card.Title>Master of Science (MSc)</Card.Title>
                      {/* <Card.Text>An advanced program with a focus on scientific research and practical applications.</Card.Text> */}
                    </Card.Body>
                  </Card>
                  <Card className="course-card">
                    <Card.Body>
                      <Card.Title>Spiritual Studies</Card.Title>
                      {/* <Card.Text>An advanced program with a focus on scientific research and practical applications.</Card.Text> */}
                    </Card.Body>
                  </Card>
                  <Card className="course-card">
                    <Card.Body>
                      <Card.Title>Economics</Card.Title>
                      {/* <Card.Text>An advanced program with a focus on scientific research and practical applications.</Card.Text> */}
                    </Card.Body>
                  </Card>
                  <var> <Card className="course-card">
                    <Card.Body>
                      <Card.Title>Mathematics</Card.Title>
                      {/* <Card.Text>An advanced program with a focus on scientific research and practical applications.</Card.Text> */}
                    </Card.Body>
                  </Card></var>
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
                  <Button variant="primary" className="login-btn">Student</Button>
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
