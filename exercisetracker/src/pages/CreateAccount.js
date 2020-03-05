import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import API from "../utils/API";
import Dashboard from "./Dashboard";
import { Input, FormBtn } from "../components/CreateUserForm";

function CreateAccount() {

    const [username, password] = useState([])
    const [formObject, setFormObject] = useState({})

    function loadUserProfile() {
        // load user's dashboard
        API.getUser()
            .then(
                // this.setState({ username: formObject.username, password: formObject.password });
                // console.log(state.username, state.password)
            )
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.username && formObject.password) {
            API.saveUser({
                username: formObject.username,
                password: formObject.password
            })
                // .then(this.setState({ username: formObject.username, password: formObject.password }))
                .then(res => loadUserProfile())
                .catch(err => console.log(err));
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
                            Submit
              </FormBtn>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateAccount;