import React from "react";

// Sample array of events
const events = [
  {
    title: "Event 1",
    date: "2024-05-20",
    url: "https://example.com/event1",
  },
  {
    title: "Event 2",
    date: "2024-05-25",
    url: "https://example.com/event2",
  },
  {
    title: "Event 3",
    date: "2024-06-01",
    url: "https://example.com/event3",
  },
];

const Events = () => {
  return (
    <div className="events-container m-5">
      <h1 className="events-heading text-center">EVENTS, WORKSHOPS, AND SEMINARS</h1>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <h3>{event.title}</h3>
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
  );
};

export default Events;
