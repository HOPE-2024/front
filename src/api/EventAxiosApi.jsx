import { Common } from "../utils/Common";
import { Instance } from "../utils/AxiosInterceptor";

export const eventApi = {
  fetchEvents: async () => {
    return await Instance.get(Common.KH_DOMAIN + "/event");
  },

  addEvent: async (event, date) => {
    // 날짜 변환 로직 포함
    return await Instance.post(Common.KH_DOMAIN + "/event/", event);
  },

  updateEvent: async (id, updatedEvent) => {
    return await Instance.put(Common.KH_DOMAIN + `/event/${id}`, updatedEvent);
  },

  deleteEvent: async (id) => {
    return await Instance.delete(Common.KH_DOMAIN + `/event/${id}`);
  },
};
