import axios from "axios";
import { FLASK_SERVER } from "../utils/Common";

export const MachineAxiosApi = {
  predictLifeExpect: async (data) => {
    return await axios.post(FLASK_SERVER + "/predict_life_expectancy", data);
  },

  predictDiab: async (data) => {
    return await axios.post(FLASK_SERVER + "/predict_diabetes", data);
  },

  visualizeCountry: async (data) => {
    return await axios.post(FLASK_SERVER + "/visualize_country", data);
  },
};
