import React from "react";
import { useSelector } from "react-redux";
import AdminContent from "../AdminContent/AdminContent";
import UserContent from "../UserContent/UserContent";
const Main = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return <>{isAuthenticated ? <AdminContent /> : <UserContent />}</>;
};

export default Main;
