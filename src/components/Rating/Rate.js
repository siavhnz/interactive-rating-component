import RateInput from "./RateInput";
import RateResult from "./RateResult";
import styleUtils from "./Rate.module.css";
import { useState } from "react";

// This is changes once and no recreation happen based on
// this (so no need a useReducer) also it must be persistant
// over the recreation of component so I define it out side of component
let rateValue = 0;

const Rate = () => {
  // Toggle components based on user state
  const [userIsRated, setUserIsRated] = useState(false);

  const handleRating = (value) => {
    rateValue = value;
    setUserIsRated(true);
  };

  let content = !userIsRated ? (
    <RateInput onHandleRating={handleRating} />
  ) : (
    <RateResult rate={rateValue} />
  );

  return <div className={styleUtils.container}>{content}</div>;
};

export default Rate;
