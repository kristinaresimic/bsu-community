import React from "react";
import css from "./howItWorks.module.css";
import frame from "../../assets/images/howItsWork.svg";

const HowItWorks = (props) => {
  console.log(props);
  return (
    <div className={css.howItWorks} id='how-it-works' ref={props.forwardedRef}>
      <div className={css.content}>
        <div className={css.howItWorksText}>
          HOW IT <span>WORKS?</span>
        </div>
        <img src={frame} alt='Image' />
      </div>
    </div>
  );
};

export default HowItWorks;
