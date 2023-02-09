import React from "react";

const CurrencyItem = (data) => {
  console.log(data);

  return (
    <div>
      <p>{data.data.Name}: {data.data.Value}</p>
    </div>
    
  );
};

export default CurrencyItem;
