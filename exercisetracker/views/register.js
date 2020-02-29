import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "../src/components/LoginForm";

function Register() {
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
                        <h1>Sign Up</h1>
                    </Jumbotron>
                    <form>
                        <Input
                        onChange={handleInputChange}
                        name="username"
                        placeholder="Choose username"
                        />
                        <Input onChange={handleInputChange}
                        name="password"
                        placeholder="Choose password"
                        />
                        <FormBtn
                        disabled={!(formatObject.username && formObject.password)}
                        onClick={handleFormSubmit}
                        >
                            Sign Me Up!
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;