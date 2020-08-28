import React from "react";
import SignUpModal from "../Auth/SignUpModal";
import LogInModal from "../Auth/LogInModal";
import Logout from "../Auth/Logout";
import { useSelector } from "react-redux";
import SwitchLanguages from "../SwitchLanguages/SwitchLanugages";

const RightSection = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="header header__right-nav-bar">
      <div className="header header__right-nav-bar nav-bar-item">
        <SwitchLanguages />
      </div>
      {/*<div className="header header__right-nav-bar nav-bar-item">
        
        <a href="">Some function</a>
      </div> */}
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
};

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });
export default RightSection;
// export default connect(mapStateToProps, null)(RightSection);
