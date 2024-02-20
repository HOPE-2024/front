import { useState, useEffect } from "react";
import styled from "styled-components";
import { Title, Input, Button } from "../../css/event/EventCss";

const AlarmWrapper = styled.div`
  color: #083d77;
  padding: 20px;
  border-radius: 8px;
  background-color: #ebf2fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const CurrentTime = styled.div`
  font-size: 1.4rem;
  margin: 10px 0 20px;
`;

const TimeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.2rem;
`;

const Label = styled.label`
  margin-top: 10px;
  font-weight: bold;
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

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const setAlarm = () => {
    try {
      if (alarmTimeoutId) {
        clearTimeout(alarmTimeoutId);
      }

      const targetDateTime = new Date(date + "T" + time);
      const diff = targetDateTime - new Date();

      const timeoutId = setTimeout(() => {
        // 새 창을 열고 기본 스타일 설정
        const alarmWindow = window.open(
          "",
          "alarmWindow",
          "width=500,height=500"
        );
        alarmWindow.document.write(
          `<html><head><title>알람</title></head><body>`
        );
        alarmWindow.document.write(
          `<style>body { font-family: Arial, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; background-color: #f0f0f0; } .alarm-info { text-align: center; margin: 20px; padding: 20px; border-radius: 10px; background-color: #fff; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }</style>`
        );
        alarmWindow.document.write(`</body></html>`);

        // 알람 정보 추가
        alarmWindow.document.body.innerHTML += `<div class="alarm-info"><h2>알람!</h2><p>날짜: ${date}</p><p>시간: ${time}</p><p>메모: ${drug}</p></div>`;
        // 창을 닫을 수 있는 버튼 추가
        alarmWindow.document.body.innerHTML += `<button onclick="window.close()">닫기</button>`;
      }, diff);

      setAlarmTimeoutId(timeoutId);
      alert(`${date}, ${time}에 알람이 설정되었습니다.`);
    } catch (e) {
      alert("알람을 설정하는데 오류가 발생했습니다 : " + e);
    }
  };

  return (
    <AlarmWrapper>
      <Title>알람</Title>
      <CurrentTime>현재 시간: {currentTime}</CurrentTime>
      <TimeSection>
        <Label>알람 날짜</Label>
        <Input type="date" value={date} onChange={handleDateChange} />
        <Label>알람 시간</Label>
        <Input type="time" value={time} onChange={handleTimeChange} />
        <Label>메모</Label>
        <Input
          type="text"
          placeholder="메모"
          value={drug}
          onChange={(e) => setDrug(e.target.value)}
        />
        <Button onClick={setAlarm}>설정</Button>
      </TimeSection>
    </AlarmWrapper>
  );
};
