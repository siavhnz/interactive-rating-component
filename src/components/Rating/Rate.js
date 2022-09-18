import RateInput from "./RateInput";
import RateResult from "./RateResult";
import styleUtils from "./Rate.module.css";

const Rate = () => {
  return (
    <div className={styleUtils.container}>
      <RateInput />
      <RateResult />
    </div>
  );
};

export default Rate;
