import React, { useState } from "react";
import { Container, Form, Label, Input, Button } from "reactstrap";
const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.username) return;

    props.updateUser(user.id, user);
  };

  return (
    <Container className="mt-5">
      <h3>Edit user</h3>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <Label>Username</Label>
        <Input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          className="mb-3"
        />
        <Button>Update user</Button>
        <Button
          onClick={() => props.setEditing(false)}
          className="button muted-button ml-2"
          color="danger"
        >
          Cancel
        </Button>
      </Form>
    </Container>
    // <form onSubmit={handleSubmit}>
    //   <label>Name</label>
    //   <input
    //     type="text"
    //     name="name"
    //     value={user.name}
    //     onChange={handleInputChange}
    //   />
    //   <label>Username</label>
    //   <input
    //     type="text"
    //     name="username"
    //     value={user.username}
    //     onChange={handleInputChange}
    //   />
    //   <button>Update user</button>
    //   <button
    //     onClick={() => props.setEditing(false)}
    //     className="button muted-button"
    //   >
    //     Cancel
    //   </button>
    // </form>
  );
};

export { EditUserForm };
