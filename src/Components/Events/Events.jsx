import React from "react";
import "./events.css"; // Import your CSS file

// Sample array of events
const events = [
  {
    title: "Event 1",
    date: "2024-05-20",
    url: "https://example.com/event1",
    held: false // Indicate if the event is upcoming or past
  },
  {
    title: "Event 2",
    date: "2024-05-25",
    url: "https://example.com/event2",
    held: true
  },
  {
    title: "Event 3",
    date: "2024-06-01",
    url: "https://example.com/event3",
    held: true
  },
];

const Events = () => {
  // Filter upcoming and past events
  const currentDate = new Date();
  const upcomingEvents = events.filter(event => !event.held && new Date(event.date) > currentDate);
  const pastEvents = events.filter(event => event.held || new Date(event.date) <= currentDate);

  return (
    <div className="events-container ">
          <h1 className="events-heading text-center">EVENTS, WORKSHOPS, AND SEMINARS</h1>
      <div className="events-grid">
      
        <div className="left-section">
          <h1 className="events-heading">Held Events</h1>
          <div className="events-list">
            {pastEvents.map((event, index) => (
              <div key={index} className="event-item">
                <h5>{event.title}</h5>
                <p>Date: {event.date}</p>
                <p>
                  URL:{" "}
                  <a href={event.url} target="_blank" rel="noopener noreferrer" className="event-link">
                    {event.url}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="right-section">
          <h1 className="events-heading">Upcoming Events</h1>
          <div className="events-list">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-item">
                 <h5>{event.title}</h5>
                <p>Date: {event.date}</p>
                <p>
                  URL:{" "}
                  <a href={event.url} target="_blank" rel="noopener noreferrer" className="event-link">
                    {event.url}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
