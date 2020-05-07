import React from "react";
import LeftSection from "./Sections/LeftSection";
import RightSection from "./Sections/RightSection";
import "./navBar.scss";
function NavBar() {
  return (
    <nav className="header__nav-bar">
      <LeftSection />
      <RightSection />
    </nav>
  );
}

export default NavBar;
