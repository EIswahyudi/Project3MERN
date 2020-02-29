import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "../src/components/LoginForm";

function Login() {
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();

    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>Log In</h1>
                    </Jumbotron>
                    <form>
                        <Input
                        onChange={handleInputChange}
                        name="username"
                        placeholder="Your username"
                        />
                        <Input onChange={handleInputChange}
                        name="password"
                        placeholder="Your password"
                        />
                        <FormBtn
                        disabled={!(formatObject.username && formObject.password)}
                        onClick={handleFormSubmit}
                        >
                            Log Me In!
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;