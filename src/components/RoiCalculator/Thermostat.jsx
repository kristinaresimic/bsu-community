import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import css from "./roi.module.css";

const Thermostat = ({ data: { percentage, money, bsu, bsuPrice } }) => {
  return (
    <div style={{ width: "170px" }}>
      <CircularProgressbarWithChildren
        value={percentage * 100}
        styles={buildStyles({
          strokeLinecap: "round",
          textSize: "16px",
          pathTransitionDuration: 0.5,
          pathColor: "#9bf5af",
          textColor: "#f88",
          trailColor: "#c8d7ff",
          text: {
            backgroundColor: "red",
          },
        })}>
        <div className={css.termostatText}>
          {/* <p>{`${Math.floor(bsuPercentage)}%`}</p> */}
          <p className={css.termostatPercent}>{`${percentage * 100}%`}</p>
          <p className={css.termostatDescription}> BSU reward from ySign</p>
        </div>
      </CircularProgressbarWithChildren>
      <div className={css.legend}>
        <p className={css.therTotal}>BSU ROI from project</p>
        <p className={css.therBsu}>BSU Price growth</p>
      </div>
    </div>
  );
};

export default Thermostat;
