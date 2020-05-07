import React from "react";
// import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { useDispatch } from "react-redux";
function Logout(props) {
  const dispatch = useDispatch(() => logoutUser);
  return (
    <div>
      {/* eslint-disable-next-line */}
      <a onClick={dispatch} href="#">
        Logout
      </a>
    </div>
  );
}
export default Logout;
// export default connect(null, { logout })(Logout);
