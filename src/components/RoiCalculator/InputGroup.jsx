import React from "react";
import css from "./roi.module.css";

const InputGroup = ({
  title,
  value,
  handleChange,
  inputColorClass,
  prefix,
  size,
  bsuPrice,
  bsuPriceSmall,
  minValue,
}) => {
  // const formatValue = value.toFixed(2);
  return (
    <div className={`${css.inputGroup} ${css[size]}`}>
      <p className={css.title}>{title}</p>
      {bsuPriceSmall && <p className={css.bsuSmall}>{bsuPriceSmall} / BSU</p>}
      <div className={`${css.input} ${css[inputColorClass]}`}>
        <span>{prefix}</span>
        <input
          type='number'
          // value={parseFloat(value).toFixed(2)}
          value={value}
          className={css[inputColorClass]}
          onChange={handleChange}
          min={minValue}
        />
      </div>
      {bsuPrice && <p className={css.bsuPrice}>{bsuPrice} / BSU</p>}
    </div>
  );
};

export default InputGroup;
