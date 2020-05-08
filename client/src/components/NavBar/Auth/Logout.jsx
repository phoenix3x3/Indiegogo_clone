import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
export class Logout extends React.Component {
  render() {
    return (
      // eslint-disable-next-line
      <a onClick={this.props.logoutUser} href="#">
        Logout
      </a>
    );
  }
}

export default connect(null, { logoutUser })(Logout);
