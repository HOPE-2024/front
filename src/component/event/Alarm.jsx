import { useState, useEffect } from "react";
import styled from "styled-components";

const AlarmWrapper = styled.div`
  color: #083d77;
  padding: 20px;
  border-radius: 8px;
  background-color: #ebf2fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Title = styled.h1`
  color: #4f98ca;
  text-align: center;
`;

const CurrentTime = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 10px 0 20px;
`;

const TimeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #a0c4ff;
  &:focus {
    outline: none;
    border-color: #4f98ca;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4f98ca;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3c8dbc;
  }
  display: block;
  width: 100%;
  margin-top: 20px;
`;

export const Alarm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [drug, setDrug] = useState("");
  const [alarmTimeoutId, setAlarmTimeoutId] = useState(null);

  useEffect(() => {
    const today = new Date();
    const currentDate = today.toISOString().split("T")[0];
    const currentTimeFormatted = today
      .toTimeString()
      .split(" ")[0]
      .substring(0, 5);

    setDate(currentDate);
    setTime(currentTimeFormatted);

    const updateClock = () => {
      const now = new Date();
      const newCurrentTime = now.toTimeString().split(" ")[0].substring(0, 8);
      setCurrentTime(newCurrentTime);
    };

    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  useEffect(() => {
    if (date && time && drug) {
      setAlarm();
    }
  }, [date, time, drug]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const setAlarm = () => {
    if (alarmTimeoutId) {
      clearTimeout(alarmTimeoutId);
    }

    const targetDateTime = new Date(date + "T" + time);
    const diff = targetDateTime - new Date();

    if (diff > 0) {
      const timeoutId = setTimeout(() => {
        alert(`알람이 울립니다! 약물: ${drug}`);
      }, diff);

      setAlarmTimeoutId(timeoutId);
    }
  };

  return (
    <AlarmWrapper>
      <Title>약 먹는 시간 알람 기능</Title>
      <CurrentTime>현재 시간: {currentTime}</CurrentTime>
      <TimeSection>
        <Label>알람 날짜를 입력하세요.</Label>
        <Input type="date" value={date} onChange={handleDateChange} />
        <Label>알람 시간을 입력하세요.</Label>
        <Input type="time" value={time} onChange={handleTimeChange} />
        <Label>약물 이름 입력</Label>
        <Input
          type="text"
          placeholder="약물 이름"
          value={drug}
          onChange={(e) => setDrug(e.target.value)}
        />
        <Button onClick={setAlarm}>알람 설정</Button>
      </TimeSection>
    </AlarmWrapper>
  );
};
