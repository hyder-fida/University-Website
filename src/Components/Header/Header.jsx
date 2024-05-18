import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import iustLogo from '../../utils/images/logo41.png';
import './header.css';
const Header = () => {
  return (
    <Navbar expand="lg" className=" w-100  nav">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <div>
              <img src={iustLogo} alt="iust Logo" width="50px" height="50" className="" />
            </div>
            {/* <span className="mx-2 text-light lh-1 fw-semibold">
              Islamic
              <br></br>
              University
              <br></br>
              Of Science
              <br></br>
              And Technology
              <br></br>
            </span> */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-end w-100 font">
            <Nav.Link as={Link} to="/" className="text-uppercase">Home</Nav.Link>
            <Nav.Link as={Link} to="/courses" className="text-uppercase">Courses</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-uppercase">About</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="text-uppercase">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-uppercase">Contact</Nav.Link>
            <Nav.Link as={Link} to="/notifications" className="text-uppercase">Notifications</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
