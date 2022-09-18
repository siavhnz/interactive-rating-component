import { useState } from "react";
import { ReactComponent as Star } from "../../images/icon-star.svg";
import styleUtils from "./RateInput.module.css";

const RateInput = (props) => {
  /**
   * Keep track of user rate
   * Change background-color of numbers based on this value
   */
  const [rateValue, setRateValue] = useState(null);

  // Recreate the component for changing background color
  const handleRating = (number) => {
    setRateValue(number);
  };

  // Send rate to the parent to show the result
  const submitHandler = (event) => {
    event.preventDefault();
    props.onHandleRating(rateValue);
  };

  // Create a range function for generate 5 rating element
  // https://stackoverflow.com/a/10050831/3925013
  const range = (size, startAt = 0) => {
    return [...Array(size).keys()].map((i) => i + startAt);
  };

  return (
    <article className={styleUtils.container}>
      <div className={styleUtils["star-icon"]}>
        <Star focusable="false" aria-hidden="true" />
      </div>
      {/* for sake of accessibility I used H1 in this challenge */}
      <h1 className={styleUtils.title}>How did we do?</h1>
      <p className={styleUtils.desc}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styleUtils["rating-inputs"]}>
        {range(5, 1).map((number) => {
          return (
            <div
              key={number}
              className={
                number === rateValue
                  ? `${styleUtils["rating-input"]} ${styleUtils.active}`
                  : styleUtils["rating-input"]
              }
              onClick={handleRating.bind(this, number)}
            >
              {number}
            </div>
          );
        })}
      </div>
      <button
        onClick={submitHandler}
        className={styleUtils.submit}
        type="button"
        aria-label="submit your rate"
      >
        submit
      </button>
    </article>
  );
};

export default RateInput;
