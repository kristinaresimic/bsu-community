import React from "react";
import css from "./footer.module.css";
import emailIcon from "../../assets/images/Email Icon.svg";
import linkedInIcon from "../../assets/images/Linkedin Icon.svg";
import instagramIcon from "../../assets/images/Instagram Icon.svg";
import facebookIcon from "../../assets/images/Facebook Icon.svg";

const Footer = (props) => {
  return (
    <div className={css.footer}>
      {/* <h1 className={css.title}>FAQ</h1> */}
      <ul className={css.links}>
        <a onClick={props.masternodes}>
          <li>What are Masternodes?</li>
        </a>
        <a onClick={props.inery}>
          <li>Why Inery?</li>
        </a>
        <a onClick={props.staking}>
          <li>What is Staking?</li>
        </a>
        <a onClick={props.proof}>
          <li>What is Proof of Stake?</li>
        </a>
      </ul>
      {/* <div className={css.newsletter}>
        <span>Newsletter</span>
        <div className={css.input}>
          {" "}
          <input type='email' placeholder='Enter your e-mail' />
          <img src={emailIcon} alt='' />
        </div>
      </div> */}
      <div className={css.social}>
        <img src={linkedInIcon} alt='Linked in' />
        <img src={instagramIcon} alt='Linked in' />
        <img src={facebookIcon} alt='Linked in' />
      </div>
    </div>
  );
};

export default Footer;
