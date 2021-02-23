import React, { useState } from "react";
import css from "./mobileNavigation.module.css";
import { ReactComponent as Icon1White } from "../../assets/images/navbar new/icon1 prazna.svg";
import { ReactComponent as Icon2White } from "../../assets/images/navbar new/icon2 prazna.svg";
import { ReactComponent as Icon3White } from "../../assets/images/navbar new/icon3 prazna.svg";
import { ReactComponent as Icon4White } from "../../assets/images/navbar new/icon4 prazna.svg";
import { ReactComponent as Icon5White } from "../../assets/images/navbar new/icon5 prazna.svg";
import { ReactComponent as Icon1Fill } from "../../assets/images/navbar new/icon1 puna.svg";
import { ReactComponent as Icon2Fill } from "../../assets/images/navbar new/icon2 puna.svg";
import { ReactComponent as Icon3Fill } from "../../assets/images/navbar new/icon3 puna.svg";
import { ReactComponent as Icon4Fill } from "../../assets/images/navbar new/icon4 puna.svg";
import { ReactComponent as Icon5Fill } from "../../assets/images/navbar new/icon5 puna.svg";
const MobileNavigation = ({ active, setActive }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.menu}>
        <ul>
          <li
            onClick={() => {
              setActive(0);
              window.location.href = "#how-it-works";
            }}
            className={active === 0 ? css.active : null}>
            {active === 0 ? <Icon1Fill /> : <Icon1White />}
          </li>
          <li
            onClick={() => {
              setActive(1);
              window.location.href = "#features";
            }}
            className={active === 1 ? css.active : null}>
            {active === 1 ? <Icon2Fill /> : <Icon2White />}
          </li>
          {/* <li
            onClick={() => {
              setActive(2);
              window.location.href = "#";
            }}
            className={active === 2 ? css.active : null}>
            {active === 2 ? <Icon3Fill /> : <Icon3White />}
          </li> */}
          <li
            onClick={() => {
              setActive(3);
              window.location.href = "#masternodes";
            }}
            className={active === 3 ? css.active : null}>
            {active === 3 ? <Icon4Fill /> : <Icon4White />}
          </li>
          {/* <li
            onClick={() => {
              setActive(4);
              window.location.href = "#packages";
            }}
            className={active === 4 ? css.active : null}>
            {active === 4 ? <Icon5Fill /> : <Icon5White />}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
