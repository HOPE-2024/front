import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  .react-calendar {
    border: 1px solid #a0c4ff;
    border-radius: 10px;
    max-width: 90%;
    background-color: #f1f7ff;
    color: #083d77;

    button {
      color: #083d77;
    }

    .react-calendar__tile--active {
      background-color: #4f98ca;
      color: white;
    }
  }
`;

export const MyCalendar = ({ setSelectedDate }) => {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (value) => {
    onChange(value);
    setSelectedDate(value);
  };

  return (
    <CalendarWrapper>
      <Calendar onChange={handleDateChange} value={value} />
    </CalendarWrapper>
  );
};
