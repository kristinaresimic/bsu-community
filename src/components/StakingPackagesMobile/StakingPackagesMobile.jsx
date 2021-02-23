import React from "react";
import css from "./stackingPackages.module.css";

const StakingPackagesMobile = ({ forwardedRef }) => {
  return (
    <div className={css.container} id='packages' ref={forwardedRef}>
      <h2 className={css.title}>Available Staking Packages</h2>
      <div className={css.packages}>
        <div className={css.package}>
          <p className={css.price}>500$</p>
          <p className={css.roi}>ROI: 1-3% per month</p>
          <button className={css.btn}>Select</button>
        </div>
        <div className={css.package}>
          <p className={css.price}>1000$</p>
          <p className={css.roi}>ROI: 4-6% per month</p>
          <button className={css.btn}>Select</button>
        </div>
      </div>
      <div className={css.otherPackage}>
        <div className={css.smallPackage}>2500$</div>
        <div className={css.smallPackage}>5000$</div>
        <div className={css.smallPackage}>7500$</div>
        <div className={css.smallPackage}>10000$</div>
      </div>
    </div>
  );
};

export default StakingPackagesMobile;
