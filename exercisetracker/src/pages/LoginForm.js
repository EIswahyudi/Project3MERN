import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import API from "../utils/API";
import Dashboard from "./Dashboard";
import { Input, FormBtn } from "../components/CreateUserForm";

function LoginPage() {

    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState([])

    function loadUserProfile() {
        API.getUser()
            // .then(res.redirect("/dashboard"))
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        // if matches users, redirect to user Dashboard, if not, error
    }

    return (
        <div>
            <Hero backgroundImage="https://www.bcee.lu/fileadmin/_processed_/f/5/csm_Garmin_Fitbit_Cover_a6b7dd078d.jpg">
            </Hero>
            <div class="ui container exercise">
                <div class="ui raised card m-auto">
                    <h2>Log In</h2>
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
export default LoginPage;