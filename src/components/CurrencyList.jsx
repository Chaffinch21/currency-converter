import React from "react";
import CurrencyItem from "./CurrencyItem";
import { useDispatch, useSelector } from "react-redux";
import { loadCurrencysAction } from "../redux/actions";
import uniqid from "uniqid";
import { useEffect } from "react";

const CurrencyList = () => {
  const dispatch = useDispatch();
  let cur=["EUR", "USD"];

  useEffect(() => {
    dispatch(loadCurrencysAction(cur));
  }, []);

  const currencys = useSelector((state) => {
    const loadCurrencyReducer = state;
    return loadCurrencyReducer.currencys.currencys[0];
  });

    console.log(currencys);    
  return (
    <div className="currency-container">
      <ul className="currencys-list">
        {
          currencys.map((res)=>{
            console.log(res);
            return(
              <li key={uniqid()}>
                <CurrencyItem data={res}/>
              </li>
            )
          })
        }

        {/* {currencys.map((res)=>{
          res.forEach((el)=>{
            console.log(el);
            return(
              c
            )
          })
           */}
      </ul>
    </div>
  );
};

export default CurrencyList;
