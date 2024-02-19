import React from "react";
import styled from "styled-components";

const EventListWrapper = styled.div`
  padding: 20px;
  background-color: #f1f7ff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const EventItem = styled.div`
  background-color: #ebf2fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const EventTitle = styled.h3`
  color: #083d77;
  margin: 0 0 10px;
`;

const EventDescription = styled.p`
  color: #626262;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  background-color: #4f98ca;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3c8dbc;
  }
`;

export const EventList = ({ events, deleteEvent, setSelectedEvent }) => {
  return (
    <EventListWrapper>
      {events.length > 0 ? (
        events.map((event) => (
          <EventItem key={event.id}>
            <EventTitle>{event.title}</EventTitle>
            <EventDescription>{event.description}</EventDescription>
            <Button onClick={() => setSelectedEvent(event)}>수정</Button>
            <Button onClick={() => deleteEvent(event.id)}>삭제</Button>
          </EventItem>
        ))
      ) : (
        <p>등록된 이벤트가 없습니다.</p>
      )}
    </EventListWrapper>
  );
};
