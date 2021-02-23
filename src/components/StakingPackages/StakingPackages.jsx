import React, { useState } from "react";
import css from "./stackingPackage.module.css";
import background from "../../assets/images/Packages BG.jpg";
import TableField from "./TableField";

const StakingPackages = () => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (idx) => {
    setSelected(idx);
  };
  return (
    <div className={css.container} id='packages'>
      {/* <img className={css.bg} src={background} alt='Pricing background' /> */}
      <div className={css.wrapper}>
        <h2 className={css.title}>Available Staking Packages</h2>
        <div className={css.pricingTable}>
          <TableField
            price={500}
            desc='ROI: 1-3% per month'
            active={selected === 0}
            select={() => handleSelect(0)}
          />
          <TableField
            price={1000}
            desc='ROI: 4-6% per month'
            select={() => handleSelect(1)}
            active={selected === 1}
          />
          <TableField
            price={2500}
            desc='ROI: 7-9% per month'
            select={() => handleSelect(2)}
            active={selected === 2}
          />
          <TableField
            price={5000}
            desc='ROI: 10-12% per month'
            select={() => handleSelect(3)}
            active={selected === 3}
          />
          <TableField
            price={7500}
            desc='ROI: 13-15% per month'
            select={() => handleSelect(4)}
            active={selected === 4}
          />
          <TableField
            price={10000}
            desc='ROI: 16-18% per month'
            select={() => handleSelect(5)}
            active={selected === 5}
          />
        </div>
        <p className={css.footer}>
          If you would like to stake more than the available packages, contact us at
          staking@bsu.network for more information.{" "}
        </p>
      </div>
    </div>
  );
};

export default StakingPackages;
