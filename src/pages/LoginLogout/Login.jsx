
const Login = () => {
  return (
    <div className="p-5 text-center bg-body-secondary" style={{ height: '75vh', maxWidth: '60%', margin: '0 auto' }}>
    <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold">
            Islamic University Of Science And Technology
          </h1>
    <div className="mt-4">
    <a href="https://studentservice.iust.ac.in/Account/login" className="mb-2 mx-4">
      <button type="button" className="btn btn-outline-danger btn-lg mb-5 mb-md-4">
        Login as Student
      </button>
    </a>
    <a href="https://ums.iust.ac.in/login.aspx" className="mb-3">
      <button type="button" className="btn btn-outline-danger btn-lg mb-5 mb-md-4">
        Login as Employee
      </button>
    </a>
    </div>
  </div>
  
  
  )
}

export default Login;







































// import React, { useState } from "react";
// import { Container, Form, Button, Col, Row, Modal } from "react-bootstrap";

// const Login = () => {
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Registration Number:", registrationNumber);
//     console.log("Password:", password);
    
//     // Show the modal on successful login
//     setShowModal(true);
//   };

//   const handleClose = () => setShowModal(false);

//   return (
//     <Container className="mt-5 ">
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <h2 className="text-center">Login</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Registration Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Registration"
//                 value={registrationNumber}
//                 onChange={(e) => setRegistrationNumber(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100 mt-3">
//               Submit
//             </Button>
//           </Form>
//         </Col>
//       </Row>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Login Successful</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>You have successfully logged in!</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default Login;
