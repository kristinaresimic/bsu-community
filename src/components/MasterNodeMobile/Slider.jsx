import React from "react";
import css from "./slider.module.css";
const Slider = ({ icon, active, handleClick }) => {
  return (
    <div className={css.slider} onClick={handleClick}>
      <div className={`${css.thumb} ${active ? css.thumbActive : ""}`}>
        <img src={icon} />
      </div>
      <div className={`${css.track} ${active ? css.trackActive : ""}`}></div>
    </div>
  );
};

export default Slider;
