import { ReactComponent as ThanksSvg } from "../../images/illustration-thank-you.svg";
import styleUtils from "./RateResult.module.css";

const RateResult = () => {
  return (
    <article className={styleUtils.container}>
      <ThanksSvg
        className={styleUtils["thanks-img"]}
        focusable="false"
        aria-hidden="true"
      />
      <span className={styleUtils.result}>You selected 4 out of 5</span>
      <h2 className={styleUtils.title}>Thank you!</h2>
      <p className={styleUtils.desc}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </article>
  );
};

export default RateResult;
