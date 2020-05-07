import React from "react";
import SignUpModal from "../Auth/SignUpModal";
import LogInModal from "../Auth/LogInModal";
import Logout from "../Auth/Logout";
import { useSelector } from "react-redux";

function RightSection(props) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="header header__right-nav-bar">
      <div className="header header__right-nav-bar nav-bar-item">
        {/* eslint-disable-next-line */}
        <a href="">For Entrepreneurs</a>
      </div>
      <div className="header header__right-nav-bar nav-bar-item">
        {/* eslint-disable-next-line */}
        <a href="">Start a Campaign</a>
      </div>
      <div className="header header__right-nav-bar nav-bar-item divider"></div>
      {!isAuthenticated ? (
        <div className={`header header__right-nav-bar nav-bar-item auth `}>
          <div className="header header__right-nav-bar nav-bar-item">
            <LogInModal />
          </div>
          <div className="header header__right-nav-bar nav-bar-item">
            <SignUpModal />
          </div>
        </div>
      ) : (
        <Logout />
      )}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });
export default RightSection;
// export default connect(mapStateToProps, null)(RightSection);
