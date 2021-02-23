import React from "react";
import css from "./stackingPackage.module.css";
const TableField = ({ price, desc, active, select }) => {
  return (
    <div className={`${css.field} ${active ? css.active : ""}`}>
      <p className={css.price}>$ {price}</p>
      <p className={css.desc}>{desc}</p>
      <button className={css.btn} onClick={select}>
        Select
      </button>
    </div>
  );
};

export default TableField;
