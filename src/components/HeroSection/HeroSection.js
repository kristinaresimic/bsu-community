import React from "react";
import Navigation from "../Navigation/Navigation";
import css from "./hero.module.css";
import scrollDown from "../../assets/images/scrolldown.svg";
import CountUp from "react-countup";

const HeroSection = ({ forwardedRef }) => {
  return (
    <div className={css.hero} ref={forwardedRef}>
      <Navigation />
      {/* <img src={landing} alt='' className='heroBg' /> */}
      <div className={css.heroContent}>
        <div className={css.heroText}>
          <p className={css.heroTitle}>Get involved with BSU Masternodes </p>
          <p className={css.heroSubTitle}>And generate passive income</p>

          <div className={css.heroButtons}>
 {/*            <button className={css.learnMore} onClick={() => (window.location.href = "#features")}>
              LEARN MORE
            </button> */}
            <button className={css.roi} onClick={() => (window.location.href = "#calculator")}>
              ROI Calculator
            </button>
          </div>
          {/* <div className={css.heroLinks}>
            <a href='#'>Forum</a>
            <a href='#'>Frequently Asked Questions</a>
          </div> */}
        </div>

        <div className={css.counters}>
          {/* <div className={css.investitors}>
            <p className={css.counter}>
              <CountUp end={420} duration={4} />
            </p>
            <p>Investitors</p>
          </div> */}
          {/* <div className={css.divider}></div> */}
          <div className={css.masternodes}>
            <p>Actual</p>
            <p className={css.counter}>
              <CountUp end={21} duration={2} useEasing={false} />
            </p>
            <p>Masternodes</p>
          </div>
          {/* <div className={css.divider}></div> */}
          {/* <div className={css.payouts}>
            <p className={css.counter}>
              <CountUp end={102320} separator='.' duration={4} prefix='$ ' />
            </p>
            <p>Total Payouts</p>
          </div> */}
        </div>
        <div className={css.scrollDown}>
          <img src={scrollDown} alt='Scroll down' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
