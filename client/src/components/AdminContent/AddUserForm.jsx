import React, { useState } from "react";
import { Container, Form, Button, Input, Label } from "reactstrap";

const AddUserForm = (props) => {
  const inititalFormState = {
    id: null,
    name: "",
    username: "",
    status: "",
    role: 0,
  };
  const [user, setUser] = useState(inititalFormState);

  const handleInputOnChange = (event) => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.username) return;
    props.addUser(user);
    setUser(inititalFormState);
  };

  return (
    <Container className="mt-5 ">
      <h3>Add User</h3>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputOnChange}
        />
        <Label>Username</Label>
        <Input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputOnChange}
        />
        <Button className="mt-3" color="success">
          Add new user
        </Button>
      </Form>
    </Container>
  );
};

export { AddUserForm };
