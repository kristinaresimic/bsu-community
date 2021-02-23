import React, { useState } from "react";
import css from "./roi.module.css";
import ysignLogo from "../../assets/images/ySignLogo.png";
import logo from "../../assets/images/person.png";

import Dropdown, {
  DropdownToggle,
  DropdownMenu,
  DropdownMenuWrapper,
  MenuItem,
  DropdownButton,
  Menu,
} from "@trendmicro/react-dropdown";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-buttons/dist/react-buttons.css";
import "@trendmicro/react-dropdown/dist/react-dropdown.css";

const DropdownComponent = ({ selected, setSelected, description, link = "#" }) => {
  const renderSelectet = () => {
    switch (selected) {
      case 0:
        return (
          <>
            <img src={ysignLogo} /> ySign
          </>
        );
        break;
      case 1:
        return (
          <>
            <img src={logo} /> Other Project
          </>
        );
        break;
      default:
        return (
          <>
            <img src={ysignLogo} /> ySign
          </>
        );
    }
  };

  return (
    <>
      <p className={css.title}>Select Masternode</p>
      <Dropdown
        style={{ width: "100%", backgroundColor: "#F2F2F2" }}
        onSelect={(eventKey) => {
          setSelected(eventKey);
        }}>
        <Dropdown.Toggle
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          btnStyle='flat'>
          <div className={css.dropItem}>{renderSelectet()}</div>
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            width: "100%",
          }}>
          <MenuItem
            style={{
              width: "100%",
            }}
            eventKey={0}>
            <div className={css.dropItem}>
              <img src={ysignLogo} /> ySign
            </div>
          </MenuItem>
          {/* <MenuItem
            style={{
              width: "100%",
            }}
            eventKey={1}>
            <div className={css.dropItem}>
              <img src={logo} /> Other Project
            </div>
          </MenuItem> */}
        </Dropdown.Menu>
      </Dropdown>
      <div className={css.projectDescription}>
        <p>
          {description}{" "}
          <a href={link} target='_blank'>
            View More
          </a>
        </p>
      </div>
    </>
  );
};

export default DropdownComponent;
