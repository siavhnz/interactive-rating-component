import { ReactComponent as ThanksSvg } from "../../images/illustration-thank-you.svg";

const RateResult = () => {
  return (
    <div>
      <ThanksSvg />
      <span>
        You selected
        {/* <!-- Add rating here --> */}
        out of 5
      </span>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default RateResult;
