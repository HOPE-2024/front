import axios from "axios";
import { Common } from "../utils/Common";

export const MedicineDataAxiosApi = {
  // 의약품 추가
  addData: async (props) => {
    const medicineData = {
      code: props.code, // 제품코드
      name: props.name, // 제품명
      name_en: props.name_en, // 제품영문명
      company: props.company, // 제조사명
      company_en: props.company_en, // 제조사영문명
      general: props.general, // 일반의약품/전문의약품
      appearance: props.appearance, // 외형
      ingredient: props.ingredient, // 성분
      ingredient_en: props.ingredient_en, // 성분영문명
      method: props.method, // 보관방법
      period: props.period, // 유통기한
      insurance: props.insurance, // 보험코드
      additive: props.additive, // 첨가물
      image: props.image, // 사용설명서 이미지
      effect: props.effect, // 효능효과
      usages: props.usages, // 용법용량
      precautions: props.precautions, // 주의사항
    };
    return await axios.post(
      Common.KH_DOMAIN + "/elastic/medicine/add",
      medicineData
    );
  },

  // 의약품 삭제
  deleteData: async (documentId) => {
    return await axios.delete(
      Common.KH_DOMAIN + `/elastic/medicine/delete?documentId=${documentId}`
    );
  },

  // 검색어 저장
  addSearchLog: async (keyword) => {
    return await axios.post(
      Common.KH_DOMAIN + `/elastic/medicine/add-search-log?keyword=${keyword}`
    );
  },

  // 검색어 빈도 집계
  getSearchLog: async () => {
    return await axios.get(
      Common.KH_DOMAIN + "/elastic/medicine/get-search-log"
    );
  },
};
