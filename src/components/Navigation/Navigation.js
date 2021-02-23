import React, { useState } from "react";
import "./navigation.css";
import logo from "../../assets/images/BSU Logo.svg";
import USAFlag from "../../assets/images/USA Flag.svg";
// import hamburger from "../../assets/images/hamburger.svg";
// import MobileNavigation from "../MobileNavigation/MobileNavigation";
const Navigation = () => {
  return (
    <div className='headerBg'>
      <div className='logo'>
        <img className="logo-img" src={logo} alt='BSU Logo' />
      </div>

      <ul className='menu'>
        <li className='menu__item'>
          <a href='#how-it-works'>How it works</a>
        </li>
        <li className='menu__item'>
          <a href='#features'>Features</a>
        </li>
        {/* <li className='menu__item menu__itemActive'>
          <a href='#'>Home</a>
        </li> */}
        <li className='menu__item'>
          <a href='#masternodes'>Masternodes</a>
        </li>
        {/* <li className='menu__item'>
          <a href='#packages'>Staking Packages</a>
        </li> */}
      </ul>

      {/* <div className='options'>
        <button className='loginBtn'>Login</button>
        <a href='#' className='signUp'>
          Sign up
        </a>
        <img src={USAFlag} alt='Language flag' />
      </div> */}
    </div>
  );
};

export default Navigation;
