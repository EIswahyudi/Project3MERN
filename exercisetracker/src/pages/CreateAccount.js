import React from "react";
import Hero from "../components/Hero";
import CreateUserForm from "../components/CreateUserForm";

function CreateAccount() {
    return (
        <div>
            <Hero backgroundImage="https://www.bcee.lu/fileadmin/_processed_/f/5/csm_Garmin_Fitbit_Cover_a6b7dd078d.jpg">
            </Hero>
            <div class="ui container exercise">
                <div class="ui raised card m-auto">
                    <h2>Create Account</h2>
                    <CreateUserForm>
                    </CreateUserForm>
                </div>
            </div>
        </div>
    )
}
export default CreateAccount;