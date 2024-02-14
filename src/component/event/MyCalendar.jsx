import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const MyCalendar = ({ setSelectedDate }) => {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (value) => {
    onChange(value);
    setSelectedDate(value);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={value} />
    </div>
  );
};
