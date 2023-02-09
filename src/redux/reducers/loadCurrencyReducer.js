import { LOAD_CURRENCY } from "../../constants";
const initialState = {
  currencys: [],
};

export const loadCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENCY:
      console.log(action.data);
      let key=action.cur;
      let currencyArr=[];
      key.forEach(el=>{
        let obj=action.data.Valute[el];
        console.log(obj);
      let currencyNew={
        ID: obj.ID,
        CharCode: obj.CharCode,
        Name: obj.Name,
        Value: obj.Value
      }
      currencyArr.push(currencyNew);
      })
      return {
        ...state,
        currencys: [...state.currencys, currencyArr]
      };
    default:
      return state;
  }
}
// export default loadCurrencyReducer;
