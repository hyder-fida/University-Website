import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const EmpSec = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    location: "",
    postcode: "",
    message: "",
    idFile: null,
    documentFiles: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "idFile") {
      setFormData({
        ...formData,
        idFile: files[0],
      });
    } else if (name === "documentFiles") {
      setFormData({
        ...formData,
        documentFiles: Array.from(files),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      address,
      location,
      postcode,
      idFile,
      documentFiles,
    } = formData;

    // Check if all required fields are filled
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      address.trim() !== "" &&
      location.trim() !== "" &&
      postcode.trim() !== "" &&
      idFile &&
      documentFiles.length > 0
    ) {
      alert("Submitted Successfully!!");
      console.log(formData);

      // Further processing of formData and file uploads can be handled here
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <div className="container  p-5">
      <div className="text-center emp p-5">
        <h1 className=" ">Welcome to IUST</h1>
        <h2 className="">Grab your opportunity to serve at IUST</h2>
        <h3 className="">Please enter your correct details here </h3>
      </div>
      <div className="container my-5 d-flex justify-content-center">
        <Form id="contact-form" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </Form.Group>
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
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Location</option>
                  <option value="Srinagar">Srinagar</option>
                  <option value="Budgam">Budgam</option>
                  <option value="Anantnag">Anantnag</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group>
                <Form.Label>Postcode</Form.Label>
                <Form.Control
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="Enter Postcode"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>ID (JPEG)</Form.Label>
            <Form.Control
              type="file"
              name="idFile"
              accept=".jpg,.jpeg"
              onChange={handleFileChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Documents (PDF)</Form.Label>
            <Form.Control
              type="file"
              name="documentFiles"
              accept=".pdf"
              multiple
              onChange={handleFileChange}
              required
            />
          </Form.Group>

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
    </div>
  );
};

export default EmpSec;
