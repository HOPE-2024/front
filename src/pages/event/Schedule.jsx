import React, { useState, useEffect } from "react";
import axios from "axios";
import { MyCalendar } from "../../component/event/MyCalendar";
import { Diary } from "../../component/event/Diary";
import { EventForm } from "../../component/event/EventForm";
import { EventEditForm } from "../../component/event/EventEditForm";
import { EventList } from "../../component/event/EventList";
import { Alarm } from "../../component/event/Alarm";

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
    <div>
      <MyCalendar setSelectedDate={setSelectedDate} />
      {selectedEvent ? (
        <EventEditForm event={selectedEvent} updateEvent={updateEvent} />
      ) : (
        <EventForm addEvent={addEvent} />
      )}
      <EventList
        events={selectedDateEvents} // 선택된 날짜에 해당하는 일정만 표시
        deleteEvent={deleteEvent}
        setSelectedEvent={setSelectedEvent}
      />
      {selectedEvent && <Diary selectedEvent={selectedEvent} />}
      {/* 선택된 일정이 있을 때만 Diary 컴포넌트를 표시 */}

      <br />
      <br />
      <br />

      <Alarm></Alarm>
    </div>
  );
};
