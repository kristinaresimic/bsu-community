import React from "react";
import css from "./description.module.css";

const DescriptionItem = ({ icon, title, text, children }) => {
  return (
    <div className={css.description__item}>
      {/* {children} */}
      <div className={css.description__image}>
        <img src={icon} alt='' />
      </div>
      <div className={css.description__text}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DescriptionItem;
