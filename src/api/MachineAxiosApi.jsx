import axios from "axios";
import { FLASK_SERVER } from "../utils/Common";

export const MachineAxiosApi = {
  predictFuture: async (data) => {
    return await axios.post(FLASK_SERVER + "/predict_future", data);
  },

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

  fetchNews: async (data) => {
    console.log(data);
    return await axios.get(
      `${FLASK_SERVER}/search-news?query=${encodeURIComponent(data)}`
    );
  },
};
