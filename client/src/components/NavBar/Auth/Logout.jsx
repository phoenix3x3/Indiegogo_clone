import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../actions/authActions";
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
const Logout = (props) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <UncontrolledButtonDropdown className="mr-5">
        <DropdownToggle caret color="dark">
          {user.name}
        </DropdownToggle>
        <DropdownMenu
          className="dropDown"
          // style={{
          //   width: "300px",
          //   backgroundColor: "#24292e",
          //   marginLeft: "-205px",
          // }}
        >
          <DropdownItem header>{user.email}</DropdownItem>
          <DropdownItem divider />
          <Link to="/profile">
            <DropdownItem className="dropDown-link">
              Личный кабинет
            </DropdownItem>
          </Link>
          {/* <DropdownItem divider /> */}
          <Link to="/managment">
            <DropdownItem className="dropDown-link">Управление</DropdownItem>
          </Link>
          <Link to="/">
            <DropdownItem
              onClick={handler}
              color="light"
              className="dropDown-link"
            >
              Выйти
            </DropdownItem>
          </Link>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </>
  );
};

export default Logout;
