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
import { useTranslation } from "react-i18next";
const Logout = (props) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(logoutUser());
  };
  const [t, i18n] = useTranslation("common");
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
              {t("header.dropDownMenu.profile")}
            </DropdownItem>
          </Link>
          {/* <DropdownItem divider /> */}
          <Link to="/managment">
            <DropdownItem className="dropDown-link">
              {t("header.dropDownMenu.managment")}
            </DropdownItem>
          </Link>
          <Link to="/">
            <DropdownItem
              onClick={handler}
              color="light"
              className="dropDown-link"
            >
              {t("header.dropDownMenu.logOut")}
            </DropdownItem>
          </Link>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </>
  );
};

export default Logout;
