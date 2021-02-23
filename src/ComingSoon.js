import React from "react";
import css from "./assets/css/comingsoon.module.css";
import bg from "./assets/images/Landing Page BG.jpg";
import bsuLogo from "./assets/images/BSU Logo.svg";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className={css.comingSoon}>
      {/* <img src={bg} alt='Background image' /> */}
      <div className={css.text}>
        <img src={bsuLogo} alt='BSU Logo' />
        <p>Coming Soon</p>
      </div>
      <Link to='/'>
        <button className={css.goBackBtn}>Go back</button>
      </Link>
    </div>
  );
};

export default ComingSoon;
