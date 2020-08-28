import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../NavBar/navBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../Assets/EL-sense-.svg";
const LeftSection = () => {
  const [t, i18n] = useTranslation("common");
  return (
    <div className="header header__left-nav-bar">
      <div className="header header__left-nav-bar nav-bar-item ">
        {/* eslint-disable-next-line */}
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="logo"
            height="75"
            color="white"
          />
        </Link>
      </div>
      <div className="divider"></div>
      {/* <div className="header header__left-nav-bar nav-bar-item">
        
        <a href="">
          <span>Explore</span>
          <FontAwesomeIcon className="angleDown" icon={faAngleDown} />
        </a>
      </div> */}
      <div className="header header__left-nav-bar nav-bar-item">
        <Link to="aboutUs">{t("header.aboutUs")}</Link>
      </div>
      <div className="header header__left-nav-bar nav-bar-item">
        {/*  eslint-disable-next-line */}
        <a href="#">
          <FontAwesomeIcon icon={faSearch} />
        </a>
      </div>
    </div>
  );
};

export default LeftSection;
