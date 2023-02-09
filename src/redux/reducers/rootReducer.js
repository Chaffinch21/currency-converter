import { combineReducers } from "redux";
import { loadCurrencyReducer } from "./loadCurrencyReducer";

const rootReducer = combineReducers({
  currencys: loadCurrencyReducer
});

export default rootReducer;