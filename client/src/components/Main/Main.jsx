import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AdminContent from "../AdminContent/AdminContent";
import GuestContent from "../GuestContent/GuestContent";
import { AboutUs } from "../AboutUs/AboutUs";
import { Profile } from "../Profile/Profile";
const Main = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <GuestContent />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>

        {isAuthenticated ? (
          <>
            <Route path="/managment">
              <AdminContent />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <h3 style={{ textAlign: "center", marginTop: "100px" }}>
            У вас нет прав для просмотра этой страницы
          </h3>
        )}
      </Switch>
    </>
  );
};

export default Main;
