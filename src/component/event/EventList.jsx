import React from "react";

export const EventList = ({ events, deleteEvent, setSelectedEvent }) => {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <button onClick={() => setSelectedEvent(event)}>수정</button>
          <button onClick={() => deleteEvent(event.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};
