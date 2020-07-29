import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function LeftSection() {
  return (
    <div className="header header__left-nav-bar">
      <div className="header header__left-nav-bar nav-bar-item ">
        {/* eslint-disable-next-line */}
        <a href="#" className="label">
          SOME SHIT
        </a>
      </div>
      <div className="header header__left-nav-bar nav-bar-item">
        {/*  eslint-disable-next-line */}
        <a href="">
          <span>Explore</span>
          <FontAwesomeIcon className="angleDown" icon={faAngleDown} />
        </a>
      </div>
      {/* <div className="header header__left-nav-bar">
        <FontAwesomeIcon icon={faAngleDown} />
      </div> */}
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
