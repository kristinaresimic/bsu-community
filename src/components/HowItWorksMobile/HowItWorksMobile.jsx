import React from "react";
import css from "./howitworksMobile.module.css";
import person from "../../assets/images/person.png";

const HowItWorksMobile = (props) => {
  console.log(props);
  return (
    <div className={css.container} id='how-it-works' ref={props.forwardedRef}>
      <h2 className={css.title}>How it Works</h2>
      <div className={css.graphics}>
        <img src={person} />
        <div className={css.cards}>
          <div className={css.card}>
            <div className={css.text}>Choose a masternode from the list</div>
          </div>
          <div className={css.card}>
            <div className={css.text}>Enter basic user details through a form</div>
          </div>
          <div className={css.card}>
            <div className={css.text}>Purchase BSU with BTC or via banking details</div>
          </div>
          <div className={css.card}>
            <div className={css.text}>
              Login to your Staking Dashboard with the provided credientals to see and access your
              earnings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksMobile;
