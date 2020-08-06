import React, { useState } from "react";
import { EditUserForm } from "./EditUserForm";
import { UsersTable } from "./UsersTable";
import { AddUserForm } from "./AddUserForm";

export default function AdminContent() {
  const usersData = [
    { id: 1, name: "Name1", username: "UserName", role: 0 },
    { id: 2, name: "Name2", username: "UserName", role: 0 },
    { id: 3, name: "Name3", username: "UserName", role: 0 },
    { id: 4, name: "Name4", username: "UserName", role: 0 },
    { id: 5, name: "Name5", username: "UserName", role: 0 },
    { id: 6, name: "Name6", username: "UserName", role: 0 },
  ];
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  return (
    <>
      {!editing ? (
        <AddUserForm addUser={addUser} />
      ) : (
        <div>
          <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </div>
      )}
      <UsersTable users={users} editRow={editRow} deleteUser={deleteUser} />
    </>
  );
}
