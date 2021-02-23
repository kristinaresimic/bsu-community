import React, { useState } from "react";
import Slider from "./Slider";
import css from "./masterNode.module.css";

import moneyIcon from "../../assets/images/moneySliderIcon.svg";
import masterNodeIcon from "../../assets/images/masterNodeSlide.svg";
import thirdIcon from "../../assets/images/thirdIconSlide.svg";
import arrow from "../../assets/images/Arrow.svg";
import { Link } from "react-router-dom";

const MasterNodeMobile = ({ forwardedRef }) => {
  const [activeFirst, setActiveFirst] = useState(false);
  const [activeSecond, setActiveSecond] = useState(false);
  const [activeThird, setActiveThird] = useState(false);
  const [active, setActive] = useState([false, false, false]);

  const handlerClick = (idx) => {
    if (idx === 0) {
      setActiveFirst((c) => !c);
      setActiveSecond(false);
      setActiveThird(false);
    } else if (idx === 1) {
      setActiveSecond((c) => !c);
      setActiveFirst(false);
      setActiveThird(false);
    } else if (idx === 2) {
      setActiveThird((c) => !c);
      setActiveSecond(false);
      setActiveFirst(false);
    }
  };

  return (
    <div className={css.container} id='masternodes' ref={forwardedRef}>
      <h1 className={css.title}>Pull slider down to find out more</h1>
      <div className={css.sliders}>
        <Slider active={activeFirst} icon={moneyIcon} handleClick={() => handlerClick(0)} />
        <Slider active={activeSecond} handleClick={() => handlerClick(1)} icon={masterNodeIcon} />
        <Slider active={activeThird} handleClick={() => handlerClick(2)} icon={thirdIcon} />
      </div>
      <div className={css.description}>
        {activeFirst && (
          <div className={css.descriptionContent}>
            <h3 className={css.descriptionTitle}>Masternode Staking</h3>
            <p className={css.descriptionText}>
              Staking is the process of taking a part in the validation of transactions that
              Masternodes maintain on a blockchain. The blockchain uses a Proof of Stake (PoS)
              concept, which is where a person can validate the block transactions in accordance
              with how much BSU they hold. With our Masternode staking, any person with a specific
              amount of BSU can validate transactions and therefore earn Staking rewards.
            </p>
            {/* <a href='#how-it-works' className={css.cardLink}>
              <span>Find Out More</span>
              <img src={arrow} alt='Visit BSU Community Forum ' />
            </a> */}
          </div>
        )}
        {activeSecond && (
          <div className={css.descriptionContent}>
            <h3 className={css.descriptionTitle}>Masternodes</h3>
            <p className={css.descriptionText}>
              Masternodes are superior servers on the blockchain that act to fortify the entire
              Inery blockchain network. Being a part of a masternode gives users rewards in the form
              of BSU, and is a great way to earn passive income
            </p>
            <p className={css.descriptionText}>
              While hosting a masternode reaps the best rewards, it can be quite expensive and
              hardware intensive, requiring large amounts of resources to get started. Luckily,
              there is an alternative and cheaper way to get involved and reap part of the benefits:
              staking.
            </p>
            {/* <Link to='/masternodelist' className={css.cardLink}>
              <span>View Masternode List</span>
              <img src={arrow} alt='Visit BSU Community Forum ' />
            </Link> */}
          </div>
        )}
        {activeThird && (
          <div className={css.descriptionContent}>
            <h3 className={css.descriptionTitle}>Masternode Sharing</h3>
            <p className={css.descriptionText}>
              The shared masternode option is for those who wish to share the cost of hosting a
              masternode with other members of the community, essentially splitting the collateral
              and therefore the associated rewards amongst each other. This option is done solely
              through an agreement between selected investors and discussed on a community forum.
            </p>
            {/* <Link to='/forum' className={css.cardLink}>
              <span>Find Out More</span>
              <img src={arrow} alt='Visit BSU Community Forum ' />
            </Link> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MasterNodeMobile;
