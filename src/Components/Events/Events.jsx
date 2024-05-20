import React from "react";
import "./events.css"; // Import your CSS file
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { events } from './eventData';

const Events = () => {
  // Filter upcoming and past events
  // Filter upcoming and past events
  const currentDate = new Date();
  const upcomingEvents = events.filter(event => !event.held && new Date(event.date) > currentDate);
  const pastEvents = events.filter(event => event.held || new Date(event.date) <= currentDate);
  const workershop= events.filter(event => event.held || new Date(event.date) <= currentDate);


// function Events() {
  return (
    <div className="events-container mb-5">
      <h1 className="events-heading text-center p-4 text-danger">
        EVENTS, WORKSHOPS AND SEMINARS
      </h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first"> Events Held >></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Upcoming Events >></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Workshops >></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="four">Seminars >></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="events-list" />
                {pastEvents.map((event, index) => (
                  <div key={index} className="event-item">
                    <p>Date: {event.date}</p>
                    <p>
                      {/* URL:{" "} */}
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="event-link"
                      >
                        {event.url}
                      </a>
                    </p>
                  </div>
                ))}
                ;
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="events-list" />
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="event-item">
                    <p>Date: {event.date}</p>
                    <p>
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="event-link"
                      >
                        {event.url}
                      </a>
                    </p>
                  </div>
                ))}
              </Tab.Pane>


            <Tab.Pane eventKey="third">
                     <div className="events-list"/>
             {workershop.map((event, index) => (
              <div key={index} className="event-item">
                <p>Date: {event.date}</p>
                <p>
                  <a href={event.url} target="_blank" rel="noopener noreferrer" className="event-link">
                    {event.url}
                  </a>
                </p>
              </div>
            ))}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}




export default Events;
