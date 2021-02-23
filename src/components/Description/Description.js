import React from "react";
import css from "./description.module.css";
import { useMediaQuery } from "react-responsive";
import DescriptionItem from "./DescriptionItem";
import security from "../../assets/images/Security.svg";
import setup from "../../assets/images/Setup.svg";
import passive from "../../assets/images/Passive.svg";

import securityDark from "../../assets/images/scurityDarkIcon.svg";
import setupDark from "../../assets/images/setupDarkIcon.svg";
import passiveDark from "../../assets/images/passiveDarkIcon.svg";

const Description = ({ forwardedRef }) => {
  const isMobile = useMediaQuery({ maxDeviceWidth: 500 });
  return (
    <div className={css.description} id='features' ref={forwardedRef}>
      <div className={css.description__content}>
        <DescriptionItem
          title='Security'
          text='Inery masternodes are hosted on highly secure servers, set up with incredible care and attention to detail. Users can have peace of mind that their belongings are protected and safe from misuse.'
          icon={isMobile ? securityDark : security}
        />

        <DescriptionItem
          title='Passive Income '
          text='Start generating staking compensation with little effort. Simply view your earnings increase through your personal staking dashboard.'
          icon={isMobile ? passiveDark : passive}
        />

        <DescriptionItem
          title='Quick Set up'
          text='Start staking with just a few clicks. Choose the package that suits you or create a custom one with our help. '
          icon={isMobile ? setupDark : setup}
        />
      </div>
    </div>
  );
};

export default Description;
