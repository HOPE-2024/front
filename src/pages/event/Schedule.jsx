import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MyCalendar } from "../../component/event/MyCalendar";
import { Diary } from "../../component/event/Diary";
import { EventForm } from "../../component/event/EventForm";
import { EventEditForm } from "../../component/event/EventEditForm";
import { EventList } from "../../component/event/EventList";
import { Alarm } from "../../component/event/Alarm";
import { EventAxiosApi } from "../../api/EventAxiosApi";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LayoutWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  width: 70vw;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5; // 좌우 컬럼이 동일한 비율을 유지하도록 설정
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await EventAxiosApi.fetchEvents();
      setEvents(
        data.map((event) => ({
          ...event,
          date: new Date(event.date).toLocaleDateString(),
        }))
      );
    } catch (e) {
      console.log("일정 호출 오류 발생 : " + e);
    }
  };

  const addEvent = async (event) => {
    await EventAxiosApi.addEvent(event, selectedDate);
    fetchEvents();
  };

  const updateEvent = async (updatedEvent) => {
    try {
      console.log("1 : " + updatedEvent.id);
      console.log("2 : " + JSON.stringify(updatedEvent));
      await EventAxiosApi.updateEvent(updatedEvent.id, updatedEvent);
      fetchEvents();
      setSelectedEvent(null);
      alert("일정이 성공적으로 수정되었습니다.");
    } catch (e) {
      alert("일정 수정 중 오류가 발생했습니다 : " + e);
    }
  };

  const deleteEvent = async (id) => {
    const isConfirmed = window.confirm("선택한 일정을 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        await EventAxiosApi.deleteEvent(id);
        alert("일정이 성공적으로 삭제되었습니다.");
      } catch (e) {
        alert("일정을 삭제하는데 오류가 발생했습니다: " + e);
      }

      fetchEvents();
    } else {
      // 취소
    }
  };

  // 선택된 날짜에 해당하는 일정을 필터링
  const selectedDateEvents = events.filter((event) => {
    const eventDate = new Date(event.date).toLocaleDateString();
    return eventDate === selectedDate.toLocaleDateString();
  });

  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  );
};
