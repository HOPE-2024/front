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

  predictFace: async (data) => {
    return await axios.post(FLASK_SERVER + "/predict_face", data, {
      headers: {
        // 파일이나 이미지와 같은 바이너리 데이터를 포함한 폼 데이터를 서버에 전송할때 필요
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
