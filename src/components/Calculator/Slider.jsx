import React, { useState } from "react";
import css from "./slider.module.css";

const Slider = () => {
  const [value, setValue] = useState(0);
  return (
    <div className={css.slider}>
      <input
        type='range'
        min={0}
        max={100}
        value={value}
        onChange={(v) => setValue(v.target.value)}
      />
    </div>
  );
};

export default Slider;
