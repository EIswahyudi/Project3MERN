import React from "react";
import Hero from "../components/Hero";
import CreateUserForm from "../components/CreateUserForm";

function CreateAccount() {
    return (
        <div>
            <Hero backgroundImage="https://static.vecteezy.com/system/resources/previews/000/139/756/large_2x/heart-rate-running-free-vector.jpg">
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