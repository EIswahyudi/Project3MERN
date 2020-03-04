import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreateUserForm() {
    return (
        <Form>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
                <Form.Label>Re-enter password</Form.Label>
                <Form.Control type="password2" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    )
}

export default CreateUserForm;