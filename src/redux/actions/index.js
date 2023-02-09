import { LOAD_CURRENCY } from "../../constants";

let loadingCurrencys = false;
export const loadCurrencysAction = (cur) => {
  return async (dispatch) => {
    if (!loadingCurrencys) {
      loadingCurrencys = true;
      const response = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`);
      const jsonData = await response.json();
      if (jsonData.length > 0) {
        loadingCurrencys = false;
      }
      console.log(cur, jsonData)
      dispatch({
        type: LOAD_CURRENCY,
        data: jsonData,
        cur: cur
      });
    }
  };
};