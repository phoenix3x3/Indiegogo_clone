import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
// export class Logout extends React.Component {
//   render() {
//     return (
//       <>
//         {/* eslint-disable-next-line */}
//         <a onClick={this.props.logoutUser} href="#">
//           Logout
//         </a>
//       </>
//     );
//   }
// }

// export default connect(null, { logoutUser })(Logout);

const Logout = (props) => {
  const dispatch = useDispatch();
  const handler = useCallback(() => {
    dispatch(logoutUser());
  }, []);
  return (
    <>
      {/* eslint-disable-next-line */}
      <a onClick={handler} href="#">
        Logout
      </a>
    </>
  );
};

export default Logout;
