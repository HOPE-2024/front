import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  /* 캘린더 전체 스타일 */
  .react-calendar {
    border: none;
    border-radius: 10px;
    box-shadow: 5px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f1f7ff;
    width: 100%;
    height: 110%;

    /* 캘린더 내의 모든 버튼 스타일 */
    button {
      color: #083d77; /* 버튼 글자색 */
      font-size: 1.3rem; /* 버튼 글자크기 */
    }

    /* 날짜 타일 스타일 */
    .react-calendar__tile {
      width: 50px;
      margin-top: 10px;
      margin-bottom: 10px;
      white-space: nowrap;
    }

    /* 활성 날짜 타일 스타일 */
    .react-calendar__tile--active {
      color: white !important;
      background-color: rgba(0, 0, 0, 0.2) !important;
      border-radius: 10px;
    }

    /* 오늘 날짜 */
    .react-calendar__tile--now {
      background-color: #f1f7ff;
      border: 5px solid rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }

    /* 요일 헤더 */
    .react-calendar__month-view__weekdays {
      color: #083d77;
      font-size: 1.5rem;
      font-weight: bolder;
    }

    /* 저번 달 날짜 */
    .react-calendar__tile--neighboringMonth {
      color: #ccc;
    }

    /* 주말 */
    .react-calendar__month-view__days__day--weekend {
      color: darkred;
    }
  }
`;

export const MyCalendar = ({ setSelectedDate }) => {
  const [value, onChange] = useState(new Date());
  const handleDateChange = (value) => {
    onChange(value);
    setSelectedDate(value);
  };

  // 날짜 타일을 커스터마이징하여 숫자만 표시, n일 → n
  const formatDay = (locale, date) => {
    return date.getDate(); // '1일' 대신 '1'만 반환
  };

  return (
    <CalendarWrapper>
      <Calendar
        onChange={handleDateChange}
        value={value}
        formatDay={formatDay} // formatDay 속성 추가
      />
    </CalendarWrapper>
  );
};
