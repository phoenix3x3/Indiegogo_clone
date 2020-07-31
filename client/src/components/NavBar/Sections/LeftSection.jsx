import React from "react";
import "../../NavBar/navBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../Assets/EL-sense-.svg";
function LeftSection() {
  return (
    <div className="header header__left-nav-bar">
      <div className="header header__left-nav-bar nav-bar-item ">
        {/* eslint-disable-next-line */}
        <img src={Logo} alt="Logo" className="logo" height="75" color="white" />
      </div>
      <div className="divider"></div>
      <div className="header header__left-nav-bar nav-bar-item">
        {/*  eslint-disable-next-line */}
        <a href="">
          <span>Explore</span>
          <FontAwesomeIcon className="angleDown" icon={faAngleDown} />
        </a>
      </div>
      <div className="header header__left-nav-bar nav-bar-item">
        {/*  eslint-disable-next-line */}
        <a href="#">What we do</a>
      </div>
      <div className="header header__left-nav-bar nav-bar-item">
        {/*  eslint-disable-next-line */}
        <a href="#">
          <FontAwesomeIcon icon={faSearch} />
        </a>
      </div>
    </div>
  );
}

export default LeftSection;
