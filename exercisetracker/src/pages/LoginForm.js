import React from "react";
import Hero from "../components/Hero";
import LoginForm from "../components/LoginForm";

function LoginPage() {
    return (
        <div>
            <Hero backgroundImage="https://www.bcee.lu/fileadmin/_processed_/f/5/csm_Garmin_Fitbit_Cover_a6b7dd078d.jpg">
            </Hero>
            <div class="ui container exercise">
                <div class="ui raised card m-auto">
                    <LoginForm>
                    </LoginForm>
                </div>
            </div>
            </div>
            )
        }
export default LoginPage;