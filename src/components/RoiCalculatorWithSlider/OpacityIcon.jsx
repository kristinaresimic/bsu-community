import React from "react";
import css from "./calculator.module.css";
import icon from "./icon.png";
const OpacityIcon = ({ iconOpacity, textOpacity }) => {
  return (
    <div className={css.opacityIcon}>
      <img src={icon} alt='' style={{ opacity: iconOpacity }} />
      <p style={{ opacity: textOpacity }}>Coming Soon</p>
    </div>
  );
};

export default OpacityIcon;
