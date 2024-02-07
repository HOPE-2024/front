import { useState, useEffect } from "react";
import styled from "styled-components";

// 스타일드 컴포넌트를 이용해 스케줄러의 기본 스타일을 설정합니다.
const ScheduleCss = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 800px; // 높이 조정 가능
  border: 2px solid red;
`;

export const MyCalendar = () => {
  // 날짜, 시간, 약물 이름, 알람 ID 상태를 관리합니다.
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [drug, setDrug] = useState("");
  const [alarmTimeoutId, setAlarmTimeoutId] = useState(null);

  // 컴포넌트 마운트 시 현재 날짜와 시간을 상태에 설정합니다.
  useEffect(() => {
    const today = new Date();
    const currentDate = today.toISOString().split("T")[0];
    const currentTime = today.toTimeString().split(" ")[0].substring(0, 5);

    setDate(currentDate);
    setTime(currentTime);
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
        // 새 창을 열고, 새 창의 URL로 현재 페이지 URL을 사용합니다.
        const newWindow = window.open(
          window.location.href,
          "newwindow",
          "width=300,height=300"
        );
        // 새 창이 정상적으로 열렸는지 확인합니다.
        if (newWindow) {
          // 새 창에서 할 수 있는 동작을 여기에 추가합니다. 예를 들어, 새 창의 문서 내용을 변경할 수 있습니다.
          // 새 창의 로드가 완료되었을 때 실행할 코드를 여기에 추가합니다.
          newWindow.onload = function () {
            // 새 창에서 알람을 표시합니다. 이는 새 창의 문맥에서 실행됩니다.
            alert("알람이 울립니다! 약물: " + drug);
          };
        } else {
          // 새 창이 차단되었을 경우 사용자에게 알립니다.
          alert("팝업 차단기로 인해 새 창을 열 수 없습니다.");
        }
      }, diff);

      setAlarmTimeoutId(timeoutId);
    }
  };

  // UI 구성 부분
  return (
    <ScheduleCss>
      <div className="time1">
        <div className="time2">
          {date}
          <br />
          {time}
          <br />
          {drug}
          <br />
          <label>알람 날짜를 입력하세요.</label>
          <br />
          <input type="date" value={date} onChange={handleDateChange} />
          <br />
          <label>알람 시간을 입력하세요.</label>
          <br />
          <input type="time" value={time} onChange={handleTimeChange} />
          <br />
          <input
            type="text"
            placeholder="약물 이름 입력"
            value={drug}
            onChange={(e) => {
              setDrug(e.target.value);
            }}
          />
          <br />
          <button onClick={setAlarm}>알람 설정</button>
        </div>
      </div>
    </ScheduleCss>
  );
};
