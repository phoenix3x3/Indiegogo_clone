import React from "react";
import { useSelector } from "react-redux";
import AdminContent from "../AdminContent/AdminContent";
import GuestContent from "../GuestContent/GuestContent";
const Main = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated ? (
        <div>
          <AdminContent />
        </div>
      ) : (
        <GuestContent />
      )}
    </>
  );
};

export default Main;
