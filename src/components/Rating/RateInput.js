import { ReactComponent as Star } from "../../images/icon-star.svg";
import RateResult from "./RateResult";
import styleUtils from "./RateInput.module.css";

const RateInput = () => {
  // Create a range function for generate 5 rating element
  // https://stackoverflow.com/a/10050831/3925013
  const range = (size, startAt = 0) => {
    return [...Array(size).keys()].map((i) => i + startAt);
  };

  return (
    <>
      <article className={styleUtils.container}>
        <div className={styleUtils["star-icon"]}>
          <Star />
        </div>
        {/* for sake of accessibility I used H1 in this challenge */}
        <h1 className={styleUtils.title}>How did we do?</h1>
        <p className={styleUtils.desc}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className={styleUtils["rating-inputs"]}>
          {range(5, 1).map((number) => {
            return (
              <div key={number} className={styleUtils["rating-input"]}>
                {number}
              </div>
            );
          })}
        </div>
        <button
          className={styleUtils.submit}
          type="button"
          aria-label="submit your rate"
        >
          submit
        </button>
      </article>
      <RateResult />
    </>
  );
};

export default RateInput;
