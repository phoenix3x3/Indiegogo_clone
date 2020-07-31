import React from "react";
import { Table, Button, Container } from "reactstrap";

const UsersTable = (props) => {
  const handleDeleteUser = (id) => {
    let answer = window.confirm(`Are you sure?`);

    if (answer) {
      props.deleteUser(id);
    }
  };

  return (
    <Container className="mt-5">
      <h3>UsersTable</h3>
      <Table className="mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                  <Button
                    onClick={() => {
                      props.editRow(user);
                    }}
                    className="button muted-button"
                  >
                    Edit
                  </Button>
                  <Button
                    className="ml-5"
                    onClick={() => handleDeleteUser(user.id)}
                    color="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export { UsersTable };
