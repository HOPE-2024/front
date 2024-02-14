import { useState, useEffect } from "react";

export const Alarm = () => {
  // 날짜, 시간, 약물 이름, 알람 ID, 현재 시간 상태를 관리합니다.
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [currentTime, setCurrentTime] = useState(""); // 실시간 시계를 위한 상태
  const [drug, setDrug] = useState("");
  const [alarmTimeoutId, setAlarmTimeoutId] = useState(null);

  // 컴포넌트 마운트 시 현재 날짜와 시간을 상태에 설정하고, 실시간 시계를 시작합니다.
  useEffect(() => {
    const today = new Date();
    const currentDate = today.toISOString().split("T")[0];
    const currentTimeFormatted = today
      .toTimeString()
      .split(" ")[0]
      .substring(0, 5);

    setDate(currentDate); // 현재 날짜 설정
    setTime(currentTimeFormatted); // 현재 시간 설정

    // 실시간 시계 업데이트 함수
    const updateClock = () => {
      const now = new Date();
      const newCurrentTime = now.toTimeString().split(" ")[0];
      setCurrentTime(newCurrentTime); // 현재 시간(시:분:초) 업데이트
    };

    updateClock(); // 초기 시간 설정
    const clockInterval = setInterval(updateClock, 1000); // 1초마다 시간 업데이트

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(clockInterval);
  }, []);

  // 날짜나 시간이 변경될 때마다 알람을 재설정합니다.
  useEffect(() => {
    if (date && time) {
      setAlarm();
    }
  }, [date, time]);

  // 날짜 변경 핸들러
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // 시간 변경 핸들러
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  // 알람 설정 함수
  const setAlarm = () => {
    // 기존에 설정된 알람이 있다면 취소합니다.
    if (alarmTimeoutId) {
      clearTimeout(alarmTimeoutId);
    }

    // 타겟 날짜와 현재 날짜를 비교하여 알람을 설정합니다.
    const targetDateTime = new Date(date + "T" + time);
    const diff = targetDateTime - new Date();

    // 설정된 시간이 현재 시간보다 이후일 경우 알람을 설정합니다.
    if (diff > 0) {
      const timeoutId = setTimeout(() => {
        alert(`알람이 울립니다! 약물: ${drug}`); // 알람 메시지
      }, diff);

      setAlarmTimeoutId(timeoutId); // 알람 ID 업데이트
    }
  };

  return (
    <>
      <h1>약 먹는 시간 알람 기능</h1>
      <div>현재 시간: {currentTime}</div> {/* 실시간 시계 표시 */}
      <div className="time1">
        <div className="time2">
          <label>알람 날짜를 입력하세요.</label>
          <input type="date" value={date} onChange={handleDateChange} />
          <label>알람 시간을 입력하세요.</label>
          <input type="time" value={time} onChange={handleTimeChange} />
          <input
            type="text"
            placeholder="약물 이름 입력"
            value={drug}
            onChange={(e) => setDrug(e.target.value)}
          />
          <button onClick={setAlarm}>알람 설정</button>
        </div>
      </div>
    </>
  );
};
