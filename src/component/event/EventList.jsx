import React from "react";
import styled from "styled-components";
import { Title } from "../../css/event/EventCss";

const EventListWrapper = styled.div`
  padding: 20px;
  background-color: #f1f7ff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-bottom: 50px;
  position: relative;
  top: 4.2vh;
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
  overflow: hidden;
  max-width: 30vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 넘친 텍스트를 말줄임표로 표시 */
`;

const EventDescription = styled.p`
  color: #626262;
  max-width: 30vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EventLine = styled.p`
  font-size: 1.5rem;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  margin-right: 10px;
  background-color: #023b96;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3c8dbc;
  }
`;

export const EventList = ({ events, deleteEvent, setSelectedEvent }) => {
  return (
    <EventListWrapper>
      <Title>일정 </Title>
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
        <EventLine>등록된 이벤트가 없습니다.</EventLine>
      )}
    </EventListWrapper>
  );
};
