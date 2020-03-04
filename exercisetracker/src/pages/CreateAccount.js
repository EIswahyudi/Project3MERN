import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/CreateUserForm";

function CreateAccount() {

    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.username && formObject.password) {
            API.saveUser({
                username: formObject.username,
                password: formObject.password
            })
            .then(console.log(formObject.username, formObject.password));
        }
    };

    return (
        <div>
            <Hero backgroundImage="https://www.bcee.lu/fileadmin/_processed_/f/5/csm_Garmin_Fitbit_Cover_a6b7dd078d.jpg">
            </Hero>
            <div class="ui container exercise">
                <div class="ui raised card m-auto">
                    <h2>Create Account</h2>
                    <form>
              <Input
              onChange={handleInputChange}
                name="username"
                placeholder="Username"
              />
              <Input
              onChange={handleInputChange}
                name="password"
                placeholder="Password"
              />
              <FormBtn
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
                </div>
            </div>
        </div>
    )
}
export default CreateAccount;