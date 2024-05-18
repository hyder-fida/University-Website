import React, { useState } from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import LondonLocationImg from "../../utils/images/London-location.jpg";
import ManchesterLocationImg from "../../utils/images/Manchester-location.jpg";
import LiverpoolLocationImg from "../../utils/images/Liverpool-location.jpg";
import ChooseSection from "./ChooseSection";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    location: "",
    postcode: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    // Check if all required fields are filled
    const { firstName, lastName, email, address, location, postcode } =
      formData;
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      address.trim() !== "" &&
      location.trim() !== "" &&
      postcode.trim() !== ""
    ) {
      alert("Submitted Successfully!!");
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
     
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Get In Touch</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            pariatur qui quos aspernatur, voluptatem autem possimus esse quo
            consequatur omnis, soluta consectetur ullam ipsum cum!
          </p>
        </div>

      </header>
      <ChooseSection/>


      <div className="container my-5 d-flex justify-content-center">
        <Form id="contact-form" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your Address"
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Location</Form.Label>
              <Form.Select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >
                <option>Srinagar</option>
                <option>Budgam</option>
                <option>Anatnag</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Postcode</Form.Label>
              <Form.Control
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="Enter Postcode"
                required
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="danger btn-lg" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="bg-dark text-light p-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Locations</h2>
          <div className="row g-4">
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={LondonLocationImg} className="img-fluid" alt="" />
              <h3 className="text-center mt-3">Awantipora</h3>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={ManchesterLocationImg} className="img-fluid" alt="" />
              <h3 className="text-center mt-3">Srinagar</h3>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src={LiverpoolLocationImg} className="img-fluid" alt="" />
              <h3 className="text-center mt-3">Budgam</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
