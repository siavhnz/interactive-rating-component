import { ReactComponent as Star } from "../../images/icon-star.svg";
import RateResult from "./RateResult";
const RateInput = () => {
  // Create a range function for generate 5 rating element
  // https://stackoverflow.com/a/10050831/3925013
  const range = (size, startAt = 0) => {
    return [...Array(size).keys()].map((i) => i + startAt);
  };

  return (
    <article>
      <div>
        <Star />
      </div>
      {/* for sake of accessibility I used H1 in this challenge */}
      <h1>How did we do?</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <div>
        {range(5, 1).map((number) => {
          return <div> {number} </div>;
        })}
      </div>
      <button type="button" aria-label="submit your rate">
        submit
      </button>
      <RateResult />
    </article>
  );
};

export default RateInput;
