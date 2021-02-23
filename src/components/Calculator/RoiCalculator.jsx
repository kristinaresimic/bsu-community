import React from "react";
import css from "./calculator.module.css";
import termostat from "../../assets/images/Group 2.svg";
import slider from "../../assets/images/Group 6.svg";
import Slider from "./Slider";
import arrow from "../../assets/images/Polygon 1.svg";
import logo from "../../assets/images/BSU Logo Calculator.svg";

const RoiCalculator = () => {
  return (
    <div className={css.container} id='calculator'>
      <h1 className={css.roiTitle}>ROI Calculator</h1>
      <div className={css.form}>
        <h2 className={css.enterValue}>Enter the ammount of BSU</h2>
        <div className={css.topForm}>
          <input type='number' min={0} className={css.numberInput} />
          <Slider />
          <div className={css.select}>
            <div className={css.bottomLine}></div>
            <div className={css.arrow}>
              <img src={arrow} alt='arrow' />
            </div>
            <div className={css.inline}>
              <div className={css.text}>BSU</div>
              <div className={css.logo}>
                <img src={logo} alt='BSU Logo' />
              </div>
            </div>
          </div>
        </div>
        <div className={css.centerForm}>
          <div className={css.invest}>
            <div>
              <p className={css.title}>Invest</p>
              <input
                type='text'
                value='$1,547.96'
                onChange={(e) => {}}
                className={`${css.money}  ${css.input}`}
              />
            </div>
            <input
              type='text'
              value='7,062.00 (BSU)'
              onChange={(e) => {}}
              className={`${css.bsu}  ${css.input}`}
            />
          </div>
        </div>
        <div className={css.bottomForm}>
          <div className={css.earn}>
            <p className={`${css.title} ${css.earnTitle}`}>Earn</p>
            <div className={`${css.period}`}>
              <span className={`${css.active} ${css.periodItem}`}>Weekly</span>
              <span className={` ${css.periodItem}`}>Monthly</span>
              <span className={` ${css.periodItem}`}>Yearly</span>
            </div>
            <div style={{ position: "relative" }}>
              <input
                type='text'
                value='$5,93.00'
                onChange={(e) => {}}
                className={`${css.earnInput} ${css.input}`}
              />
              <p className={css.earnBSU}>27,52(BSU)</p>
            </div>
          </div>
          <button className={css.btn}>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default RoiCalculator;
