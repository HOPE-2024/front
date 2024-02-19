import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { MyCalendar } from "../../component/event/MyCalendar";
import { Diary } from "../../component/event/Diary";
import { EventForm } from "../../component/event/EventForm";
import { EventEditForm } from "../../component/event/EventEditForm";
import { EventList } from "../../component/event/EventList";
import { Alarm } from "../../component/event/Alarm";

const LayoutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; // 컴포넌트 간의 간격
  padding: 20px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; // 좌우 컬럼이 동일한 비율을 유지하도록 설정
  gap: 20px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;

export const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await axios.get("http://localhost:8111/event");
    setEvents(
      response.data.map((event) => ({
        ...event,
        date: new Date(event.date).toLocaleDateString(), // 날짜 형식 변환
      }))
    );
  };

  const addEvent = async (event) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    await axios.post("http://localhost:8111/event", {
      ...event,
      date: formattedDate,
    });
    fetchEvents();
  };

  const updateEvent = async (updatedEvent) => {
    await axios.put(
      `http://localhost:8111/event/${updatedEvent.id}`,
      updatedEvent
    );
    fetchEvents();
    setSelectedEvent(null);
  };

  const deleteEvent = async (id) => {
    await axios.delete(`http://localhost:8111/event/${id}`);
    fetchEvents();
  };

  // 선택된 날짜에 해당하는 일정을 필터링
  const selectedDateEvents = events.filter((event) => {
    const eventDate = new Date(event.date).toLocaleDateString();
    return eventDate === selectedDate.toLocaleDateString();
  });

  return (
    <LayoutWrapper>
      <LeftColumn>
        <MyCalendar setSelectedDate={setSelectedDate} />
        <EventList
          events={selectedDateEvents}
          deleteEvent={deleteEvent}
          setSelectedEvent={setSelectedEvent}
        />
      </LeftColumn>
      <RightColumn>
        {selectedEvent ? (
          <EventEditForm event={selectedEvent} updateEvent={updateEvent} />
        ) : (
          <EventForm addEvent={addEvent} />
        )}
        {selectedEvent && <Diary selectedEvent={selectedEvent} />}
        <Alarm />
      </RightColumn>
    </LayoutWrapper>
  );
};
