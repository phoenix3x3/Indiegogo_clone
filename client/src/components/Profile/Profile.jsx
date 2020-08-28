import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div></div>
      <div>Фио: {user.name}</div>
      <div>Год рождения</div>
      <div>Город</div>
      <div>Тренеры:</div>
    </div>
  );
};

export { Profile };
