import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

export const EventAxiosApi = {
  fetchEvents: async () => {
    const response = await Instance.get(Common.KH_DOMAIN + "/event");
    return response.data;
  },

  addEvent: async (event, date) => {
    // 국제 표준 시, 즉 런던 시간을 기준으로 일정이 입력되는 것을 방지
    const offset = date.getTimezoneOffset() * 60000;
    const kstOffset = 9 * 60 * 60000; // KST는 UTC+9
    const kstDate = new Date(date.getTime() - offset + kstOffset);
    const formattedDate = `${kstDate.getFullYear()}-${(kstDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${kstDate.getDate().toString().padStart(2, "0")}`;

    // 이벤트 객체에 날짜를 추가하거나 수정
    const eventWithDate = {
      ...event,
      date: formattedDate,
    };

    return await Instance.post(Common.KH_DOMAIN + "/event/", eventWithDate);
  },

  updateEvent: async (id, updatedEvent) => {
    // 날짜 데이터가 있는지 확인하고, 있으면 형식을 조정
    if (updatedEvent.date) {
      const date = new Date(updatedEvent.date);
      const offset = date.getTimezoneOffset() * 60000;
      const kstOffset = 9 * 60 * 60000; // KST는 UTC+9
      const kstDate = new Date(date.getTime() - offset + kstOffset);
      const formattedDate = `${kstDate.getFullYear()}-${(kstDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${kstDate.getDate().toString().padStart(2, "0")}`;

      // 업데이트할 이벤트 객체에 날짜를 추가하거나 수정
      updatedEvent = {
        ...updatedEvent,
        date: formattedDate,
      };
    }

    return await Instance.put(Common.KH_DOMAIN + `/event/${id}`, updatedEvent);
  },

  deleteEvent: async (id) => {
    return await Instance.delete(Common.KH_DOMAIN + `/event/${id}`);
  },
};
