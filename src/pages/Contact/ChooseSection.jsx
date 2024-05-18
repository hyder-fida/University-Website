import React from "react";
import { Card } from "react-bootstrap";
import "./chooseSection.css";

function ChooseSection() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-2">Contact Us</h2>
        <div className="row g-4">
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3"></div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  ADDRESS
                </Card.Title>
                <Card.Text className="text-center">
                  1-University Avenue.Awantipora, Pulwama, Pin -192122 Jammu and
                  Kashmir
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3"></div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  WEBSITE
                </Card.Title>
                <Card.Text className="text-center">
                
                  Website: <a 
                    href="https://www.iust.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="style-none"
                  >
                    iust.ac.in
                  </a> <br />
                  Facebook: <a 
                    href="https://www.facebook.com/iustjk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="style-none"
                  >
                    facebook.com/iustjk
                  </a> <br />
                  Twitter: <a 
                    href="https://twitter.com/iustjk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="style-none"
                  >
                    twitter.com/iustjk
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3"></div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  CONTACT INFO:
                </Card.Title>
                <Card.Text className="text-center">
                  Phone: +91 (01933) 247954 / 247955 <br />
                  Email: <a 
                    href="mailto:info@islamicuniversity.edu.in"
                    className="style-none"
                  >
                    info@islamicuniversity.edu.in
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSection;
