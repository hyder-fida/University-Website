import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logoCapital from '../../utils/images/logoCapital3.png';
import './header.css';

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className=" w-100  nav">
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
            <Nav.Link as={Link} to="/" className="text-uppercase custom-nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/courses" className="text-uppercase custom-nav-link">Courses</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-uppercase custom-nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="text-uppercase custom-nav-link">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-uppercase custom-nav-link">Contact</Nav.Link>
            <Nav.Link as={Link} to="/notifications" className="text-uppercase custom-nav-link">Notifications</Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-uppercase custom-nav-link">LogIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
